import { useRoute, Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts as staticPosts } from "@/data/blog-posts";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Scroll to top when post loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("/api/posts.php");
        if (res.ok) {
          const data = await res.json();
          const found = data.find((p: any) => p.slug === slug);
          if (found) {
             setPost({
                ...found,
                image: found.coverImage || found.image || "/images/blog-default.jpg",
                tags: found.tags || ["Tecnologia", "Broadcast"] // Fallback tags
             });
          } else {
             const staticFound = staticPosts.find(p => p.slug === slug);
             setPost(staticFound);
          }
        } else {
           throw new Error("API error");
        }
      } catch (err) {
         const staticFound = staticPosts.find(p => p.slug === slug);
         setPost(staticFound);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-32 text-center">Carregando...</div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#263858]">Artigo não encontrado</h1>
          <p className="text-gray-500 mb-8">O artigo que você está procurando não existe ou foi removido.</p>
          <Link href="/blog">
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Blog
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="bg-white">
        {/* Header do Post */}
        <div className="bg-[#263858] text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          {/* Background Image Blurred */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm"
            style={{ backgroundImage: `url(${post.image})` }}
          ></div>
          
          <div className="container relative z-10 max-w-4xl">
            <Link href="/blog">
              <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-8 pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Blog
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-6 text-sm font-medium">
              <span className="bg-[#EE6025] px-3 py-1 rounded-full text-white">
                {post.category}
              </span>
              <span className="flex items-center text-gray-300">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(post.date).toLocaleDateString('pt-BR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-white">{post.author}</p>
                <p className="text-xs text-gray-400">Autor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="container py-16 max-w-4xl">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Coluna Principal */}
            <div className="md:col-span-12 lg:col-span-9">
              {/* Imagem de Destaque */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Corpo do Texto */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[#263858] prose-a:text-[#EE6025] prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag: string, index: number) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm font-medium flex items-center">
                      <Tag className="mr-1 h-3 w-3" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 flex items-center gap-4">
                <span className="font-bold text-[#263858] flex items-center">
                  <Share2 className="mr-2 h-4 w-4" /> Compartilhar:
                </span>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-3 space-y-8">
              {/* Card Newsletter */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-24">
                <h3 className="font-bold text-[#263858] mb-2">Newsletter</h3>
                <p className="text-sm text-gray-500 mb-4">Receba nossos melhores conteúdos por e-mail.</p>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full p-2 rounded border border-gray-200 mb-2 text-sm"
                />
                <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white">
                  Inscrever-se
                </Button>
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* Posts Relacionados */}
      <section className="bg-gray-50 py-16">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold text-[#263858] mb-8">Você também pode gostar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {staticPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group h-full flex flex-col">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="text-xs text-[#EE6025] font-bold uppercase mb-2 block">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold text-[#263858] mb-2 line-clamp-2 group-hover:text-[#EE6025] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                        {relatedPost.excerpt}
                      </p>
                      <span className="text-xs text-gray-400 font-medium mt-auto">
                        {new Date(relatedPost.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
