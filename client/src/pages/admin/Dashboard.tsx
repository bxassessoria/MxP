import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Edit, Trash2, LogOut, LayoutGrid } from 'lucide-react';
import { toast } from 'sonner';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  author: string;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setLocation("/painel");
      return;
    }
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      // Tentar carregar da API
      try {
        const response = await fetch('/api/posts.php');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setPosts(data);
            return;
          }
        }
      } catch (e) {
        console.warn('API não disponível, usando localStorage');
      }

      // Fallback para localStorage
      const localPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
      setPosts(localPosts);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
      toast.error('Erro ao carregar posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este post?')) return;

    try {
      let deletedViaApi = false;
      try {
        const response = await fetch(`/api/posts.php?id=${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          deletedViaApi = true;
          toast.success('Post excluído com sucesso!');
        }
      } catch (e) {
        console.warn('API indisponível, excluindo localmente');
      }

      if (deletedViaApi) {
        setPosts(posts.filter(p => p.id !== id));
      } else {
        // Fallback localStorage
        const localPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
        const newPosts = localPosts.filter((p: BlogPost) => p.id !== id);
        localStorage.setItem('blog_posts', JSON.stringify(newPosts));
        setPosts(newPosts);
        toast.success('Post excluído localmente');
      }
    } catch (error) {
      console.error('Erro ao excluir:', error);
      toast.error('Erro ao excluir post');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setLocation("/painel");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#263858]">Painel Administrativo</h1>
          <div className="flex gap-4">
            <Link href="/painel/cases">
              <Button variant="outline" className="flex items-center gap-2">
                 <LayoutGrid size={16} /> Gerenciar Cases
              </Button>
            </Link>
            <Button variant="outline" onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut size={16} /> Sair
            </Button>
          </div>
        </div>

        {/* Seção Blog */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#263858]">Posts do Blog</h2>
                <Link href="/painel/new">
                    <Button className="flex items-center gap-2 bg-[#EE6025] hover:bg-[#d94e15]">
                        <Plus size={16} /> Novo Post
                    </Button>
                </Link>
            </div>

            {loading ? (
              <div className="text-center py-8 text-gray-500">Carregando...</div>
            ) : (
              <div className="grid gap-4">
                {posts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex justify-between items-center p-4">
                        <div>
                        <h3 className="font-semibold text-lg text-[#263858]">{post.title}</h3>
                        <p className="text-sm text-gray-500">{post.date} • {post.category}</p>
                        </div>
                        <div className="flex gap-2">
                        <Link href={`/painel/edit/${post.id}`}>
                            <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                            <Edit size={18} />
                            </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => handleDelete(post.id)}>
                            <Trash2 size={18} />
                        </Button>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                
                {posts.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-500 mb-4">Nenhum post criado ainda.</p>
                        <Link href="/painel/new">
                            <Button variant="outline">Criar meu primeiro post</Button>
                        </Link>
                    </div>
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
