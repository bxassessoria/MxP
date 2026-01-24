import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PlayCircle, Layers, Server, Cloud, MonitorPlay, FileText, Search, Mic2, ShieldCheck, Zap, Globe, Users } from "lucide-react";
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

  const advantages = [
    { title: "Segurança Total", desc: "Criptografia de ponta a ponta e backups automáticos.", icon: <ShieldCheck className="w-10 h-10 text-[#EE6025]" /> },
    { title: "Alta Performance", desc: "Transcodificação rápida e entrega via CDN global.", icon: <Zap className="w-10 h-10 text-[#EE6025]" /> },
    { title: "Acesso Remoto", desc: "Gerencie seu acervo de qualquer lugar do mundo.", icon: <Globe className="w-10 h-10 text-[#EE6025]" /> },
    { title: "Colaboração", desc: "Ferramentas para equipes trabalharem simultaneamente.", icon: <Users className="w-10 h-10 text-[#EE6025]" /> },
  ];

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Avid_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f0/Microsoft_Azure_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Telestream_Logo.png"
  ];

  return (
    <Layout>
      {/* Hero Section: Texto Esquerda / Vídeo Direita */}
      <div className="bg-[#263858] text-white py-24 relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Coluna Texto */}
            <div className="text-left">
                <span className="bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">Media Asset Management</span>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    Gestão inteligente de <br/>
                    <span className="text-[#EE6025]">ativos digitais</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
                    Com o MAM Media Portal é possível realizar a gestão de pequenos, médios e grandes acervos de mídia, com segurança garantida e recuperação ágil.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/products">
                        <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold px-8 py-6 text-lg rounded shadow-lg transition-all hover:scale-105">
                            Falar com um Consultor
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Coluna Vídeo (Loop Background/Conceitual) */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50">
                <video 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-server-room-with-blue-lights-2423-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#263858] via-transparent to-transparent"></div>
            </div>
        </div>
      </div>

      {/* Segmentos Clean (Restaurado) */}
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

      {/* Vantagens (Restaurado) */}
      <div className="bg-gray-50 py-24">
        <div className="container">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#263858] mb-4">Por que escolher a Media Portal?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Tecnologia robusta desenvolvida para escalar junto com o seu negócio.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((adv, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="mb-6">{adv.icon}</div>
                        <h3 className="text-xl font-bold text-[#263858] mb-3">{adv.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Fluxo de Mídia (Novo) */}
      <div className="bg-white py-24 border-y border-gray-100">
        <div className="container">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#263858] mb-4">Fluxo de Mídia Inteligente</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Nossa plataforma integra todas as etapas do ciclo de vida do conteúdo.
                </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-1 bg-gray-100 -z-10"></div>
                {[
                    { title: "Ingest", desc: "Captura automática de arquivos e sinais ao vivo." },
                    { title: "Gestão", desc: "Catalogação rica com metadados e IA." },
                    { title: "Edição", desc: "Integração nativa com Adobe e Avid." },
                    { title: "Distribuição", desc: "Entrega multiplataforma (TV, Web, VOD)." }
                ].map((step, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center relative">
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

      {/* Parceiros (Restaurado) */}
      <div className="py-16 bg-gray-50">
        <div className="container">
            <h2 className="text-2xl font-bold text-gray-400 text-center mb-12 uppercase tracking-widest">Tecnologias Integradas</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {partners.map((logo, idx) => (
                    <img key={idx} src={logo} alt="Partner" className="h-12 w-auto object-contain" />
                ))}
            </div>
        </div>
      </div>

      {/* Vídeo Institucional (Secao Dedicada) */}
      <div className="bg-[#263858] py-24 text-center text-white">
        <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Conheça mais em 1 minuto</h2>
            <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black">
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

      {/* Nosso Conteúdo (Novo) */}
      <div className="py-24 bg-white">
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
    </Layout>
  );
}
