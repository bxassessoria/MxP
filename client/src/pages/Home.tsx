import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Server, Cloud, Globe, Tv, Database, Radio, BarChart3, Lock, Zap, RefreshCw, Check, Settings } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { Link } from "wouter";

const segments = [
  { name: "Televisão", icon: <Tv size={32} /> },
  { name: "Rádio", icon: <Radio size={32} /> },
  { name: "TV Corporativa", icon: <BarChart3 size={32} /> },
  { name: "Público", icon: <Globe size={32} /> },
  { name: "EAD", icon: <Server size={32} /> },
  { name: "Produtoras", icon: <Database size={32} /> },
  { name: "Igrejas", icon: <Cloud size={32} /> },
];

const partners = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Avid_Technology_logo.svg/1200px-Avid_Technology_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Final_Cut_Pro_X_logo.png/1200px-Final_Cut_Pro_X_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Harmonic_Inc_Logo.svg/1200px-Harmonic_Inc_Logo.svg.png",
  "https://www.telestream.net/images/home/logo-telestream.png"
];

const solutions = [
  {
    title: "CloudFly",
    desc: "Gestão e processamento de acervo digital 100% em nuvem.",
    icon: <Cloud size={32} className="text-[#EE6025]" />,
    link: "/products#cloudfly"
  },
  {
    title: "Gems in a Box",
    desc: "Infraestrutura on-premises dimensionada para alta carga.",
    icon: <Server size={32} className="text-[#EE6025]" />,
    link: "/products#gems"
  },
  {
    title: "CloudLink",
    desc: "Solução híbrida unindo cloud computing e on-premises.",
    icon: <RefreshCw size={32} className="text-[#EE6025]" />,
    link: "/products#cloudlink"
  },
  {
    title: "Custom PRJ",
    desc: "Projetos customizados aproveitando infraestrutura existente.",
    icon: <Settings size={32} className="text-[#EE6025]" />,
    link: "/products#custom"
  },
  {
    title: "Gendai TV",
    desc: "Fluxo completo: ingest, broadband e broadcast.",
    icon: <Tv size={32} className="text-[#EE6025]" />,
    link: "/products#gendai-tv"
  },
  {
    title: "Gendai News",
    desc: "Gestão de fluxo jornalístico integrado.",
    icon: <Globe size={32} className="text-[#EE6025]" />,
    link: "/products#gendai-news"
  }
];

