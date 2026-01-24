import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Server, Search, Shield, Zap, Cloud, Box, Settings, Tv, Newspaper, Link as LinkIcon } from "lucide-react";
import { Link, useRoute } from "wouter";

const productData: Record<string, { title: string; desc: string; features: string[]; image: string; icon: any }> = {
  "cloudfly": {
    title: "CloudFly",
    desc: "Gestão e processamento de acervo digital 100% em nuvem. O CloudFly permite que sua equipe acesse, visualize e baixe mídias de qualquer lugar do mundo, com visualização em baixa resolução (proxy) instantânea e download da mídia em alta qualidade (mezanino) quando necessário.",
    features: ["Acesso Remoto Global", "Proxy de Baixa Resolução", "Download de Mezanino", "Escalabilidade Ilimitada", "Custo-Eficiente", "Segurança na Nuvem"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    icon: <Cloud className="w-16 h-16 text-[#00FF00]" />
  },
  "gems-in-a-box": {
    title: "Gems in a box",
    desc: "A solução robusta para quem precisa de infraestrutura local. Projetos on-premises dimensionados sob medida para a carga de conteúdo arquivado da sua empresa, garantindo performance máxima e controle total dos dados dentro da sua rede.",
    features: ["Infraestrutura Dedicada", "Alta Performance Local", "Controle Total de Dados", "Dimensionamento Personalizado", "Sem Latência de Internet", "Segurança Física"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    icon: <Box className="w-16 h-16 text-[#00FF00]" />
  },
  "cloudlink": {
    title: "CloudLink",
    desc: "O melhor dos dois mundos. O CloudLink é uma solução híbrida que integra a flexibilidade e o alcance do cloud computing com a robustez e velocidade da infraestrutura on-premises, permitindo fluxos de trabalho complexos e distribuídos.",
    features: ["Arquitetura Híbrida", "Sincronização Inteligente", "Backup Automático na Nuvem", "Edição Local de Alta Velocidade", "Colaboração Remota", "Redundância de Dados"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    icon: <LinkIcon className="w-16 h-16 text-[#00FF00]" />
  },
  "custom-prj": {
    title: "Custom PRJ",
    desc: "Sua infraestrutura, potencializada. Desenvolvemos projetos customizados que aproveitam o hardware e redes já existentes na sua empresa para implementar o ecossistema Media Portal, otimizando investimentos e maximizando o ROI.",
    features: ["Aproveitamento de Legado", "Integração Customizada", "Consultoria Especializada", "Otimização de ROI", "Adaptação de Fluxos", "Suporte Dedicado"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    icon: <Settings className="w-16 h-16 text-[#00FF00]" />
  },
  "gendai-tv": {
    title: "Gendai TV",
    desc: "A solução completa para emissoras de TV. O Gendai TV gerencia todo o fluxo de produção, desde a ingestão do conteúdo bruto até a distribuição via broadband (streaming) e exibição broadcast tradicional, tudo em uma única plataforma integrada.",
    features: ["Ingest Automatizado", "Gestão de Grade", "Playout Broadcast", "Streaming Integrado", "Controle Mestre", "Arquivamento Automático"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    icon: <Tv className="w-16 h-16 text-[#00FF00]" />
  },
  "gendai-news": {
    title: "Gendai News",
    desc: "Agilidade para o jornalismo moderno. Focado no fluxo de produção de notícias, o Gendai News integra a redação, edição e exibição, permitindo que jornalistas produzam e publiquem matérias com velocidade recorde.",
    features: ["Integração com NRCS", "Edição Rápida (Cuts)", "Publicação Multiplataforma", "Gestão de Rundown", "Teleprompter Integrado", "Colaboração em Tempo Real"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    icon: <Newspaper className="w-16 h-16 text-[#00FF00]" />
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const productId = params?.id || "cloudfly"; 
  const product = productData[productId] || productData["cloudfly"];

  return (
    <Layout>
      <div className="bg-[#02040A] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src={product.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-[#02040A]/80 to-transparent z-0"></div>
        
        <div className="container relative z-10">
          <Link href="/products">
            <a className="inline-flex items-center text-gray-400 hover:text-[#00FF00] mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Voltar para Soluções
            </a>
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="bg-[#00FF00]/10 p-4 rounded-2xl border border-[#00FF00]/20 hidden md:block">
                {product.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">{product.title}</h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            {product.desc}
          </p>
          
          <div className="flex gap-4">
            <Button className="bg-[#00FF00] hover:bg-green-400 text-black font-bold px-8 py-3 h-auto text-lg rounded-full shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                Solicitar Demo
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-8 py-3 h-auto text-lg rounded-full">
                Ficha Técnica
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Principais Recursos</h2>
                <div className="grid gap-6">
                    {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00FF00]/30 transition-colors group">
                            <CheckCircle2 className="text-[#00FF00] mt-1 mr-4 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">{feature}</h3>
                                <p className="text-gray-400 text-sm">Funcionalidade otimizada para alta performance no {product.title}.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="space-y-8">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF00]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <h3 className="text-xl font-bold text-white mb-6 relative z-10">Por que escolher {product.title}?</h3>
                    <ul className="space-y-4 relative z-10">
                        <li className="flex items-center text-gray-300">
                            <Shield className="text-[#00FF00] mr-3" size={20} /> Segurança de nível corporativo
                        </li>
                        <li className="flex items-center text-gray-300">
                            <Zap className="text-[#00FF00] mr-3" size={20} /> Implementação ágil
                        </li>
                        <li className="flex items-center text-gray-300">
                            <Search className="text-[#00FF00] mr-3" size={20} /> Suporte nativo em português
                        </li>
                        <li className="flex items-center text-gray-300">
                            <Server className="text-[#00FF00] mr-3" size={20} /> Tecnologia proprietária Media Portal
                        </li>
                    </ul>
                </div>
                
                <img src={product.image} alt={product.title} className="rounded-2xl shadow-2xl border border-white/10 w-full hover:grayscale-0 transition-all duration-500 grayscale-[50%]" />
            </div>
        </div>
      </div>
    </Layout>
  );
}
