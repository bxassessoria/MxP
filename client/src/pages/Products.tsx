import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Cloud, Server, Box, Tv, Newspaper, Settings, Mic2, Search, Scissors, Database, BarChart3, Globe, DollarSign } from "lucide-react";
import { Link } from "wouter";

const features = [
  { title: "Recursos", icon: <Settings /> },
  { title: "Ganhos operacionais", icon: <BarChart3 /> },
  { title: "Precificação", icon: <DollarSign /> },
  { title: "Navegação no acervo", icon: <Globe /> },
  { title: "Pesquisas avançadas", icon: <Search /> },
  { title: "Clipboard (Favoritos)", icon: <Box /> },
  { title: "Decupagem de vídeos", icon: <Scissors /> },
  { title: "Dicionário Controlado", icon: <Database /> },
  { title: "Análise Inteligente", icon: <BarChart3 /> },
  { title: "Voice Analyser", icon: <Mic2 />, desc: "Transcrição de voz para texto e correção." }
];

const products = [
  {
    id: "cloudfly",
    name: "CloudFly",
    desc: "Gestão e processamento de acervo digital 100% em nuvem permitindo a visualização em baixa resolução e download da mídia mezanino.",
    icon: <Cloud size={40} className="text-[#EE6025]" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "gems",
    name: "Gems in a Box",
    desc: "Projetos com infraestrutura on-premises dimensionados de acordo com a carga de conteúdo arquivado.",
    icon: <Box size={40} className="text-[#EE6025]" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "cloudlink",
    name: "CloudLink",
    desc: "Solução híbrida para gestão de conteúdo digital mesclando vantagens do cloud computing aliado a infraestrutura on premises.",
    icon: <Server size={40} className="text-[#EE6025]" />,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "custom",
    name: "Custom PRJ",
    desc: "Projetos customizados com aproveitamento da infraestrutura existente para potencializar o poder do seu conteúdo.",
    icon: <Settings size={40} className="text-[#EE6025]" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendaitv",
    name: "Gendai TV",
    desc: "Gestão de todo o seu fluxo de produção, integrando ingest, distribuição (broadband) e exibição (broadcast).",
    icon: <Tv size={40} className="text-[#EE6025]" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendainews",
    name: "Gendai News",
    desc: "Gestão de todo o seu fluxo de produção televisiva e jornalística, integrando ingest, jornalismo, distribuição e exibição.",
    icon: <Newspaper size={40} className="text-[#EE6025]" />,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2069&auto=format&fit=crop"
  }
];

export default function Products() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#263858] text-white py-24">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossas Soluções</h1>
          <p className="text-xl text-gray-300">
            Tecnologia flexível para atender desde pequenas produtoras até grandes redes de televisão.
          </p>
        </div>
      </div>

      {/* Lista de Produtos */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                 <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                 <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    {product.icon}
                 </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#263858] mb-4 group-hover:text-[#EE6025] transition-colors">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                  {product.desc}
                </p>
                <Link href={`/products/${product.id}`}>
                  <Button className="w-full bg-white border-2 border-[#EE6025] text-[#EE6025] hover:bg-[#EE6025] hover:text-white font-bold transition-all">
                    Ver Detalhes
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recursos Detalhados */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container">
            <h2 className="text-3xl font-bold text-[#263858] text-center mb-16">Funcionalidades do Ecossistema</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="bg-[#EE6025]/10 p-3 rounded-lg text-[#EE6025]">
                            {feat.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-[#263858] text-lg mb-1">{feat.title}</h3>
                            {feat.desc && <p className="text-sm text-gray-500">{feat.desc}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Layout>
  );
}
