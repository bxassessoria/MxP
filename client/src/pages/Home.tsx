import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PlayCircle, Layers, Server, Cloud, MonitorPlay, FileText, Search, Mic2 } from "lucide-react";
import { Link } from "wouter";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const segments = [
    { title: "Televisão", icon: <MonitorPlay className="w-12 h-12 mb-4 text-[#EE6025]" /> },
    { title: "Rádio", icon: <Mic2 className="w-12 h-12 mb-4 text-[#EE6025]" /> },
    { title: "TV Igreja", icon: <Cloud className="w-12 h-12 mb-4 text-[#EE6025]" /> },
    { title: "Setor Público", icon: <Server className="w-12 h-12 mb-4 text-[#EE6025]" /> },
    { title: "EAD", icon: <Layers className="w-12 h-12 mb-4 text-[#EE6025]" /> },
  ];

  return (
    <Layout>
      {/* Hero Video Section */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-[#263858]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <iframe 
            className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
            src="https://www.youtube.com/embed/ZepJRvf_elo?playlist=ZepJRvf_elo&mute=1&autoplay=1&loop=1&controls=0&start=0" 
            title="Media Portal Hero Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
          <span className="bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">Media Asset Management</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Gestão inteligente de <br/>
            <span className="text-[#EE6025]">ativos digitais</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10 leading-relaxed">
            Com o MAM Media Portal é possível realizar a gestão de pequenos, médios e grandes acervos de mídia, com segurança garantida e recuperação ágil.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/products">
                <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold px-8 py-6 text-lg rounded shadow-lg transition-all hover:scale-105">
                    Falar com um Consultor
                </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Segmentos Clean */}
      <div className="bg-white py-20 border-b border-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#263858] text-center mb-16">Segmentos de Atuação</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {segments.map((seg, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-lg hover:bg-gray-50 transition-colors group cursor-default">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {seg.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-600 group-hover:text-[#263858] transition-colors">{seg.title}</h3>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fluxo de Mídia */}
      <div className="bg-gray-50 py-24">
        <div className="container">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#263858] mb-4">Fluxo de Mídia Inteligente</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Nossa plataforma integra todas as etapas do ciclo de vida do conteúdo, garantindo eficiência do ingest à distribuição.
                </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Linha conectora (desktop apenas) */}
                <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-1 bg-gray-200 -z-10"></div>
                
                {[
                    { title: "Ingest", desc: "Captura automática de arquivos e sinais ao vivo." },
                    { title: "Gestão", desc: "Catalogação rica com metadados e IA." },
                    { title: "Edição", desc: "Integração nativa com Adobe e Avid." },
                    { title: "Distribuição", desc: "Entrega multiplataforma (TV, Web, VOD)." }
                ].map((step, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center relative">
                        <div className="w-10 h-10 bg-[#263858] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 border-4 border-white shadow-sm">
                            {idx + 1}
                        </div>
                        <h3 className="text-xl font-bold text-[#263858] mb-3">{step.title}</h3>
                        <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Nosso Conteúdo (Blog Preview) */}
      <div className="py-24">
        <div className="container">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-[#263858] mb-2">Nosso Conteúdo</h2>
                    <p className="text-gray-600">Fique por dentro das novidades do mercado broadcast.</p>
                </div>
                <Link href="/blog">
                    <Button variant="outline" className="hidden md:flex border-[#EE6025] text-[#EE6025] hover:bg-[#EE6025] hover:text-white font-bold">
                        Ver Blog Completo <ArrowRight size={16} className="ml-2" />
                    </Button>
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Media Portal na NAB Show 2024", cat: "Eventos", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" },
                    { title: "Como a IA está mudando a catalogação", cat: "Tecnologia", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" },
                    { title: "Case de Sucesso: Canal UOL", cat: "Cases", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" }
                ].map((post, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="overflow-hidden rounded-lg mb-4 h-56 relative">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <span className="absolute top-4 left-4 bg-[#EE6025] text-white text-xs font-bold px-2 py-1 rounded uppercase">{post.cat}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#263858] group-hover:text-[#EE6025] transition-colors mb-2 leading-tight">
                            {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm">Ler artigo completo &rarr;</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Video Section Title */}
      <div className="bg-[#263858] py-20 text-center text-white">
        <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Conheça mais em 1 minuto</h2>
            <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10">
                 <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ZepJRvf_elo" 
                    title="Media Portal Institucional"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      </div>
    </Layout>
  );
}
