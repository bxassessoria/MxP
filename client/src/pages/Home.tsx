import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Cloud, Server, Database, Tv, Globe, Settings, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const solutions = [
  { id: "cloudfly", title: "CloudFly", icon: <Cloud size={32} />, desc: "MAM 100% Cloud" },
  { id: "gems", title: "Gems in a Box", icon: <Server size={32} />, desc: "MAM On-Premises" },
  { id: "cloudlink", title: "CloudLink", icon: <Database size={32} />, desc: "MAM Híbrido" },
  { id: "custom", title: "Custom PRJ", icon: <Settings size={32} />, desc: "Projetos Sob Medida" },
  { id: "gendai-tv", title: "Gendai TV", icon: <Tv size={32} />, desc: "Fluxo Broadcast" },
  { id: "gendai-news", title: "Gendai News", icon: <Globe size={32} />, desc: "Fluxo Jornalístico" }
];

const partners = [
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" },
  { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png" },
  { name: "Avid", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Avid_Technology_logo.svg/1200px-Avid_Technology_logo.svg.png" },
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png" },
  { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" },
  { name: "Telestream", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Telestream_Logo.png/220px-Telestream_Logo.png" },
  { name: "Harmonic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Harmonic_Inc_Logo.svg/1200px-Harmonic_Inc_Logo.svg.png" }
];

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false })
  ]);
  
  const [solutionsRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, direction: 'forward' }) // Direção oposta para diferenciar
  ]);

  return (
    <Layout>
      {/* 1. HERO SECTION (Texto Esq / Vídeo Dir) */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="container relative z-10 pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Coluna Texto */}
                <div className="space-y-8 max-w-2xl">
                    <div className="inline-block bg-[#EE6025]/10 text-[#EE6025] px-4 py-2 rounded-full font-bold tracking-wider text-sm uppercase">
                        Media Asset Management
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#263858] leading-tight">
                        Gestão inteligente de <span className="text-[#EE6025]">ativos digitais</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Transforme a maneira como sua empresa armazena, organiza e distribui conteúdo com a plataforma MAM mais completa do mercado.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link href="/products">
                            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white h-14 px-8 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                                Conhecer Soluções
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="border-[#263858] text-[#263858] hover:bg-[#263858] hover:text-white h-14 px-8 rounded-lg text-lg font-bold transition-all">
                                Falar com Especialista
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Coluna Vídeo Conceitual (Loop) */}
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100 group">
                     <video 
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                     >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-network-of-lines-9972-large.mp4" type="video/mp4" />
                     </video>
                     <div className="absolute inset-0 bg-gradient-to-t from-[#263858]/80 via-transparent to-transparent"></div>
                     
                     {/* Overlay Informativo */}
                     <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 rounded-full bg-[#00ff00] animate-pulse"></div>
                            <span className="text-xs font-mono tracking-widest uppercase">System Online</span>
                        </div>
                        <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-[#EE6025] rounded-full"></div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. SOLUÇÕES ESPECIALIZADAS (Novo AutoScroll) */}
      <section className="py-20 bg-[#F8F9FA] overflow-hidden border-y border-gray-200">
        <div className="container mb-10">
             <h2 className="text-3xl font-bold text-[#263858] text-center">Soluções Especializadas</h2>
        </div>
        
        <div className="embla" ref={solutionsRef}>
          <div className="flex gap-8 px-4">
            {solutions.map((sol) => (
              <div key={sol.id} className="flex-[0_0_300px] min-w-0">
                 <Link href={`/products#${sol.id}`}>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#EE6025] hover:shadow-lg transition-all cursor-pointer group h-full">
                        <div className="text-[#263858] group-hover:text-[#EE6025] transition-colors mb-6 bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center">
                            {sol.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#263858] mb-2 group-hover:text-[#EE6025] transition-colors">{sol.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            {sol.desc}
                        </p>
                        <div className="flex items-center text-[#EE6025] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Saiba mais <ChevronRight size={16} className="ml-1" />
                        </div>
                    </div>
                 </Link>
              </div>
            ))}
             {/* Duplicar para loop infinito visual */}
             {solutions.map((sol) => (
              <div key={`${sol.id}-dup`} className="flex-[0_0_300px] min-w-0">
                 <Link href={`/products#${sol.id}`}>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#EE6025] hover:shadow-lg transition-all cursor-pointer group h-full">
                        <div className="text-[#263858] group-hover:text-[#EE6025] transition-colors mb-6 bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center">
                            {sol.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#263858] mb-2 group-hover:text-[#EE6025] transition-colors">{sol.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            {sol.desc}
                        </p>
                         <div className="flex items-center text-[#EE6025] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Saiba mais <ChevronRight size={16} className="ml-1" />
                        </div>
                    </div>
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VÍDEO INSTITUCIONAL (Seção Dedicada) */}
      <section className="py-24 bg-white">
        <div className="container text-center max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263858] mb-12">Conheça mais em 1 minuto</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/ZepJRvf_elo?controls=1&rel=0" 
                    title="Media Portal Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                ></iframe>
            </div>
        </div>
      </section>

      {/* 4. VANTAGENS (Restaurada) */}
      <section className="py-24 bg-[#263858] text-white">
        <div className="container">
            <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="p-6">
                    <div className="text-[#EE6025] mb-6 flex justify-center">
                        <Settings size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Flexibilidade Total</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Adaptamos nossos fluxos à sua operação, não o contrário. Soluções modulares que crescem com você.
                    </p>
                </div>
                <div className="p-6 border-x border-white/10">
                    <div className="text-[#EE6025] mb-6 flex justify-center">
                        <Cloud size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Nuvem Inteligente</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Acesse seu acervo de qualquer lugar com segurança de nível bancário e redundância global.
                    </p>
                </div>
                <div className="p-6">
                    <div className="text-[#EE6025] mb-6 flex justify-center">
                        <Server size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Integração Legada</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Conectamos com seus sistemas atuais (NRCS, Playout, Edição) sem descartar seu investimento.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. FLUXO DE MÍDIA (Nova Seção) */}
      <section className="py-24 bg-white">
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                        alt="Fluxo de Mídia" 
                        className="rounded-2xl shadow-xl"
                    />
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <h2 className="text-4xl font-bold text-[#263858]">Fluxo de Mídia Otimizado</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#EE6025] text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-[#263858] mb-2">Ingest Automático</h3>
                                <p className="text-gray-600">Captura de múltiplas fontes com catalogação inicial automática via IA.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#263858] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-[#263858] mb-2">Processamento Inteligente</h3>
                                <p className="text-gray-600">Transcodificação, proxy generation e enriquecimento de metadados.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 text-[#263858] flex items-center justify-center font-bold text-xl shrink-0">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-[#263858] mb-2">Distribuição Multi-plataforma</h3>
                                <p className="text-gray-600">Entrega automática para TV, Web, Redes Sociais e Arquivo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. NOSSO CONTEÚDO (Nova Seção) */}
      <section className="py-24 bg-[#F8F9FA]">
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
                        <div className="p-8">
                            <span className="text-[#EE6025] text-xs font-bold uppercase tracking-widest mb-2 block">Novidade</span>
                            <h3 className="text-xl font-bold text-[#263858] mb-4">
                                {i === 1 ? "O futuro do MAM na nuvem híbrida" : i === 2 ? "Como a IA está revolucionando a decupagem" : "Media Portal celebra 16 anos de inovação"}
                            </h3>
                            <Link href="/blog">
                                <span className="text-gray-500 hover:text-[#EE6025] font-medium text-sm flex items-center gap-1 cursor-pointer transition-colors">
                                    Ler artigo <ArrowRight size={14} />
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 7. TECNOLOGIAS INTEGRADAS (Carrossel AutoScroll) */}
      <section className="py-20 bg-white border-t border-gray-200 overflow-hidden">
        <div className="container mb-10 text-center">
            <h2 className="text-2xl font-bold text-[#263858] uppercase tracking-widest opacity-60">Tecnologias Integradas</h2>
        </div>
        
        <div className="embla" ref={emblaRef}>
          <div className="flex gap-16 items-center px-4">
            {partners.map((partner, index) => (
              <div key={index} className="flex-[0_0_150px] min-w-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 cursor-pointer">
                <img src={partner.logo} alt={partner.name} className="w-full h-auto object-contain max-h-12" />
              </div>
            ))}
             {/* Duplicar para loop infinito visual */}
             {partners.map((partner, index) => (
              <div key={`dup-${index}`} className="flex-[0_0_150px] min-w-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 cursor-pointer">
                <img src={partner.logo} alt={partner.name} className="w-full h-auto object-contain max-h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
