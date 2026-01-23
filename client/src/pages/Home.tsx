import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Server, Cloud, Database, Shield, Zap, Play } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0056D2]/20 via-[#050A1F] to-[#02040A]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF00]/10 border border-[#00FF00]/20 text-[#00FF00] text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse"></span>
              Media Asset Management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight animate-fade-in-up animation-delay-100">
              Gestão inteligente de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-emerald-400">ativos digitais</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
              Com o MAM Media Portal é possível realizar a gestão de pequenos, médios e grandes acervos de mídia, com segurança garantida e recuperação ágil. Recursos avançados de IA garantem o sucesso de suas pesquisas.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link href="/contact">
                <Button className="bg-[#00FF00] hover:bg-green-400 text-black font-bold px-8 py-6 rounded-full text-lg shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] transition-all">
                  Entrar em contato
                </Button>
              </Link>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full text-lg backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5 fill-current" /> Conheça em 1 minuto
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up animation-delay-500 hidden lg:block">
            <div className="relative z-10 bg-gradient-to-tr from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Media Portal Dashboard Interface" 
                className="rounded-xl shadow-inner border border-white/5"
              />
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-[#050A1F] border border-white/10 p-4 rounded-lg shadow-xl flex items-center gap-4 animate-float">
                <div className="bg-[#00FF00]/20 p-2 rounded-full">
                  <Database className="text-[#00FF00]" size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-bold">Storage</div>
                  <div className="text-white font-bold text-lg">Híbrido / Cloud</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-[#050A1F] border border-white/10 p-4 rounded-lg shadow-xl flex items-center gap-4 animate-float animation-delay-1000">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <Zap className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-bold">Velocidade</div>
                  <div className="text-white font-bold text-lg">Alta Performance</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0056D2]/20 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#00FF00] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-24 bg-[#02040A]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Segmentos de negócio</h2>
            <p className="text-gray-400 text-lg">
              Um sistema único, customizado de acordo com o segmento de negócio de cada empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Televisão", icon: "📺", desc: "Gestão completa para emissoras" },
              { title: "Rádio", icon: "📻", desc: "Acervo de áudio inteligente" },
              { title: "TV Igreja", icon: "⛪", desc: "Organização de cultos e eventos" },
              { title: "Público", icon: "🏛️", desc: "Transparência e acesso rápido" },
              { title: "EAD", icon: "🎓", desc: "Gestão de videoaulas e materiais" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-[#00FF00]/50 transition-all group cursor-pointer text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF00] transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050A1F]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-[#00FF00] font-bold tracking-widest uppercase text-sm mb-4">Por que Media Portal?</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vantagens da nossa tecnologia</h2>
              <p className="text-gray-400 text-lg mb-8">
                Entenda os diferenciais dos softwares de gestão de ativos da Media Portal que nos tornam líderes de mercado.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Integrações multisistemas", desc: "Faça a integração com ingests, playouts e outros sistemas já contratados.", icon: <Server className="text-[#00FF00]" /> },
                  { title: "Flexibilidade", desc: "Construa fluxos de trabalho customizados aderentes ao processo atual da emissora.", icon: <Zap className="text-[#00FF00]" /> },
                  { title: "Segurança", desc: "Sistema de prevenção de desastres e múltiplas redundâncias.", icon: <Shield className="text-[#00FF00]" /> },
                  { title: "Armazenamento inteligente", desc: "Faça a gestão e o armazenamento dos ativos em nuvem, storage ou robótica.", icon: <Cloud className="text-[#00FF00]" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-white/5 p-3 rounded-lg border border-white/10 h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-2xl border border-white/10 translate-y-8" alt="Dashboard" />
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" className="rounded-2xl shadow-2xl border border-white/10" alt="Server Room" />
              </div>
              {/* Tech Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-[#00FF00]/30 p-6 rounded-full shadow-[0_0_30px_rgba(0,255,0,0.2)]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00FF00]">16+</div>
                  <div className="text-xs text-white uppercase tracking-wider font-bold">Anos de<br/>Inovação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-[#02040A]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Fluxos de Mídia</h2>
            <p className="text-gray-400 text-lg">
              Alguns exemplos do que você pode fazer com a Media Portal para otimizar sua produção.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Arquivamento automático", desc: "Catalogação e indexação nos padrões LTO, RDX e ODA." },
              { title: "Solução flexível", desc: "Escolha uma solução on premises, nuvem ou híbrida." },
              { title: "Inteligência Artificial", desc: "Geração automática de metadados, legendas e análise de faces e objetos." },
              { title: "Gestão inteligente", desc: "Gestão do fluxo de produção, arquivamento seguro e recuperação rápida." }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-2xl hover:border-[#00FF00]/30 transition-all group">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00FF00] transition-colors duration-300">
                  <CheckCircle2 className="text-[#00FF00] group-hover:text-black transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee (Static for now) */}
      <section className="py-16 border-y border-white/5 bg-[#050A1F]">
        <div className="container text-center mb-8">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Tecnologias Integradas</p>
        </div>
        <div className="container overflow-hidden">
          <div className="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 gap-8 flex-wrap lg:flex-nowrap">
            {["Adobe", "Sony", "AWS", "Google Cloud", "IBM", "Dell"].map((partner, idx) => (
              <div key={idx} className="text-2xl font-bold text-white/30 hover:text-white transition-colors cursor-default">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-[#02040A]">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Nosso Conteúdo</h2>
              <p className="text-gray-400">Tenha acesso ao conteúdo gratuito sobre o mercado Broadcast.</p>
            </div>
            <Link href="/blog">
              <Button variant="ghost" className="text-[#00FF00] hover:text-green-400 hover:bg-transparent p-0 font-bold hidden md:flex">
                Ver todos os posts <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Media Portal celebra balanço positivo em 2024",
                date: "Nov 2024",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                desc: "Projetos de destaque e expansão de negócios marcam o ano."
              },
              {
                title: "16 anos de inovação e excelência",
                date: "Out 2024",
                img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
                desc: "Empresa comemorou 16 anos de existência no mercado de broadcast."
              },
              {
                title: "Canal UOL amplia cobertura e estreia na Vivo TV",
                date: "Set 2024",
                img: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=2071&auto=format&fit=crop",
                desc: "Ampliando acesso a conteúdos exclusivos de esportes e jornalismo."
              }
            ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-xl mb-6 border border-white/10">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF00] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {post.desc}
                </p>
                <div className="flex items-center text-[#00FF00] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Ler mais <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