export default function Home() {
  const [segmentsRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);
  
  const [partnersRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false })
  ]);

  // Novo hook para o carrossel de soluções (igual ao de partners)
  const [solutionsRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ speed: 0.8, stopOnInteraction: false })
  ]);

  return (
    <Layout>
      {/* 1. HERO SECTION (Texto Esq / Vídeo Loop Dir) */}
      <section className="relative bg-[#263858] text-white overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-[#EE6025]/20 border border-[#EE6025]/30 px-4 py-2 rounded-full text-[#EE6025] font-bold uppercase text-xs tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#EE6025] animate-pulse"></span>
              Media Asset Management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Gestão inteligente de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE6025] to-orange-300">ativos digitais</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Transforme a maneira como sua empresa armazena, organiza e distribui conteúdo com a plataforma MAM mais completa do mercado.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products">
                <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white h-14 px-8 text-lg rounded-lg font-bold shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform">
                  Conhecer Soluções
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white h-14 px-8 text-lg rounded-lg font-medium backdrop-blur-sm">
                  Falar com Especialista
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Vídeo Conceitual em Loop (Background Style) */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black animate-in fade-in zoom-in duration-1000 delay-300">
             <video 
               className="w-full h-full object-cover opacity-80"
               autoPlay 
               loop 
               muted 
               playsInline
               poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
             >
               <source src="https://assets.mixkit.co/videos/preview/mixkit-server-room-with-blue-lights-2268-large.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-t from-[#263858] via-transparent to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                        <span className="text-sm font-mono text-green-400">SYSTEM ONLINE</span>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 bg-white/20 rounded w-3/4"></div>
                        <div className="h-2 bg-white/20 rounded w-1/2"></div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. SEGMENTOS (Carrossel Clean) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest font-bold mb-10">
            Soluções especializadas para diversos setores
          </p>
          <div className="overflow-hidden" ref={segmentsRef}>
            <div className="flex touch-pan-y gap-8">
              {segments.map((seg, index) => (
                <div key={index} className="flex-[0_0_180px] min-w-0">
                  <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#EE6025] hover:shadow-md transition-all group cursor-default h-full">
                    <div className="text-gray-400 group-hover:text-[#EE6025] transition-colors mb-4 transform group-hover:scale-110 duration-300">
                      {seg.icon}
                    </div>
                    <span className="font-bold text-[#263858] text-center">{seg.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. VÍDEO DE APRESENTAÇÃO (Dedicado) */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263858] mb-12">
            Conheça mais em 1 minuto
          </h2>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/ZepJRvf_elo?rel=0&showinfo=0" 
              title="Media Portal Presentation"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÕES (Carrossel Contínuo) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#EE6025] font-bold uppercase tracking-widest text-sm">Nossos Produtos</span>
            <h2 className="text-4xl font-bold text-[#263858] mt-2 mb-6">Tecnologia adaptada à sua necessidade</h2>
            <p className="text-gray-600 text-lg">
              Do cloud ao on-premises, oferecemos a arquitetura ideal para o seu fluxo de trabalho.
            </p>
          </div>
        </div>
        
        <div className="w-full" ref={solutionsRef}>
          <div className="flex gap-8 px-4">
            {solutions.map((sol, idx) => (
              <div key={idx} className="flex-[0_0_350px] min-w-0">
                <Link href={sol.link}>
                  <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#EE6025] hover:shadow-xl transition-all cursor-pointer h-full flex flex-col min-h-[320px]">
                    <div className="mb-6 bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-[#EE6025] transition-colors duration-300">
                      <div className="text-[#EE6025] group-hover:text-white transition-colors">
                          {sol.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#263858] mb-3 group-hover:text-[#EE6025] transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-1 text-sm">
                      {sol.desc}
                    </p>
                    <div className="flex items-center text-[#EE6025] font-bold text-sm uppercase tracking-wide mt-auto">
                      Saiba Mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VANTAGENS (Restaurada) */}
      <section className="py-24 bg-[#263858] text-white">
        <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="text-center md:text-left">
                    <div className="bg-[#EE6025] w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                        <RefreshCw size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Integração Total</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Conecte-se nativamente com Adobe, Avid, AWS e Google Cloud.</p>
                </div>
                <div className="text-center md:text-left">
                    <div className="bg-[#EE6025] w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Alta Performance</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Processamento distribuído para lidar com Petabytes de dados.</p>
                </div>
                <div className="text-center md:text-left">
                    <div className="bg-[#EE6025] w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                        <Lock size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Segurança Máxima</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Criptografia de ponta a ponta e controle granular de acesso.</p>
                </div>
                <div className="text-center md:text-left">
                    <div className="bg-[#EE6025] w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                        <Check size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Interface Intuitiva</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">UX desenhada para editores e arquivistas, sem curva de aprendizado.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 6. FLUXO DE MÍDIA (Nova Seção) */}
      <section className="py-24 bg-gray-50">
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute inset-0 bg-[#EE6025] rounded-3xl rotate-3 opacity-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                        alt="Fluxo de Mídia Inteligente" 
                        className="relative rounded-3xl shadow-2xl w-full"
                    />
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <h2 className="text-4xl font-bold text-[#263858]">Fluxo de Mídia Inteligente</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Nossa plataforma orquestra todo o ciclo de vida do conteúdo, desde a ingestão até a distribuição e arquivamento profundo.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><Check size={16} /></div>
                            <span className="text-gray-700">Arquivamento Automático baseado em regras de negócio</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><Check size={16} /></div>
                            <span className="text-gray-700">Transcodificação multiformato transparente</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><Check size={16} /></div>
                            <span className="text-gray-700">Enriquecimento de metadados com IA</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 7. NOSSO CONTEÚDO (Nova Seção) */}
      <section className="py-24 bg-white">
        <div className="container text-center">
            <h2 className="text-3xl font-bold text-[#263858] mb-12">Nosso Conteúdo</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-left group">
                        <div className="h-48 bg-gray-200 overflow-hidden">
                            <img 
                                src={i === 1 ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" : i === 2 ? "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"}
                                alt="Blog Post" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <span className="text-[#EE6025] text-xs font-bold uppercase tracking-wider">Novidade</span>
                            <h3 className="text-xl font-bold text-[#263858] mt-2 mb-3">Transformação Digital no Broadcast: O Futuro é Agora</h3>
                            <Link href="/blog">
                                <span className="text-sm font-medium text-gray-500 hover:text-[#EE6025] cursor-pointer flex items-center gap-1">
                                    Ler artigo <ArrowRight size={14} />
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 8. TECNOLOGIAS INTEGRADAS (Carrossel Contínuo) */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mb-12 text-center">
          <h2 className="text-2xl font-bold text-[#263858] opacity-80">Tecnologias Integradas</h2>
        </div>
        <div className="w-full" ref={partnersRef}>
          <div className="flex gap-16 px-8 items-center">
            {partners.map((logo, index) => (
              <div key={index} className="flex-[0_0_150px] min-w-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                <img src={logo} alt="Partner Logo" className="w-full h-auto object-contain max-h-16" />
              </div>
            ))}
            {/* Duplicar para garantir loop infinito visualmente suave */}
            {partners.map((logo, index) => (
              <div key={`dup-${index}`} className="flex-[0_0_150px] min-w-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                <img src={logo} alt="Partner Logo" className="w-full h-auto object-contain max-h-16" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
