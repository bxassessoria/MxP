import { useEffect } from "react";
import { useRoute, useLocation, Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Download, Mail, Phone, Building2, User } from "lucide-react";
import FAQSection from "@/components/FAQSection";

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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    faq: [
      {
        question: "Preciso de hardware específico para usar o CloudFly?",
        answer: "Não. Por ser 100% em nuvem, o CloudFly pode ser acessado através de qualquer navegador web moderno, sem necessidade de servidores ou estações de trabalho dedicadas no local."
      },
      {
        question: "O armazenamento é ilimitado?",
        answer: "O CloudFly é altamente escalável. Oferecemos planos com diferentes faixas de armazenamento que crescem conforme a necessidade do seu acervo, sem necessidade de migração."
      },
      {
        question: "Como funciona a segurança dos meus vídeos na nuvem?",
        answer: "Utilizamos criptografia de ponta a ponta e servidores seguros com redundância. Todo o tráfego é protegido por SSL e o acesso é controlado por permissões granulares de usuário."
      }
    ]
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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "O Gems in a box inclui o hardware?",
        answer: "Sim, a solução Gems in a box é entregue como um appliance completo (hardware + software) dimensionado especificamente para sua carga de trabalho."
      },
      {
        question: "Posso expandir o armazenamento depois?",
        answer: "Sim. A arquitetura é modular, permitindo adicionar mais unidades de armazenamento (storage) conforme seu acervo cresce, sem interromper a operação."
      },
      {
        question: "Funciona sem internet?",
        answer: "Sim. Sendo uma solução on-premises, toda a operação de ingest, catalogação e busca funciona localmente na sua rede, garantindo operação mesmo sem conexão externa."
      }
    ]
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
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "Como funciona a sincronização híbrida?",
        answer: "O CloudLink mantém os arquivos originais pesados no servidor local para edição rápida e envia automaticamente versões leves (proxies) para a nuvem, permitindo visualização remota."
      },
      {
        question: "O que acontece se a internet cair?",
        answer: "A operação local continua funcionando normalmente. A sincronização com a nuvem é retomada automaticamente assim que a conexão for restabelecida."
      },
      {
        question: "É compatível com meu storage atual?",
        answer: "Na maioria dos casos, sim. O CloudLink pode ser configurado para gerenciar volumes de armazenamento já existentes na sua infraestrutura."
      }
    ]
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "Qual o prazo médio de um projeto customizado?",
        answer: "O prazo varia conforme a complexidade. Projetos típicos de integração levam de 4 a 12 semanas, desde o levantamento de requisitos até a entrega final."
      },
      {
        question: "Vocês desenvolvem integrações com softwares legados?",
        answer: "Sim, nossa equipe de engenharia é especializada em criar conectores e APIs para integrar o Media Portal a sistemas legados ou proprietários da sua empresa."
      }
    ]
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "O Gendai TV suporta transmissão 4K?",
        answer: "Sim, nossa plataforma de playout e ingest é totalmente compatível com fluxos de trabalho em 4K UHD, garantindo a máxima qualidade de imagem."
      },
      {
        question: "É possível gerenciar múltiplos canais?",
        answer: "Perfeitamente. O Gendai TV é multi-canal, permitindo operar e supervisionar a grade de programação de diversos canais a partir de uma única interface centralizada."
      }
    ]
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
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    faq: [
      {
        question: "O sistema integra com teleprompter?",
        answer: "Sim, o módulo de redação (NRCS) do Gendai News envia os scripts automaticamente para o sistema de teleprompter, sincronizando o texto com o rundown do jornal."
      },
      {
        question: "Como funciona a integração com redes sociais?",
        answer: "O Gendai News permite publicar cortes de vídeo e chamadas diretamente para plataformas como YouTube, Facebook e Twitter com apenas alguns cliques, agilizando a presença digital do seu jornalismo."
      }
    ]
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  
  const productId = params?.id;
  const product = productId ? productsData[productId] : null;

  useEffect(() => {
    if (!product) {
      // Opcional: Redirecionar para lista de produtos se ID não existir
    }
    window.scrollTo(0, 0);
  }, [product, setLocation]);

  if (!product) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
          <Button onClick={() => setLocation("/produtos")}>
            Voltar para Produtos
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section do Produto */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center bg-[#263858] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente mais suave */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#263858]/95 via-[#263858]/80 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 pt-20">
          <Link href="/produtos">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-8 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Produtos
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              {product.title}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed font-light drop-shadow-md">
              {product.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white h-12 md:h-14 px-8 rounded-lg text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-all border-none w-full sm:w-auto">
                Solicitar Demonstração
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 md:h-14 px-8 rounded-lg text-base md:text-lg w-full sm:w-auto">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Descrição Detalhada */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#263858] mb-6">Sobre a Solução</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                {product.fullDescription.map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={product.image} 
                alt="Detalhe do produto" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE OPTIMIZED: Features (Carrossel no Mobile, Grid no Desktop) */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#263858] mb-12 text-center">Principais Recursos</h2>
          
          {/* Mobile: Horizontal Scroll Snap */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            {product.features.map((feature: string, idx: number) => (
              <div key={idx} className="min-w-[85vw] md:min-w-0 snap-center bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-[#EE6025]/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-[#EE6025]" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#263858] mb-2">Recurso {idx + 1}</h3>
                <p className="text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4 md:hidden">Deslize para ver mais</p>
        </div>
      </section>

      {/* MOBILE OPTIMIZED: Benefícios (Carrossel no Mobile, Grid no Desktop) */}
      <section className="py-16 md:py-24 bg-[#263858] text-white overflow-hidden">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Por que escolher o {product.title}?</h2>
          
          {/* Mobile: Horizontal Scroll Snap */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            {product.benefits.map((benefit: string, idx: number) => (
              <div key={idx} className="min-w-[70vw] md:min-w-0 snap-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors h-full">
                <div className="text-[#EE6025] font-bold text-xl mb-3">0{idx + 1}</div>
                <p className="text-white/90 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-4 md:hidden">Deslize para ver mais</p>
        </div>
      </section>

      {/* FAQ Específico do Produto */}
      <FAQSection items={product.faq} />

      {/* CTA Final */}
      <section className="py-24 bg-[#263858] text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Pronto para transformar sua operação?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato com nossos especialistas e descubra como o {product.title} pode impulsionar seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white h-14 px-8 rounded-lg text-lg font-bold shadow-lg w-full sm:w-auto">
              <Mail className="mr-2 h-5 w-5" /> Solicitar Orçamento
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 h-14 px-8 rounded-lg text-lg font-bold w-full sm:w-auto">
              <Phone className="mr-2 h-5 w-5" /> Agendar Reunião
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
