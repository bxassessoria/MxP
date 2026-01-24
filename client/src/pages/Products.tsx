import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Box, Link as LinkIcon, Settings, Tv, Newspaper } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    id: "cloudfly",
    title: "CloudFly",
    desc: "Gestão e processamento de acervo digital 100% em nuvem permitindo a visualização em baixa resolução e download da mídia mezanino.",
    icon: <Cloud className="w-12 h-12 text-[#00FF00] mb-4" />,
    link: "/products/cloudfly",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "gems-in-a-box",
    title: "Gems in a box",
    desc: "Projetos com infraestrutura on-premises dimensionados de acordo com a carga de conteúdo arquivado.",
    icon: <Box className="w-12 h-12 text-[#00FF00] mb-4" />,
    link: "/products/gems-in-a-box",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "cloudlink",
    title: "CloudLink",
    desc: "Solução híbrida para gestão de conteúdo digital mesclando vantagens do cloud computing aliado a infraestrutura on-premises.",
    icon: <LinkIcon className="w-12 h-12 text-[#00FF00] mb-4" />,
    link: "/products/cloudlink",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "custom-prj",
    title: "Custom PRJ",
    desc: "Projetos customizados com aproveitamento da infraestrutura existente para potencializar o poder do seu conteúdo.",
    icon: <Settings className="w-12 h-12 text-[#00FF00] mb-4" />,
    link: "/products/custom-prj",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendai-tv",
    title: "Gendai TV",
    desc: "Gestão de todo o seu fluxo de produção, integrando ingest, distribuição (broadband) e exibição (broadcast).",
    icon: <Tv className="w-12 h-12 text-[#00FF00] mb-4" />,
    link: "/products/gendai-tv",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendai-news",
    title: "Gendai News",
    desc: "Gestão de todo o seu fluxo de produção televisiva e jornalística, integrando ingest, jornalismo, distribuição e exibição.",
    icon: <Newspaper className="w-12 h-12 text-[#00FF00] mb-4" />,
    link: "/products/gendai-news",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Products() {
  return (
    <Layout>
      <div className="bg-[#02040A] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0056D2]/20 via-transparent to-transparent"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Nossas Soluções</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Tecnologia completa para gestão, arquivamento e distribuição de ativos digitais.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.link}>
              <a className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00FF00]/50 transition-all hover:shadow-[0_0_30px_rgba(0,255,0,0.1)] flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-6">
                    {product.icon}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00FF00] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-1 leading-relaxed">{product.desc}</p>
                  <div className="flex items-center text-[#00FF00] font-bold text-sm uppercase tracking-wider mt-auto">
                    Conhecer Solução <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#050A1F] py-20 border-t border-white/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Precisa de ajuda para escolher?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Nossos consultores podem analisar sua infraestrutura e indicar a melhor solução.
          </p>
          <Link href="/contact">
            <Button className="bg-[#00FF00] hover:bg-green-400 text-black font-bold px-8 py-3 h-auto text-lg rounded-full shadow-[0_0_20px_rgba(0,255,0,0.3)]">
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
