import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Media Portal na NAB Show 2024: O que esperar?",
      excerpt: "Confira as novidades que levaremos para o maior evento de broadcast do mundo em Las Vegas.",
      date: "15 Jan 2024",
      author: "Equipe Media Portal",
      category: "Eventos",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Como a Inteligência Artificial está transformando o MAM",
      excerpt: "Entenda como algoritmos de reconhecimento facial e transcrição automática aceleram a busca de arquivos.",
      date: "10 Jan 2024",
      author: "Tech Team",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Case de Sucesso: A transformação digital do Canal UOL",
      excerpt: "Veja como ajudamos um dos maiores portais do Brasil a gerenciar milhares de horas de vídeo.",
      date: "05 Jan 2024",
      author: "Comercial",
      category: "Cases",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Cloud vs On-Premises: Qual a melhor estratégia?",
      excerpt: "Um comparativo detalhado para ajudar CTOs a decidirem a infraestrutura ideal para seus acervos.",
      date: "20 Dez 2023",
      author: "Consultoria",
      category: "Artigos Técnicos",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Media Portal comemora 16 anos de inovação",
      excerpt: "Uma retrospectiva da nossa jornada desde 2008 transformando o mercado audiovisual brasileiro.",
      date: "12 Dez 2023",
      author: "Diretoria",
      category: "Institucional",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Novas features do Gendai TV para 2024",
      excerpt: "Conheça as atualizações de playout e grafismo que acabam de chegar na nossa plataforma.",
      date: "01 Dez 2023",
      author: "Produto",
      category: "Novidades",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <Layout>
      {/* Hero Clean & Search */}
      <div className="bg-gray-50 border-b border-gray-200 py-20">
        <div className="container max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <Link href="/">
                <Button variant="ghost" className="text-gray-500 hover:text-[#EE6025]">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
                </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#263858] mb-6">Blog Media Portal</h1>
          <p className="text-xl text-gray-600 mb-10">
            Notícias, tendências e insights sobre o mercado de broadcast e gestão de ativos digitais.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Input 
                type="text" 
                placeholder="Pesquisar artigos..." 
                className="pl-12 py-6 text-lg rounded-full border-gray-300 focus:border-[#EE6025] focus:ring-[#EE6025]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Grid de Artigos */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <span className="absolute top-4 left-4 bg-[#EE6025] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-[#263858] mb-3 group-hover:text-[#EE6025] transition-colors leading-tight">
                    {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                </p>
                <span className="text-[#EE6025] font-bold text-sm uppercase tracking-wider group-hover:underline">Ler Mais &rarr;</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <Button variant="outline" className="border-[#263858] text-[#263858] hover:bg-[#263858] hover:text-white px-8 py-6 font-bold">
                Carregar Mais Artigos
            </Button>
        </div>
      </div>
    </Layout>
  );
}
