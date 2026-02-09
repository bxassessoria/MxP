import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { blogPosts as staticPosts } from "@/data/blog-posts";
import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carregar posts locais e mesclar com estáticos
    const loadPosts = () => {
      try {
        const savedPosts = JSON.parse(localStorage.getItem("blog_posts") || "[]");
        
        // Formatar posts locais para o mesmo formato (se necessário)
        const formattedLocalPosts = savedPosts.map((p: any) => ({
          ...p,
          image: p.coverImage || p.image || "/images/blog-default.jpg"
        }));

        // Combinar: Locais primeiro (mais recentes), depois estáticos
        // Remover duplicatas por ID se houver conflito
        const allPosts = [...formattedLocalPosts, ...staticPosts];
        
        // Ordenar por data (decrescente)
        allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setPosts(allPosts);
      } catch (err) {
        console.error("Erro ao carregar posts", err);
        setPosts(staticPosts);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* HERO SECTION - PADRÃO HOME/CASES */}
      <section className="relative min-h-[60vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
               alt="Background Blog" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] to-transparent"></div>
        </div>
        
        <div className="container relative z-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white">
              Blog Media Portal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Insights e <span className="text-[#EE6025]">Novidades</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-10">
              Fique por dentro das tendências e informações do universo Broadcast.
            </p>

            {/* Search Bar dentro do Card */}
            <div className="max-w-lg mx-auto relative">
                <Input 
                type="text" 
                placeholder="Pesquisar artigos..." 
                className="h-14 pl-12 pr-4 rounded-full bg-white text-gray-900 border-none shadow-lg focus:ring-2 focus:ring-[#EE6025] text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          {loading ? (
             <div className="text-center py-20">
                <p className="text-gray-500">Carregando artigos...</p>
             </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-56 overflow-hidden cursor-pointer">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { e.currentTarget.src = "/images/blog-default.jpg" }} 
                      />
                      <div className="absolute top-4 left-4 bg-[#EE6025] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                        {post.category}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4 font-medium uppercase tracking-wide">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1 text-[#EE6025]" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1 text-[#EE6025]" />
                        {post.author}
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-[#263858] mb-3 group-hover:text-[#EE6025] transition-colors cursor-pointer line-clamp-2 leading-tight">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-[#EE6025] font-bold hover:no-underline group-hover:translate-x-1 transition-transform mt-auto self-start">
                        Ler mais <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-500 text-lg mb-6">Tente buscar por outros termos ou palavras-chave.</p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#EE6025] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10"></div>
        <div className="container text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mantenha-se informado</h2>
          <p className="text-white/90 mb-8 text-lg">
            Receba em primeira mão artigos, tendências e novidades sobre o mercado Broadcast e tecnologias de mídia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail corporativo" 
              className="bg-white text-gray-900 border-none h-14 text-lg placeholder:text-gray-400"
            />
            <Button className="bg-[#263858] hover:bg-[#1a2840] text-white font-bold h-14 px-8 text-lg shadow-lg">
              Inscrever-se
            </Button>
          </div>
          <p className="text-white/60 text-xs mt-4">
            Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
          </p>
        </div>
      </section>
    </Layout>
  );
}
