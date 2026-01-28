import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const posts = [
  {
    id: 1,
    title: "A evolução do MAM na era Cloud Computing",
    excerpt: "Como a migração para a nuvem está transformando a gestão de ativos digitais em grandes emissoras.",
    date: "24 Jan, 2026",
    author: "Equipe Media Portal",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    category: "Tecnologia"
  },
  {
    id: 2,
    title: "Segurança de dados em acervos históricos",
    excerpt: "Práticas essenciais para garantir a integridade e a perenidade de conteúdos audiovisuais digitalizados.",
    date: "15 Jan, 2026",
    author: "Equipe Media Portal",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    category: "Segurança"
  },
  {
    id: 3,
    title: "Media Portal marca presença na NAB Show 2026",
    excerpt: "Confira as novidades que apresentamos no maior evento de broadcast do mundo em Las Vegas.",
    date: "10 Jan, 2026",
    author: "Marketing",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop",
    category: "Eventos"
  },
  {
    id: 4,
    title: "Inteligência Artificial na indexação de vídeos",
    excerpt: "O impacto do reconhecimento facial e de voz na velocidade de busca de arquivos de mídia.",
    date: "05 Jan, 2026",
    author: "Tech Team",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop",
    category: "Inovação"
  }
];

export default function Blog() {
  return (
    <Layout>
      {/* HERO SECTION - PADRÃO HOME */}
      <section className="relative min-h-[90vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
               alt="Background Blog" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white">
              Conteúdo & Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Blog & <span className="text-[#EE6025]">Notícias</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Insights sobre gestão de mídia, tecnologia broadcast e novidades da Media Portal.
            </p>
            
            {/* Search Bar no Card */}
            <div className="relative max-w-lg">
                <input 
                    type="text" 
                    placeholder="Buscar artigos..." 
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:border-[#EE6025] focus:bg-white/20 outline-none transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb / Back Button */}
      <div className="container py-8">
        <Link href="/">
            <Button variant="ghost" className="text-gray-500 hover:text-[#EE6025] pl-0">
                <ArrowLeft size={16} className="mr-2" /> Voltar para Home
            </Button>
        </Link>
      </div>

      {/* Posts Grid */}
      <div className="container pb-24">
        <div className="grid grid-cols-2 gap-4 md:gap-10">
            {posts.map((post) => (
                <div key={post.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#EE6025]/30">
                    <div className="h-40 md:h-64 overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 left-4 bg-[#EE6025] text-white text-xs font-bold px-3 py-1 rounded shadow-md">
                            {post.category}
                        </div>
                    </div>
                    <div className="p-4 md:p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wide">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-[#263858] mb-4 group-hover:text-[#EE6025] transition-colors leading-tight">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 md:mb-6 flex-1 leading-relaxed text-sm md:text-base hidden sm:block">
                            {post.excerpt}
                        </p>
                        <span className="text-[#EE6025] font-bold text-sm uppercase flex items-center gap-2 mt-auto group-hover:translate-x-1 transition-transform">
                            Ler Artigo Completo <ArrowRight size={16} />
                        </span>
                    </div>
                </div>
            ))}
        </div>

        {/* Pagination (Visual Only) */}
        <div className="flex justify-center mt-16 gap-2">
            <Button variant="outline" disabled className="border-gray-200 text-gray-400">Anterior</Button>
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white">1</Button>
            <Button variant="outline" className="border-gray-200 text-gray-600 hover:border-[#EE6025] hover:text-[#EE6025]">2</Button>
            <Button variant="outline" className="border-gray-200 text-gray-600 hover:border-[#EE6025] hover:text-[#EE6025]">3</Button>
            <Button variant="outline" className="border-gray-200 text-gray-600 hover:border-[#EE6025] hover:text-[#EE6025]">Próxima</Button>
        </div>
      </div>
    </Layout>
  );
}
