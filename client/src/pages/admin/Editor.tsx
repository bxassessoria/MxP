import React, { useState, useEffect } from 'react';
import { useLocation, useRoute } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
}

export default function AdminEditor() {
  const [, params] = useRoute("/painel/edit/:id");
  const [, setLocation] = useLocation();
  const isEditing = !!params?.id;
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState<BlogPost>({
    id: '',
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImage: '',
    date: new Date().toISOString().split('T')[0],
    author: 'Admin',
    category: 'Novidades'
  });

  useEffect(() => {
    if (isEditing && params?.id) {
      loadPost(params.id);
    }
  }, [isEditing, params?.id]);

  const loadPost = async (id: string) => {
    try {
      setLoading(true);
      // Tentar carregar da API
      try {
        const response = await fetch('/api/posts.php');
        if (response.ok) {
          const posts = await response.json();
          const post = posts.find((p: BlogPost) => p.id === id);
          if (post) {
            setFormData(post);
            return;
          }
        }
      } catch (e) {
        console.warn('API não disponível, usando localStorage');
      }
      
      // Fallback para localStorage
      const localPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
      const localPost = localPosts.find((p: BlogPost) => p.id === id);
      if (localPost) {
        setFormData(localPost);
      } else {
        // Se não achar, pode ser um post estático que não é editável aqui, ou erro
        toast.error('Post não encontrado');
      }
    } catch (error) {
      console.error('Erro ao carregar post:', error);
      toast.error('Erro ao carregar post');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload.php', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setFormData(prev => ({ ...prev, coverImage: data.url }));
          toast.success('Imagem enviada com sucesso!');
        } else {
          throw new Error(data.error || 'Erro no upload');
        }
      } else {
        // Fallback para base64 se API falhar (modo dev local sem PHP)
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, coverImage: reader.result as string }));
          toast.success('Imagem carregada (modo local)');
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error('Erro no upload:', error);
      // Fallback silencioso para base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, coverImage: reader.result as string }));
        toast.success('Imagem carregada (modo local)');
      };
      reader.readAsDataURL(file);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Gerar slug se vazio
      const postData = {
        ...formData,
        slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      };

      let savedViaApi = false;
      try {
        // Tentar salvar na API
        const response = await fetch('/api/posts.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        });

        if (response.ok) {
          savedViaApi = true;
          toast.success('Post salvo com sucesso!');
          setLocation('/painel/dashboard');
        }
      } catch (e) {
        console.warn('API indisponível, salvando localmente');
      }

      if (!savedViaApi) {
        // Fallback para localStorage (modo dev)
        const localPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
        let newPosts;
        
        if (isEditing) {
          newPosts = localPosts.map((p: BlogPost) => p.id === postData.id ? postData : p);
        } else {
          postData.id = Date.now().toString(); // ID temporário para local
          newPosts = [postData, ...localPosts];
        }
        
        localStorage.setItem('blog_posts', JSON.stringify(newPosts));
        toast.success('Post salvo localmente (API indisponível)');
        setLocation('/painel/dashboard');
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
      toast.error('Erro ao salvar post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => setLocation('/painel/dashboard')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Editar Post' : 'Novo Post'}
          </h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Conteúdo do Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Título</Label>
                  <Input
                    required
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Título do artigo..."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Slug (URL amigável)</Label>
                  <Input
                    value={formData.slug}
                    onChange={e => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="titulo-do-artigo"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Resumo</Label>
                <Textarea
                  required
                  value={formData.excerpt}
                  onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Breve descrição para o card..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Imagem de Capa</Label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Input
                      value={formData.coverImage}
                      onChange={e => setFormData({ ...formData, coverImage: e.target.value })}
                      placeholder="URL da imagem ou upload..."
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="file"
                      id="image-upload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                    />
                    <label htmlFor="image-upload">
                      <Button type="button" variant="outline" className="cursor-pointer" asChild disabled={uploading}>
                        <span>
                          <ImageIcon className="w-4 h-4 mr-2" />
                          {uploading ? 'Enviando...' : 'Upload'}
                        </span>
                      </Button>
                    </label>
                  </div>
                </div>
                {formData.coverImage && (
                  <div className="mt-2 relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={formData.coverImage} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Conteúdo (Markdown suportado)</Label>
                <Textarea
                  required
                  value={formData.content}
                  onChange={e => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Escreva seu artigo aqui..."
                  className="min-h-[400px] font-mono"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Autor</Label>
                  <Input
                    value={formData.author}
                    onChange={e => setFormData({ ...formData, author: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Categoria</Label>
                  <Input
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Data</Label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end pt-6">
                <Button type="submit" size="lg" disabled={loading} className="bg-[#EE6025] hover:bg-[#d94e15]">
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? 'Salvando...' : 'Salvar Publicação'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
