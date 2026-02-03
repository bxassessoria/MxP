import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { clientsData } from "@/data/clients";

export default function CaseEditor() {
  const [, params] = useRoute("/painel/cases/edit/:id");
  const [, setLocation] = useLocation();
  const isEditing = !!params?.id;

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    slug: "",
    client: "",
    logo: "",
    summary: "",
    content: "",
    coverImage: "",
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    if (isEditing) {
      fetch("/api/cases.php")
        .then(res => res.json())
        .then(cases => {
           const found = cases.find((c: any) => c.id === params.id);
           if (found) setFormData(found);
        })
        .catch(() => console.log("Modo local: não foi possível carregar case"));
    }
  }, [isEditing, params?.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: "logo" | "coverImage") => {
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
        setFormData(prev => ({ ...prev, [field]: data.url }));
      }
    } catch (err) {
      alert("Erro no upload (requer PHP rodando)");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/cases.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        alert("Case salvo com sucesso!");
        setLocation("/painel/cases");
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
            <CardTitle>{isEditing ? "Editar Case" : "Novo Case"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Título do Case</Label>
                  <Input name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label>Slug (URL)</Label>
                  <Input name="slug" value={formData.slug} onChange={handleChange} placeholder="ex: tv-cultura-transformacao" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Selecionar Cliente Existente</Label>
                  <Select 
                    onValueChange={(value) => {
                      const client = clientsData.find(c => c.name === value);
                      if (client) {
                        setFormData(prev => ({ 
                          ...prev, 
                          client: client.name, 
                          logo: client.logo 
                        }));
                      } else if (value === "new") {
                         setFormData(prev => ({ ...prev, client: "", logo: "" }));
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Escolha um cliente..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">+ Novo Cliente (Digitar Manualmente)</SelectItem>
                      {clientsData.map(c => (
                        <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nome do Cliente (Manual)</Label>
                  <Input name="client" value={formData.client} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label>Logo do Cliente (Manual)</Label>
                  <Input type="file" onChange={(e) => handleUpload(e, "logo")} />
                  {formData.logo && <img src={formData.logo} alt="Logo" className="h-10 mt-2 object-contain bg-gray-100 p-1 rounded" />}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Resumo Curto</Label>
                <Textarea name="summary" value={formData.summary} onChange={handleChange} rows={2} />
              </div>

              <div className="space-y-2">
                <Label>Conteúdo Completo (Markdown/HTML)</Label>
                <Textarea name="content" value={formData.content} onChange={handleChange} className="min-h-[300px] font-mono" required />
              </div>

              <div className="space-y-2">
                <Label>Imagem de Capa (Hero)</Label>
                <Input type="file" onChange={(e) => handleUpload(e, "coverImage")} />
                {formData.coverImage && <img src={formData.coverImage} alt="Capa" className="h-32 mt-2 object-cover rounded" />}
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setLocation("/painel/cases")}>Cancelar</Button>
                <Button type="submit">Salvar Case</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
