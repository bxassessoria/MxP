import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { ArrowRight, Cloud, Server, Box, PlayCircle, Layers, Database, Video, MonitorPlay } from "lucide-react";
import { Link } from "wouter";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const segments = [
  { title: "Televisão", icon: <TvIcon /> },
  { title: "Rádio", icon: <RadioIcon /> },
  { title: "TV Igreja", icon: <ChurchIcon /> },
  { title: "Público", icon: <PublicIcon /> },
  { title: "EAD", icon: <EadIcon /> },
  { title: "Corporativo", icon: <CorpIcon /> },
];

function TvIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg> }
function RadioIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg> }
function ChurchIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 4h4"/><path d="M12 2v20"/><path d="M6 8h12"/></svg> }
function PublicIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
function EadIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> }
function CorpIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg> }

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 4000 })]);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#263858] text-white min-h-[600px] flex items-center py-20 relative overflow-hidden">
        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-[#EE6025] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Media Asset Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Gestão inteligente de <span className="text-[#EE6025]">ativos digitais</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Com o MAM Media Portal é possível realizar a gestão de pequenos, médios e grandes acervos de mídia, com segurança garantida e recuperação ágil.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold px-8 py-6 rounded text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Falar com um Consultor
              </Button>
            </div>
          </div>
          
          {/* Vídeo Conceitual em Loop */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 group">
             <video 
               className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" 
               autoPlay 
               loop 
               muted 
               playsInline
               poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
             >
               <source src="https://assets.mixkit.co/videos/preview/mixkit-server-room-with-blue-lights-183-large.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-t from-[#263858]/80 to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-white">
                    <div className="bg-[#EE6025] p-2 rounded-full animate-pulse">
                        <PlayCircle size={24} fill="white" className="text-[#EE6025]" />
                    </div>
                    <span className="font-bold text-sm tracking-wide">Tecnologia em Ação</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Segmentos (Carrossel Clean) */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container">
          <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-10">Segmentos de Atuação</p>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {segments.map((seg, index) => (
                <div key={index} className="flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] min-w-0 pl-4">
                  <div className="flex flex-col items-center justify-center gap-3 p-6 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default group">
                    <div className="text-[#263858] group-hover:text-[#EE6025] transition-colors transform group-hover:scale-110 duration-300">
                        {seg.icon}
                    </div>
                    <span className="font-bold text-[#263858] text-sm">{seg.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fluxo de Mídia */}
      <div className="py-24 container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#263858] mb-4">Fluxo de Mídia Inteligente</h2>
          <p className="text-gray-600">
            Automatize desde a ingestão até a distribuição, garantindo integridade e agilidade em cada etapa do processo.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Linha conectora (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10"></div>
            
            {[
                { step: "01", title: "Ingestão", icon: <Database />, desc: "Captura e catalogação automática de metadados." },
                { step: "02", title: "Processamento", icon: <Layers />, desc: "Transcodificação e análise via IA." },
                { step: "03", title: "Gestão", icon: <Box />, desc: "Organização, busca e edição rápida." },
                { step: "04", title: "Distribuição", icon: <Globe />, desc: "Entrega multiplatforma (TV, Web, Social)." }
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center relative group hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-[#263858] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-[#EE6025] transition-colors shadow-md">
                        {item.icon}
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Passo {item.step}</div>
                    <h3 className="text-xl font-bold text-[#263858] mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Vídeo Institucional */}
      <div className="bg-[#263858] py-24 text-white">
        <div className="container text-center">
            <h2 className="text-3xl font-bold mb-12">Conheça mais em 1 minuto</h2>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/ZepJRvf_elo?rel=0&showinfo=0" 
                    title="Media Portal Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      </div>

      {/* Nosso Conteúdo (Blog Preview) */}
      <div className="py-24 container bg-gray-50">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-[#263858] mb-2">Nosso Conteúdo</h2>
                <p className="text-gray-600">Fique por dentro das novidades do mercado broadcast.</p>
            </div>
            <Link href="/blog">
                <Button variant="outline" className="border-[#EE6025] text-[#EE6025] hover:bg-[#EE6025] hover:text-white">
                    Ver Blog Completo <ArrowRight size={16} className="ml-2" />
                </Button>
            </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "A evolução do MAM na era Cloud", date: "24 Jan, 2026", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
                { title: "Segurança de dados em acervos digitais", date: "15 Jan, 2026", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" },
                { title: "Media Portal na NAB Show 2026", date: "10 Jan, 2026", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop" }
            ].map((post, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="h-48 overflow-hidden">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <div className="text-xs text-[#EE6025] font-bold mb-2">{post.date}</div>
                        <h3 className="font-bold text-[#263858] text-lg mb-4 group-hover:text-[#EE6025] transition-colors">{post.title}</h3>
                        <span className="text-sm text-gray-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Ler artigo <ArrowRight size={14} /></span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Vantagens (Restaurado) */}
      <div className="py-24 container">
        <h2 className="text-3xl font-bold text-[#263858] text-center mb-16">Por que escolher a Media Portal?</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "Flexibilidade", desc: "Soluções modulares que crescem com sua operação.", icon: <Layers /> },
                { title: "Segurança", desc: "Criptografia de ponta a ponta e backups redundantes.", icon: <Database /> },
                { title: "Suporte BR", desc: "Equipe especializada com atendimento em português 24/7.", icon: <MonitorPlay /> }
            ].map((adv, idx) => (
                <div key={idx} className="text-center p-8 border border-gray-100 rounded-xl hover:border-[#EE6025] transition-colors group">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#263858] group-hover:bg-[#EE6025] group-hover:text-white transition-colors">
                        {adv.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#263858] mb-3">{adv.title}</h3>
                    <p className="text-gray-600">{adv.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Tecnologias Integradas (Restaurado) */}
      <div className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container text-center">
            <h3 className="text-gray-400 font-bold uppercase tracking-widest mb-10">Tecnologias Integradas</h3>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Logos simulados com texto para placeholder clean */}
                <span className="text-2xl font-bold text-gray-400">Adobe</span>
                <span className="text-2xl font-bold text-gray-400">Sony</span>
                <span className="text-2xl font-bold text-gray-400">AWS</span>
                <span className="text-2xl font-bold text-gray-400">Google Cloud</span>
                <span className="text-2xl font-bold text-gray-400">Avid</span>
            </div>
        </div>
      </div>
    </Layout>
  );
}
