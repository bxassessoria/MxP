import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Server, Settings, Brain, Archive, LayoutTemplate } from "lucide-react";
import { Link } from "wouter";
import SegmentsSection from "@/components/SegmentsSection";
import CustomProjectsSection from "@/components/CustomProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const homeFAQs = [
    {
      question: "O que é o Media Portal?",
      answer: "O Media Portal é uma plataforma completa de gestão de ativos digitais (MAM - Media Asset Management) que permite armazenar, organizar, editar e distribuir conteúdos audiovisuais de forma eficiente e segura."
    },
    {
      question: "Qual a diferença entre as soluções Cloud e On-Premises?",
      answer: "A solução Cloud oferece flexibilidade total e acesso remoto via nuvem, ideal para equipes distribuídas. Já a On-Premises é instalada localmente em seus servidores, oferecendo controle total e máxima performance para grandes volumes de dados internos. Também oferecemos modelos híbridos."
    },
    {
      question: "O sistema integra com quais editores de vídeo?",
      answer: "Nossa plataforma possui integração nativa com os principais softwares de edição do mercado, incluindo Adobe Premiere Pro, Avid Media Composer e DaVinci Resolve, permitindo editar diretamente na nuvem ou no servidor local."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte técnico especializado 24/7 para clientes com contratos de manutenção, com equipe local no Brasil pronta para atender demandas críticas e garantir a continuidade da sua operação."
    }
  ];

  return (
    <Layout>
      {/* 1. HERO SECTION (Split Screen: White Left / Video Right with Fade) */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background Video Positioned to Right */}
        <div className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0">
          {/* Degradê suavizado e estendido para eliminar linha divisória */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="/videos/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Conteúdo Alinhado à Esquerda */}
        <div className="container relative z-10 px-4 pt-32 pb-40 md:py-0">
          <div className="max-w-2xl mr-auto text-left space-y-8">
            <div className="inline-block bg-[#EE6025]/10 text-[#EE6025] border border-[#EE6025]/20 px-6 py-2 rounded-full font-bold tracking-wider text-sm uppercase">
              Media Asset Management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#263858] leading-[1.1]">
              Gestão inteligente de <span className="text-[#EE6025]">ativos digitais</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Transforme a maneira como sua empresa armazena, organiza e distribui conteúdo com a plataforma MAM mais completa do mercado.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-8">
              <Link href="/products">
                <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white h-14 px-8 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto shrink-0">
                  Conhecer Soluções
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Logo Carousel - Bottom - Full Width */}
        <div className="absolute bottom-0 w-full z-20 bg-gradient-to-t from-white via-white/80 to-transparent py-8">
          <div className="w-full overflow-hidden">
            <div className="container mb-6">
               <p className="text-[#263858]/60 text-xs font-bold uppercase tracking-widest">Quem confia na Media Portal</p>
            </div>
            <ClientsSection />
          </div>
        </div>
      </section>

      {/* 3. VANTAGENS (Textos preenchidos e em branco) */}
      <section className="py-24 bg-[#263858] text-white">
        <div className="container">
            <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="p-6">
                    <div className="text-[#EE6025] mb-6 flex justify-center">
                        <Settings size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Flexibilidade Total</h3>
                    <p className="text-white/90 leading-relaxed min-h-[3rem]">
                        Adapte seus fluxos de trabalho às necessidades reais da sua operação, seja ela pequena, média ou grande, com escalabilidade garantida.
                    </p>
                </div>
                <div className="p-6 border-x border-white/10">
                    <div className="text-[#EE6025] mb-6 flex justify-center">
                        <Cloud size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Nuvem Inteligente</h3>
                    <p className="text-white/90 leading-relaxed min-h-[3rem]">
                        Acesse, edite e distribua seu conteúdo de qualquer lugar do mundo com segurança e rapidez, aproveitando o poder da computação em nuvem.
                    </p>
                </div>
                <div className="p-6">
                    <div className="text-[#EE6025] mb-6 flex justify-center">
                        <Server size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Integração Legada</h3>
                    <p className="text-white/90 leading-relaxed min-h-[3rem]">
                        Conecte-se perfeitamente aos seus sistemas e hardwares existentes, preservando seus investimentos anteriores enquanto moderniza sua gestão.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. PROJETOS CUSTOMIZADOS */}
      <CustomProjectsSection />

      {/* 5. SEGMENTOS DE NEGÓCIOS */}
      <SegmentsSection />

      {/* 6. FLUXO DE MÍDIA */}
      <section className="py-24 bg-white">
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-2">
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                        alt="Fluxo de Mídia" 
                        className="rounded-2xl shadow-xl"
                    />
                </div>
                <div className="order-1 lg:order-1 space-y-8">
                    <h2 className="text-4xl font-bold text-[#263858]">Fluxo de Mídia Otimizado</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#EE6025] text-white flex items-center justify-center shrink-0">
                                <Archive size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#263858] mb-2">Arquivamento automático</h3>
                                <p className="text-gray-600">Catalogação e indexação nos padrões LTO, RDX e ODA</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#263858] text-white flex items-center justify-center shrink-0">
                                <LayoutTemplate size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#263858] mb-2">Solução flexível</h3>
                                <p className="text-gray-600">Escolha uma solução on premises, nuvem ou híbrida para todas as aplicações</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#EE6025] text-white flex items-center justify-center shrink-0">
                                <Brain size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#263858] mb-2">Inteligência artificial</h3>
                                <p className="text-gray-600">Geração automática de metadados, legendas e análise de faces e objetos</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#263858] text-white flex items-center justify-center shrink-0">
                                <Settings size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#263858] mb-2">Gestão inteligente</h3>
                                <p className="text-gray-600">Gestão do fluxo de produção, arquivamento seguro e recuperação rápida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 7. VÍDEO INSTITUCIONAL (Reposicionado) */}
      <section className="py-24 bg-[#263858]">
        <div className="container text-center max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Conheça mais em 1 minuto</h2>
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

      {/* 8. NOSSO CONTEÚDO (Blog Posts) */}
      <section className="py-24 bg-white">
        <div className="container text-center">
            <h2 className="text-3xl font-bold text-[#263858] mb-12">Nosso Conteúdo</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-left group">
                        <div className="h-32 md:h-48 bg-gray-200 overflow-hidden">
                            <img 
                                src={i === 1 ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" : i === 2 ? "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"}
                                alt="Blog Post" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-4 md:p-8">
                            <span className="text-[#EE6025] text-xs font-bold uppercase tracking-widest mb-2 block">Novidade</span>
                            <h3 className="text-base md:text-xl font-bold text-[#263858] mb-4 line-clamp-2 md:line-clamp-none">
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

      {/* 9. FAQ SECTION (SEO) */}
      <FAQSection items={homeFAQs} />
    </Layout>
  );
}
