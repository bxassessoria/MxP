import { useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Download, Mail, Phone, Building2, User } from "lucide-react";

// Definição dos dados dos produtos
const productsData: Record<string, any> = {
  "cloudfly": {
    title: "CloudFly",
    subtitle: "Gestão e processamento de acervo digital 100% em nuvem",
    description: "O CloudFly é uma solução totalmente baseada em nuvem, eliminando a necessidade de uma infraestrutura local complexa. É o caminho mais rápido para iniciar o uso de um sistema MAM (Media Asset Management) profissional.",
    fullDescription: [
      "O sistema MAM disponibiliza recursos para organização e gestão de grandes acervos digitais. O sistema gerencia uma versão do vídeo em baixa resolução permitindo a rápida visualização do conteúdo em qualquer lugar.",
      "O CloudFly pode ser integrado com mecanismos inteligentes para geração automática de metadados, sistema de decupagem automática, transcrição de voz para texto, reconhecimento de falante, reconhecimento de faces e de cenas.",
      "O CloudFly leva você para a nuvem em um bater de asas!"
    ],
    features: [
      "Recursos para navegação no acervo",
      "Formulários para pesquisas simples e avançadas",
      "Elaboração de itens favoritos (Clipboard)",
      "Decupagem de trechos de vídeos e elaboração de clipes",
      "Integração com Dicionário Controlado",
      "Integração com mecanismos de análise inteligente",
      "Voice Analyser: módulo de transcrição e correção"
    ],
    benefits: [
      "Ambiente de trabalho colaborativo com acesso simultâneo",
      "Sistematização de processos de revisão e aprovação",
      "Conversões automáticas de formato",
      "Ambiente seguro e auditável",
      "Atribuição de papéis e permissões granulares",
      "Redução de custos eliminando mídias físicas",
      "Gerenciamento de qualquer formato e tamanho de arquivo"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  "gems-in-a-box": {
    title: "Gems in a box",
    subtitle: "Infraestrutura on-premises dimensionada para sua carga",
    description: "Os produtos Gems in a box são completamente on-premises e têm sua infraestrutura dimensionada de acordo com a carga de conteúdo que se deseja arquivar.",
    fullDescription: [
      "Para cargas pequenas é possível elaborar um projeto compacto, enquanto para cargas maiores implementamos uma infraestrutura robusta e escalável.",
      "Apesar de focado em gestão de acervos de vídeos, o sistema gerencia qualquer tipo de arquivo: fotos, áudios, documentos, plantas de engenharia, projetos gráficos e games. Cada tipo de item possui seu conjunto específico de metadados.",
      "Uma carga é considerada pequena até 24TB anuais. Carga média varia de 30TB a 200TB anuais. Para cargas superiores, desenvolvemos projetos customizados.",
      "Projetando a infraestrutura conforme a necessidade operacional, você evita perdas financeiras com ociosidade ou gargalos operacionais."
    ],
    features: [
      "Infraestrutura dedicada on-premises",
      "Dimensionamento personalizado",
      "Suporte a múltiplos tipos de ativos (vídeo, áudio, doc)",
      "Metadados específicos por tipo de arquivo",
      "Alta performance de transferência local",
      "Controle total sobre a segurança dos dados",
      "Sem custos recorrentes de nuvem"
    ],
    benefits: [
      "Eliminação de custos de tráfego de dados",
      "Latência zero para operações locais",
      "Total conformidade com políticas de segurança internas",
      "Independência de conectividade com internet",
      "Integração direta com ilhas de edição locais",
      "Investimento único em hardware (CAPEX)",
      "Flexibilidade para expansão física"
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  "cloudlink": {
    title: "CloudLink",
    subtitle: "O melhor dos dois mundos: Híbrido e Eficiente",
    description: "Solução híbrida para gestão de conteúdo digital mesclando vantagens do cloud computing aliado a infraestrutura on premises.",
    fullDescription: [
      "O CloudLink permite manter seus arquivos pesados (raw footage) em servidores locais para edição rápida, enquanto proxies e metadados são sincronizados na nuvem para acesso remoto e colaboração.",
      "Ideal para emissoras que precisam de agilidade na produção local mas não abrem mão da flexibilidade do trabalho remoto e distribuição digital.",
      "Sincronização inteligente que otimiza o uso de banda e garante que seus ativos estejam onde você precisa, quando precisa."
    ],
    features: [
      "Arquitetura Híbrida (On-premise + Cloud)",
      "Sincronização seletiva de ativos",
      "Proxy na nuvem, Alta resolução local",
      "Gestão unificada de acervo",
      "Backup automático em nuvem",
      "Acesso remoto transparente",
      "Integração com workflows existentes"
    ],
    benefits: [
      "Velocidade de rede local para edição",
      "Acessibilidade global para aprovação e visualização",
      "Redução de custos de armazenamento em nuvem",
      "Disaster Recovery simplificado",
      "Escalabilidade sob demanda",
      "Colaboração remota sem latência",
      "Segurança duplicada (física e lógica)"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  "custom-prj": {
    title: "Custom PRJ",
    subtitle: "Projetos sob medida para sua infraestrutura",
    description: "Projetos customizados com aproveitamento da infraestrutura existente para potencializar o poder do seu conteúdo.",
    fullDescription: [
      "Entendemos que cada operação de mídia é única. O Custom PRJ é nossa consultoria e implementação técnica para adaptar o Media Portal ao seu legado tecnológico.",
      "Analisamos seu hardware, rede e fluxos de trabalho atuais para desenhar uma solução que maximize o retorno sobre o investimento já realizado.",
      "Integração com sistemas proprietários, automação de tarefas específicas e desenvolvimento de módulos exclusivos para sua necessidade."
    ],
    features: [
      "Consultoria técnica especializada",
      "Análise de infraestrutura legada",
      "Desenvolvimento de conectores customizados",
      "Adaptação de workflows específicos",
      "Migração de dados complexa",
      "Treinamento dedicado",
      "Suporte a hardware heterogêneo"
    ],
    benefits: [
      "Aproveitamento de investimento anterior (ROI)",
      "Solução 100% aderente ao processo do cliente",
      "Menor curva de aprendizado para a equipe",
      "Resolução de gargalos específicos",
      "Integração com sistemas de terceiros",
      "Otimização de recursos de hardware",
      "Evolução gradual da tecnologia"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  "gendai-tv": {
    title: "Gendai TV",
    subtitle: "Fluxo completo: Ingest, Distribuição e Exibição",
    description: "Gestão de todo o seu fluxo de produção, integrando ingest, distribuição (broadband) e exibição (broadcast) em uma única plataforma.",
    fullDescription: [
      "O Gendai TV unifica as pontas da sua operação televisiva. Do momento em que o sinal chega (Ingest) até a entrega final ao telespectador (Playout/Broadcast).",
      "Elimine ilhas de informação e sistemas desconectados. Tenha visibilidade total do ciclo de vida do seu conteúdo.",
      "Preparado para o futuro da TV, com suporte nativo a distribuição multi-plataforma (TV Aberta, Cabo, Web e App)."
    ],
    features: [
      "Ingest automatizado multicanal",
      "Gestão de grade de programação",
      "Playout integrado",
      "Controle mestre unificado",
      "Integração com MAM nativa",
      "Gráficos e branding em tempo real",
      "Relatórios de exibição (As-run logs)"
    ],
    benefits: [
      "Redução drástica de erros operacionais",
      "Fluxo de trabalho linear e simplificado",
      "Menor necessidade de equipe técnica dedicada",
      "Agilidade na alteração de grade",
      "Consistência de marca em todos os canais",
      "Rastreabilidade total do conteúdo",
      "Custo total de propriedade reduzido"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  "gendai-news": {
    title: "Gendai News",
    subtitle: "A revolução no fluxo de produção jornalística",
    description: "Gestão de todo o seu fluxo de produção televisiva e jornalística, integrando ingest, redação, distribuição e exibição.",
    fullDescription: [
      "O Gendai News oferece eficiência, integração e agilidade para o jornalismo moderno. Integra ingest, redação, broadband e broadcast.",
      "Componentes modulares: INGEST, STORAGE, MAM, NEWS (Redação), PLAYOUT, CLOSED CAPTION, STREAMING e OTT.",
      "Diferenciais: Ingest com múltiplas gravações, Storage compatível com bin-locking, Playout de 2 canais independentes, Closed Caption ao vivo e muito mais.",
      "O módulo News inclui Agência, Agenda, Pauta e Mapa de Produção, cobrindo todas as etapas da notícia."
    ],
    features: [
      "Sistema de Redação (NRCS) completo",
      "Ingest integrado ao MAM e Playout",
      "Playout Broadcast com 2 canais",
      "Gerador de Caracteres e Closed Caption",
      "Publicação direta para Web/Social (Broadband)",
      "Gestão de Rundown (Espelho)",
      "Teleprompter integrado"
    ],
    benefits: [
      "Velocidade da notícia (Time-to-air)",
      "Colaboração em tempo real entre jornalistas",
      "Convergência TV + Digital",
      "Suporte centralizado e em português",
      "Custo-benefício superior a soluções importadas",
      "Monetização de conteúdo facilitada",
      "Integração nativa com agências de notícias"
    ],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  
  // Se não houver match ou ID inválido, redirecionar (ou mostrar erro)
  // Como estamos dentro do componente roteado, params deve existir se a rota bater
  const productId = params?.id;
  const product = productId ? productsData[productId] : null;

  useEffect(() => {
    if (!product) {
      // Opcional: Redirecionar para lista de produtos se ID não existir
      // setLocation("/products");
    }
    window.scrollTo(0, 0);
  }, [product, setLocation]);

  if (!product) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
          <Button onClick={() => setLocation("/products")}>
            Voltar para Produtos
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section do Produto */}
      <section className="relative py-24 bg-[#263858] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#263858] via-[#263858]/90 to-transparent"></div>
        
        <div className="container relative z-10">
          <Button 
            variant="ghost" 
            className="text-white/70 hover:text-white mb-8 pl-0 hover:bg-transparent"
            onClick={() => setLocation("/products")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Produtos
          </Button>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{product.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light mb-8">
            {product.subtitle}
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold h-12 px-8 rounded-lg shadow-lg">
              Solicitar Demonstração
            </Button>
            <Button variant="outline" className="border-white text-[#263858] hover:bg-white/10 hover:text-white h-12 px-8 rounded-lg">
              Baixar PDF Técnico
            </Button>
          </div>
        </div>
      </section>

      {/* Descrição Detalhada */}
      <section className="py-20 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-[#263858] mb-8">O que é e como funciona</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {product.fullDescription.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
            <h3 className="text-xl font-bold text-[#263858] mb-6 flex items-center gap-2">
              <Download className="text-[#EE6025]" /> Materiais Relacionados
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#EE6025] transition-colors cursor-pointer group">
                <span className="font-medium text-gray-700 group-hover:text-[#EE6025]">Datasheet Técnico {product.title}</span>
                <Download size={18} className="text-gray-400 group-hover:text-[#EE6025]" />
              </li>
              <li className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#EE6025] transition-colors cursor-pointer group">
                <span className="font-medium text-gray-700 group-hover:text-[#EE6025]">Guia de Implementação</span>
                <Download size={18} className="text-gray-400 group-hover:text-[#EE6025]" />
              </li>
              <li className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#EE6025] transition-colors cursor-pointer group">
                <span className="font-medium text-gray-700 group-hover:text-[#EE6025]">Case de Sucesso</span>
                <Download size={18} className="text-gray-400 group-hover:text-[#EE6025]" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recursos e Benefícios */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Recursos */}
            <div>
              <h2 className="text-2xl font-bold text-[#263858] mb-8 border-l-4 border-[#EE6025] pl-4">
                Recursos Principais
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#EE6025]/10 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#EE6025]" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefícios */}
            <div>
              <h2 className="text-2xl font-bold text-[#263858] mb-8 border-l-4 border-[#263858] pl-4">
                Ganhos Operacionais
              </h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#263858]/10 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#263858]" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="bg-[#263858] rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE6025] rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vamos conversar sobre o seu projeto?</h2>
              <p className="text-gray-300">
                Entre em contato com nosso time de vendas para realizarmos uma precificação adequada ao seu fluxo de trabalho.
              </p>
            </div>

            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE6025] transition-colors" placeholder="Seu nome" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Corporativo</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE6025] transition-colors" placeholder="voce@empresa.com" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Empresa</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE6025] transition-colors" placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Telefone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE6025] transition-colors" placeholder="(11) 99999-9999" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4">
                <input type="checkbox" id="marketing" className="mt-1 rounded border-white/20 bg-white/10 text-[#EE6025] focus:ring-[#EE6025]" />
                <label htmlFor="marketing" className="text-sm text-gray-400">
                  Autorizo o envio de conteúdo e material promocional da Media Portal.
                </label>
              </div>

              <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold h-12 rounded-lg text-lg shadow-lg mt-4">
                Solicitar Orçamento
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
