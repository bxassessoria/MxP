import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Cloud, Server, RefreshCw, Settings, Tv, Globe, FileText, Mic, Scissors, Search, Database, BarChart } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    id: "cloudfly",
    title: "CloudFly",
    subtitle: "MAM 100% Cloud",
    desc: "Gestão e processamento de acervo digital 100% em nuvem permitindo a visualização em baixa resolução e download da mídia mezanino.",
    icon: <Cloud size={48} />,
    features: ["Acesso remoto total", "Escalabilidade elástica", "Sem custo de hardware"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "gems",
    title: "Gems in a Box",
    subtitle: "MAM On-Premises",
    desc: "Projetos com infraestrutura on premises dimensionados de acordo com a carga de conteúdo arquivado.",
    icon: <Server size={48} />,
    features: ["Alta performance local", "Segurança de dados isolada", "Sem latência de rede"],
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "cloudlink",
    title: "CloudLink",
    subtitle: "MAM Híbrido",
    desc: "Solução híbrida para gestão de conteúdo digital mesclando vantagens do cloud computing aliado a infraestrutura on premises.",
    icon: <RefreshCw size={48} />,
    features: ["O melhor dos dois mundos", "Backup automático na nuvem", "Edição local rápida"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "custom",
    title: "Custom PRJ",
    subtitle: "Projetos Sob Medida",
    desc: "Projetos customizados com aproveitamento da infraestrutura existente para potencializar o poder do seu conteúdo.",
    icon: <Settings size={48} />,
    features: ["Aproveitamento de legado", "Fluxos específicos", "Consultoria dedicada"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendai-tv",
    title: "Gendai TV",
    subtitle: "Fluxo Broadcast Completo",
    desc: "Gestão de todo o seu fluxo de produção, integrando ingest, distribuição (broadband) e exibição (broadcast).",
    icon: <Tv size={48} />,
    features: ["Ingest automatizado", "Playout integrado", "Gestão de grade"],
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendai-news",
    title: "Gendai News",
    subtitle: "Fluxo Jornalístico",
    desc: "Gestão de todo o seu fluxo de produção televisiva e jornalística, integrando ingest, jornalismo, distribuição e exibição.",
    icon: <Globe size={48} />,
    features: ["Integração NRCS", "Edição rápida de notícias", "Publicação multi-tela"],
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop"
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
      {/* 1. HERO SECTION PADRONIZADA */}
      <section className="relative min-h-[60vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <img 
               src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070&auto=format&fit=crop" 
               alt="Background Produtos" 
               className="w-full h-full object-cover"
             />
        </div>
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="text-white space-y-6">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-2">
              Portfólio Completo
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Soluções para cada <span className="text-[#EE6025]">desafio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Conheça nossa linha completa de produtos para gestão, processamento e distribuição de mídia.
            </p>
          </div>
        </div>
      </section>

      {/* LISTA DE PRODUTOS */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-24">
            {products.map((prod, idx) => (
              <div key={prod.id} id={prod.id} className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center text-[#EE6025] mb-6">
                    {prod.icon}
                  </div>
                  <div>
                    <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-2 block">{prod.subtitle}</span>
                    <h2 className="text-4xl font-bold text-[#263858] mb-4">{prod.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                  
                  <ul className="space-y-4">
                    {prod.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#263858] font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <CheckCircle2 size={18} className="text-[#EE6025]" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link href={`/product/${prod.id}`}>
                      <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white h-12 px-8 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">
                        Ver Detalhes Técnicos
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className={`relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                   <img 
                     src={prod.image} 
                     alt={prod.title} 
                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#263858]/80 to-transparent opacity-60"></div>
                   <div className="absolute bottom-8 left-8 right-8 text-white">
                      <p className="font-mono text-sm opacity-80 mb-2">Architecture View</p>
                      <div className="h-1 w-20 bg-[#EE6025] rounded-full"></div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECURSOS GERAIS (Lista Solicitada) */}
      <section className="py-24 bg-[#F8F9FA] border-y border-gray-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#263858] mb-6">Recursos da Plataforma</h2>
            <p className="text-gray-600">
              Funcionalidades transversais disponíveis em todas as nossas soluções.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresList.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#EE6025] hover:shadow-md transition-all group">
                <div className="text-[#263858] group-hover:text-[#EE6025] transition-colors mb-4">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-lg text-[#263858] mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#263858] text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Precificação Flexível</h2>
          <p className="text-xl text-white/90 mb-10">
            Nossos modelos comerciais se adaptam ao tamanho da sua operação (CAPEX ou OPEX).
          </p>
          <Link href="/contact">
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold text-lg px-10 py-6 h-auto rounded shadow-xl">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
