import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash, LogOut } from "lucide-react";

interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setLocation("/admin");
      return;
    }

    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts.php");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        // Mock data para desenvolvimento local
        setPosts([
          { id: "1", title: "Post Exemplo (Ambiente Local)", date: "2024-02-02", category: "Tecnologia" },
          { id: "2", title: "Bem-vindo ao Painel Admin", date: "2024-02-03", category: "Tutorial" }
        ]);
      }
    } catch (err) {
      console.error("Erro ao buscar posts", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir?")) return;
    
    try {
      await fetch(`/api/posts.php?id=${id}`, { method: "DELETE" });
      fetchPosts();
    } catch (err) {
      alert("Erro ao excluir (pode ser ambiente local)");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setLocation("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gerenciar Blog</h1>
          <div className="flex gap-4">
            <Link href="/admin/new">
              <Button className="flex items-center gap-2">
                <Plus size={16} /> Novo Post
              </Button>
            </Link>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut size={16} /> Sair
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardContent className="flex justify-between items-center p-6">
                <div>
                  <h3 className="font-semibold text-lg">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.date} • {post.category}</p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/edit/${post.id}`}>
                    <Button variant="ghost" size="icon">
                      <Edit size={18} />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="text-red-500" onClick={() => handleDelete(post.id)}>
                    <Trash size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {posts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">Nenhum post encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}
