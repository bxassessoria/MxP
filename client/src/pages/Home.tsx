import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Server, Settings } from "lucide-react";
import { Link } from "wouter";
import SegmentsSection from "@/components/SegmentsSection";
import ClientsSection from "@/components/ClientsSection";

export default function Home() {
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

      {/* 2. SEGMENTOS DE NEGÓCIOS */}
      <SegmentsSection />

      {/* 3. VANTAGENS */}
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

      {/* 4. NOSSOS CLIENTES */}
      <ClientsSection />

      {/* 5. FLUXO DE MÍDIA */}
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

      {/* 6. NOSSO CONTEÚDO (Blog Posts) */}
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
    </Layout>
  );
}
