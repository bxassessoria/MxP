import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function AdminEditor() {
  const [, params] = useRoute("/admin/edit/:id");
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
    if (isEditing) {
      // Fetch post data if editing
      fetch("/api/posts.php")
        .then(res => res.json())
        .then(posts => {
           const post = posts.find((p: any) => p.id === params.id);
           if (post) setFormData(post);
        })
        .catch(() => console.log("Modo local: não foi possível carregar post"));
    }
  }, [isEditing, params?.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/upload.php", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.url) {
        setFormData(prev => ({ ...prev, coverImage: data.url }));
      }
    } catch (err) {
      alert("Erro no upload (requer PHP rodando)");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/posts.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        alert("Post salvo com sucesso!");
        setLocation("/admin/dashboard");
      } else {
        throw new Error("Erro ao salvar");
      }
    } catch (err) {
      alert("Erro ao salvar (verifique se o backend PHP está rodando). Em produção funcionará.");
    }
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
                  <Label>Título</Label>
                  <Input name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label>Slug (URL)</Label>
                  <Input name="slug" value={formData.slug} onChange={handleChange} placeholder="ex: meu-primeiro-post" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Resumo</Label>
                <Textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} />
              </div>

              <div className="space-y-2">
                <Label>Conteúdo (Markdown ou HTML)</Label>
                <Textarea name="content" value={formData.content} onChange={handleChange} className="min-h-[300px] font-mono" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Categoria</Label>
                  <Input name="category" value={formData.category} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label>Imagem de Capa</Label>
                  <Input type="file" onChange={handleImageUpload} />
                  {formData.coverImage && <p className="text-xs text-gray-500 mt-1">Imagem atual: {formData.coverImage}</p>}
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setLocation("/admin/dashboard")}>Cancelar</Button>
                <Button type="submit">Salvar Post</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
