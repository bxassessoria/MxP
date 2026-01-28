import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Cloud, Server, RefreshCw, Settings, Tv, Globe, FileText, Mic, Scissors, Search, Database, BarChart, Layers, FolderArchive, Link as LinkIcon, Newspaper, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Produtos principais (MAM, PAM, DAM) - Exibição horizontal
const coreProducts = [
  {
    id: "mam",
    title: "MAM",
    subtitle: "Media Asset Management",
    desc: "Gestão de Ativos de Mídia para emissoras e produtores. Organize, catalogue e distribua com eficiência.",
    icon: <Layers size={40} />,
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100"
  },
  {
    id: "pam",
    title: "PAM",
    subtitle: "Production Asset Management",
    desc: "Controle de multiversões e catalogação avançada para fluxos de trabalho de edição complexos.",
    icon: <FolderArchive size={40} />,
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-100"
  },
  {
    id: "dam",
    title: "DAM",
    subtitle: "Digital Asset Management",
    desc: "Centralize imagens, documentos e marcas corporativas em um único repositório seguro.",
    icon: <Database size={40} />,
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-100"
  }
];

// Produtos detalhados - Grid 3x2
const detailedProducts = [
  {
    id: "cloudfly",
    title: "CloudFly",
    subtitle: "MAM 100% Cloud",
    desc: "Gestão e processamento de acervo digital 100% em nuvem permitindo a visualização em baixa resolução e download da mídia mezanino.",
    icon: <Cloud size={32} />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "gems-in-a-box",
    title: "Gems in a Box",
    subtitle: "MAM On-Premises",
    desc: "Projetos com infraestrutura on premises dimensionados de acordo com a carga de conteúdo arquivado, do pequeno ao grande volume.",
    icon: <Server size={32} />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "cloudlink",
    title: "CloudLink",
    subtitle: "MAM Híbrido",
    desc: "Solução híbrida para gestão de conteúdo digital mesclando vantagens do cloud computing aliado a infraestrutura on premises.",
    icon: <LinkIcon size={32} />,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "custom-prj",
    title: "Custom PRJ",
    subtitle: "Projetos Sob Medida",
    desc: "Projetos customizados com aproveitamento da infraestrutura existente para potencializar o poder do seu conteúdo e maximizar ROI.",
    icon: <Settings size={32} />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendai-tv",
    title: "Gendai TV",
    subtitle: "Fluxo Broadcast Completo",
    desc: "Gestão de todo o seu fluxo de produção, integrando ingest, distribuição (broadband) e exibição (broadcast) em uma plataforma unificada.",
    icon: <Tv size={32} />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendai-news",
    title: "Gendai News",
    subtitle: "Fluxo Jornalístico",
    desc: "Gestão de todo o seu fluxo de produção televisiva e jornalística, integrando ingest, redação, distribuição e exibição com agilidade.",
    icon: <Newspaper size={32} />,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
  }
];

const featuresList = [
  { icon: <BarChart size={24} />, title: "Ganhos operacionais", desc: "Otimize tempo e recursos com fluxos automatizados." },
  { icon: <Search size={24} />, title: "Navegação no acervo", desc: "Busca intuitiva e filtros avançados para encontrar qualquer asset." },
  { icon: <FileText size={24} />, title: "Pesquisas avançadas", desc: "Formulários customizáveis para metadados específicos." },
  { icon: <Database size={24} />, title: "Clipboard", desc: "Elaboração de itens favoritos e coleções pessoais." },
  { icon: <Scissors size={24} />, title: "Decupagem e Clipes", desc: "Corte trechos de vídeos e crie clipes sem renderização." },
  { icon: <Settings size={24} />, title: "Dicionário Controlado", desc: "Padronização de termos e taxonomia para catalogação." },
  { icon: <BarChart size={24} />, title: "Análise Inteligente", desc: "Dashboards de uso e performance do acervo." },
  { icon: <Mic size={24} />, title: "Voice Analyser", desc: "Transcrição de voz para texto com interface de correção." }
];

export default function Products() {
  return (
    <Layout>
      {/* HERO SECTION - PADRÃO HOME */}
      <section className="relative min-h-[90vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070&auto=format&fit=crop" 
               alt="Background Produtos" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white">
              Portfólio Completo
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Soluções para cada <span className="text-[#EE6025]">desafio</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Conheça nossa linha completa de produtos para gestão, processamento e distribuição de mídia. Modelos flexíveis para sua necessidade.
            </p>
            <div className="h-1 w-20 bg-[#EE6025] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CORE PRODUCTS - HORIZONTAL ROW */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {coreProducts.map((prod) => (
              <div key={prod.id} className={`p-8 rounded-xl border ${prod.border} hover:shadow-lg transition-all bg-white group`}>
                <div className={`w-16 h-16 rounded-lg ${prod.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {prod.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#263858] mb-2">{prod.title}</h3>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{prod.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">
                  {prod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PRODUCTS - GRID 3x2 */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#263858] mb-4">Soluções Especializadas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tecnologia de ponta para atender demandas específicas de broadcast, jornalismo e arquivamento.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {detailedProducts.map((prod) => (
              <div key={prod.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-[#EE6025] shadow-sm">
                    {prod.icon}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#EE6025] uppercase tracking-wider block mb-1">
                      {prod.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-[#263858]">{prod.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {prod.desc}
                  </p>
                  
                  <Link href={`/product/${prod.id}`}>
                    <Button variant="outline" className="w-full border-[#EE6025] text-[#EE6025] hover:bg-[#EE6025] hover:text-white font-bold group-hover:bg-[#EE6025] group-hover:text-white transition-all">
                      Ver Detalhes <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECURSOS GERAIS */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#263858] mb-6">Recursos da Plataforma</h2>
            <p className="text-gray-600">
              Funcionalidades transversais disponíveis em todas as nossas soluções.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuresList.map((feat, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-[#EE6025] transition-colors group">
                <div className="text-[#263858] group-hover:text-[#EE6025] transition-colors mb-3">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-base text-[#263858] mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#263858] text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Precificação Flexível</h2>
          <p className="text-lg text-gray-300 mb-8">
            Nossos modelos comerciais se adaptam ao tamanho da sua operação (CAPEX ou OPEX).
          </p>
          <Link href="/contact">
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold text-lg px-8 py-6 h-auto rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
