import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Server, Cloud, Database, Box, Link as LinkIcon, Tv, Newspaper, Settings, Search, Mic2, Scissors, ClipboardList, BarChart3, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Products() {
  const products = [
    {
      id: "cloudfly",
      title: "CloudFly",
      desc: "Gestão e processamento de acervo digital 100% em nuvem permitindo a visualização em baixa resolução e download da mídia mezanino.",
      icon: <Cloud className="w-12 h-12 text-[#EE6025]" />
    },
    {
      id: "gems-in-a-box",
      title: "Gems in a box",
      desc: "Projetos com infraestrutura on premieses demensionados de acordo com a carga de conteúdo arquivado.",
      icon: <Box className="w-12 h-12 text-[#EE6025]" />
    },
    {
      id: "cloudlink",
      title: "CloudLink",
      desc: "Solução híbrida para gestão de conteúdo digital mesclando vantagens do cloud computing aliado a infraestrutura on premises.",
      icon: <LinkIcon className="w-12 h-12 text-[#EE6025]" />
    },
    {
      id: "custom-prj",
      title: "Custom PRJ",
      desc: "Projetos customizados com aproveitamento da infraestrutura existente para potencializar o poder do seu conteúdo.",
      icon: <Settings className="w-12 h-12 text-[#EE6025]" />
    },
    {
      id: "gendai-tv",
      title: "Gendai TV",
      desc: "Gestão de todo o seu fluxo de produção, integrando ingest, distribuição (broadband) e exibição (broadcast).",
      icon: <Tv className="w-12 h-12 text-[#EE6025]" />
    },
    {
      id: "gendai-news",
      title: "Gendai News",
      desc: "Gestão de todo o seu fluxo de produção televisiva e jornalística, integrando ingest, jornalismo, distribuição e exibição.",
      icon: <Newspaper className="w-12 h-12 text-[#EE6025]" />
    }
  ];

  const features = [
    { title: "Recursos para navegação no acervo", icon: <Search /> },
    { title: "Formulários para pesquisas simples e avançadas", icon: <Database /> },
    { title: "Elaboração de itens favoritos, o Clipboard", icon: <ClipboardList /> },
    { title: "Decupagem de trechos de vídeos e elaboração de clipes", icon: <Scissors /> },
    { title: "Integração com Dicionário Controlado", icon: <FileText /> },
    { title: "Integração com mecanismos de análise inteligente", icon: <BarChart3 /> },
    { title: "Voice Analyser: transcrição de voz para texto", icon: <Mic2 /> },
  ];

  return (
    <Layout>
      {/* Hero Clean */}
      <div className="bg-[#263858] text-white py-24">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossas Soluções</h1>
          <p className="text-xl text-gray-300">
            Tecnologia modular adaptada para cada necessidade do mercado audiovisual.
          </p>
        </div>
      </div>

      {/* Lista de Produtos */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <div key={prod.id} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-[#EE6025] transition-all group flex flex-col">
              <div className="mb-6 bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#EE6025]/10 transition-colors">
                {prod.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#263858] mb-4">{prod.title}</h3>
              <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                {prod.desc}
              </p>
              
              {/* Espaço para Imagem (Placeholder Cinza) */}
              <div className="bg-gray-100 h-40 w-full rounded mb-6 flex items-center justify-center text-gray-400 text-sm uppercase tracking-widest font-bold">
                Imagem do Produto
              </div>

              <Link href={`/products/${prod.id}`}>
                <Button className="w-full bg-white border-2 border-[#263858] text-[#263858] hover:bg-[#263858] hover:text-white font-bold transition-colors">
                    Saiba Mais
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Recursos Detalhados */}
      <div className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="container">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#263858] mb-4">Recursos Avançados</h2>
                <p className="text-gray-600">Ferramentas poderosas inclusas em nossa plataforma MAM.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded border border-gray-200 flex items-start gap-4 hover:shadow-md transition-shadow">
                        <div className="text-[#EE6025] shrink-0 mt-1">
                            {feat.icon}
                        </div>
                        <span className="font-bold text-gray-700 text-sm leading-tight">{feat.title}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Layout>
  );
}
