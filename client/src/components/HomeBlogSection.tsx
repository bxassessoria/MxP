import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export default function HomeBlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts.php");
        if (res.ok) {
          const data = await res.json();
          // Pega os 3 posts mais recentes
          const recent = data
            .sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 3);
          
          // Mapeia para garantir imagem
          setPosts(recent.map((p: any) => ({
            ...p,
            image: p.coverImage || p.image || "/images/blog-default.jpg"
          })));
        } else {
           // Se API falhar (local), usa array vazio pois limpamos os estáticos
           setPosts([]);
        }
      } catch (err) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading || posts.length === 0) {
    return null; // Não exibe a seção se não houver posts
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-2 block">Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#263858]">Últimas Notícias</h2>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="hidden md:flex text-[#EE6025] border-[#EE6025] hover:bg-[#EE6025] hover:text-white">
              Ver todos os artigos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#EE6025] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <Calendar size={14} className="mr-1 text-[#EE6025]" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                  <h3 className="text-lg font-bold text-[#263858] mb-3 group-hover:text-[#EE6025] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="text-[#EE6025] font-bold text-sm flex items-center mt-auto group-hover:translate-x-1 transition-transform">
                    Ler artigo <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog">
            <Button variant="outline" className="w-full text-[#EE6025] border-[#EE6025] hover:bg-[#EE6025] hover:text-white">
              Ver todos os artigos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
