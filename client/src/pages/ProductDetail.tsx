import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Server, Search, Shield, Zap, Cloud, Box, Link as LinkIcon, Settings, Tv, Newspaper, ChevronDown } from "lucide-react";
import { Link, useRoute } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productData: Record<string, { title: string; desc: string; features: string[]; image: string; icon: any; faqs: {q: string, a: string}[] }> = {
  "cloudfly": {
    title: "CloudFly",
    desc: "Gestão e processamento de acervo digital 100% em nuvem. O CloudFly permite que sua equipe acesse, visualize e baixe mídias de qualquer lugar do mundo, com visualização em baixa resolução (proxy) instantânea e download da mídia em alta qualidade (mezanino) quando necessário.",
    features: ["Acesso Remoto Global", "Proxy de Baixa Resolução", "Download de Mezanino", "Escalabilidade Ilimitada", "Custo-Eficiente", "Segurança na Nuvem"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    icon: <Cloud className="w-16 h-16 text-[#EE6025]" />,
    faqs: [
        { q: "O CloudFly precisa de hardware local?", a: "Não, o CloudFly é 100% baseado em nuvem, eliminando a necessidade de servidores físicos na sua empresa." },
        { q: "Como funciona a segurança dos dados?", a: "Utilizamos criptografia de ponta a ponta e data centers certificados (Tier III/IV) para garantir a integridade dos seus ativos." }
    ]
  },
  "gems-in-a-box": {
    title: "Gems in a Box",
    desc: "A solução robusta para quem precisa de infraestrutura local. Projetos on-premises dimensionados sob medida para a carga de conteúdo arquivado da sua empresa, garantindo performance máxima e controle total dos dados dentro da sua rede.",
    features: ["Infraestrutura Dedicada", "Alta Performance Local", "Controle Total de Dados", "Dimensionamento Personalizado", "Sem Latência de Internet", "Segurança Física"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    icon: <Box className="w-16 h-16 text-[#EE6025]" />,
    faqs: [
        { q: "Qual o hardware necessário?", a: "O Gems in a Box é entregue como uma solução 'turn-key', ou seja, nós dimensionamos e fornecemos (ou especificamos) o hardware ideal para sua demanda." },
        { q: "Posso migrar para nuvem depois?", a: "Sim, o sistema é modular e permite a migração gradual para um modelo híbrido (CloudLink) ou totalmente nuvem." }
    ]
  },
  "cloudlink": {
    title: "CloudLink",
    desc: "O melhor dos dois mundos. O CloudLink é uma solução híbrida que integra a flexibilidade e o alcance do cloud computing com a robustez e velocidade da infraestrutura on-premises, permitindo fluxos de trabalho complexos e distribuídos.",
    features: ["Arquitetura Híbrida", "Sincronização Inteligente", "Backup Automático na Nuvem", "Edição Local de Alta Velocidade", "Colaboração Remota", "Redundância de Dados"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    icon: <LinkIcon className="w-16 h-16 text-[#EE6025]" />,
    faqs: [
        { q: "Como funciona a sincronização?", a: "O sistema detecta novos arquivos na rede local e faz o upload automático para a nuvem em background, sem impactar a performance." },
        { q: "É compatível com quais storages?", a: "O CloudLink é agnóstico de hardware e se integra com a maioria dos storages NAS/SAN do mercado (Dell, HP, NetApp, etc.)." }
    ]
  },
  "custom-prj": {
    title: "Custom PRJ",
    desc: "Sua infraestrutura, potencializada. Desenvolvemos projetos customizados que aproveitam o hardware e redes já existentes na sua empresa para implementar o ecossistema Media Portal, otimizando investimentos e maximizando o ROI.",
    features: ["Aproveitamento de Legado", "Integração Customizada", "Consultoria Especializada", "Otimização de ROI", "Adaptação de Fluxos", "Suporte Dedicado"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    icon: <Settings className="w-16 h-16 text-[#EE6025]" />,
    faqs: [
        { q: "Vocês fazem consultoria prévia?", a: "Sim, analisamos todo o seu parque tecnológico atual para desenhar a solução mais eficiente e econômica." },
        { q: "Quanto tempo leva a implementação?", a: "O prazo varia conforme a complexidade, mas projetos customizados geralmente são entregues entre 30 a 90 dias." }
    ]
  },
  "gendai-tv": {
    title: "Gendai TV",
    desc: "A solução completa para emissoras de TV. O Gendai TV gerencia todo o fluxo de produção, desde a ingestão do conteúdo bruto até a distribuição via broadband (streaming) e exibição broadcast tradicional, tudo em uma única plataforma integrada.",
    features: ["Ingest Automatizado", "Gestão de Grade", "Playout Broadcast", "Streaming Integrado", "Controle Mestre", "Arquivamento Automático"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    icon: <Tv className="w-16 h-16 text-[#EE6025]" />,
    faqs: [
        { q: "Integra com sistemas de tráfego?", a: "Sim, possuímos APIs para integração com os principais sistemas de tráfego e automação comercial do mercado." },
        { q: "Suporta 4K/UHD?", a: "Sim, o Gendai TV é totalmente compatível com fluxos de trabalho em 4K, HDR e formatos de alta taxa de quadros." }
    ]
  },
  "gendai-news": {
    title: "Gendai News",
    desc: "Agilidade para o jornalismo moderno. Focado no fluxo de produção de notícias, o Gendai News integra a redação, edição e exibição, permitindo que jornalistas produzam e publiquem matérias com velocidade recorde.",
    features: ["Integração com NRCS", "Edição Rápida (Cuts)", "Publicação Multiplataforma", "Gestão de Rundown", "Teleprompter Integrado", "Colaboração em Tempo Real"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    icon: <Newspaper className="w-16 h-16 text-[#EE6025]" />,
    faqs: [
        { q: "Funciona com MOS?", a: "Sim, o Gendai News é compatível com o protocolo MOS para integração transparente com sistemas de redação (NRCS)." },
        { q: "Permite edição remota?", a: "Sim, jornalistas podem editar matérias simples e fazer ingest de campo via web browser ou app móvel." }
    ]
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const productId = params?.id || "cloudfly"; 
  const product = productData[productId] || productData["cloudfly"];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#263858] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src={product.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#263858] via-[#263858]/90 to-transparent z-0"></div>
        
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Link href="/products">
                <a className="inline-flex items-center text-gray-300 hover:text-[#EE6025] mb-8 transition-colors font-bold text-sm uppercase tracking-wide">
                <ArrowLeft size={16} className="mr-2" /> Voltar para Soluções
                </a>
            </Link>
            
            <div className="flex items-center gap-6 mb-6">
                <div className="bg-white/10 p-4 rounded-lg border border-white/20 hidden md:block backdrop-blur-sm">
                    {product.icon}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white">{product.title}</h1>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
                {product.desc}
            </p>
            
            <div className="flex gap-4">
                <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold px-8 py-4 h-auto text-lg rounded shadow-lg">
                    Solicitar Orçamento
                </Button>
            </div>
          </div>
          {/* Visual Element Right */}
          <div className="hidden md:block relative">
             <div className="bg-white p-2 rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={product.image} alt={product.title} className="rounded border border-gray-200" />
             </div>
          </div>
        </div>
      </div>

      {/* Features & Form Grid */}
      <div className="container py-20">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left Column: Features & FAQ */}
            <div className="lg:col-span-2 space-y-16">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-[#263858]">Recursos Principais</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <CheckCircle2 className="text-[#EE6025] mt-1 mr-4 shrink-0" size={24} />
                                <div>
                                    <h3 className="text-lg font-bold text-[#263858] mb-1">{feature}</h3>
                                    <p className="text-gray-500 text-sm">Otimize sua operação com esta funcionalidade exclusiva.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Specific to Product */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-[#263858]">Dúvidas Frequentes sobre {product.title}</h2>
                    <Accordion type="single" collapsible className="w-full bg-gray-50 p-6 rounded-lg border border-gray-200">
                        {product.faqs.map((faq, idx) => (
                             <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger className="text-lg font-bold text-[#263858] text-left">{faq.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed text-base">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            
            {/* Right Column: Sticky Contact Form */}
            <div className="lg:col-span-1">
                <div className="bg-[#263858] text-white p-8 rounded-lg shadow-xl sticky top-24">
                    <h3 className="text-2xl font-bold mb-4">Fale com um Especialista</h3>
                    <p className="text-gray-300 mb-6 text-sm">Preencha o formulário abaixo para receber uma proposta personalizada para o <strong>{product.title}</strong>.</p>
                    
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Nome Completo</label>
                            <input type="text" className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-gray-400 focus:bg-white/20 outline-none transition-colors" placeholder="Seu nome" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">E-mail Corporativo</label>
                            <input type="email" className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-gray-400 focus:bg-white/20 outline-none transition-colors" placeholder="seu@empresa.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Telefone / WhatsApp</label>
                            <input type="tel" className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-gray-400 focus:bg-white/20 outline-none transition-colors" placeholder="(11) 99999-9999" />
                        </div>
                        <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold py-4 rounded shadow-lg mt-2">
                            Solicitar Contato
                        </Button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
