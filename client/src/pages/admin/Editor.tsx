import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { blogPosts as initialPosts } from "@/data/blog-posts"; // Importar dados iniciais se existirem

export default function AdminEditor() {
  const [, params] = useRoute("/painel/edit/:id");
  const [, setLocation] = useLocation();
  const isEditing = !!params?.id;

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    category: "Tecnologia",
    author: "Admin",
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    if (isEditing && params?.id) {
      // Carregar posts do localStorage ou usar inicial
      const savedPosts = JSON.parse(localStorage.getItem("blog_posts") || "[]");
      const allPosts = [...savedPosts]; // Poderia mesclar com initialPosts se quisesse editar os estáticos, mas geralmente editamos apenas os novos ou copiados.
      
      const post = allPosts.find((p: any) => p.id === params.id);
      if (post) {
        setFormData(post);
      } else {
        // Tentar achar nos estáticos para carregar no form (read-only id)
        // Se não tiver initialPosts importado, ignorar.
      }
    }
  }, [isEditing, params?.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Upload simulado (apenas pega URL ou converte base64 se fosse pequeno, aqui vamos pedir URL)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Aqui seria URL direta
    setFormData(prev => ({ ...prev, coverImage: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação
    if (!formData.title || !formData.slug || !formData.content) {
      alert("Preencha os campos obrigatórios: Título, Slug e Conteúdo.");
      return;
    }

    const savedPosts = JSON.parse(localStorage.getItem("blog_posts") || "[]");
    
    if (isEditing) {
      const updatedPosts = savedPosts.map((p: any) => p.id === formData.id ? formData : p);
      localStorage.setItem("blog_posts", JSON.stringify(updatedPosts));
    } else {
      const newPost = { ...formData, id: Date.now().toString() };
      localStorage.setItem("blog_posts", JSON.stringify([...savedPosts, newPost]));
    }
    
    alert("Post salvo com sucesso! (Armazenamento Local)");
    setLocation("/painel/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{isEditing ? "Editar Post" : "Novo Post"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Título *</Label>
                  <Input name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label>Slug (URL) *</Label>
                  <Input name="slug" value={formData.slug} onChange={handleChange} placeholder="ex: novidades-2026" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Resumo</Label>
                <Textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} />
              </div>

              <div className="space-y-2">
                <Label>Conteúdo (Markdown ou HTML) *</Label>
                <Textarea name="content" value={formData.content} onChange={handleChange} className="min-h-[300px] font-mono" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Categoria</Label>
                  <Input name="category" value={formData.category} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label>URL da Imagem de Capa</Label>
                  <Input name="coverImage" value={formData.coverImage} onChange={handleChange} placeholder="https://..." />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setLocation("/painel/dashboard")}>Cancelar</Button>
                <Button type="submit" className="bg-[#EE6025] hover:bg-[#d94e15]">Salvar Post</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
