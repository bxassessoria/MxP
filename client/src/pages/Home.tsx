import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Cloud, Shield, Zap, PlayCircle, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Video Loop */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#263858]">
        {/* Video Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#263858]/80 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-server-room-with-blue-lights-24072-large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="inline-block bg-[#EE6025] text-white text-xs font-bold px-3 py-1 rounded mb-6 tracking-widest uppercase animate-fade-in-up">
            Media Asset Management
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-100">
            Gestão inteligente de <br/><span className="text-[#EE6025]">ativos digitais</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Com o MAM Media Portal é possível realizar a gestão de pequenos, médios e grandes acervos de mídia, com segurança garantida e recuperação ágil.
          </p>
          <div className="animate-fade-in-up animation-delay-300">
            <Link href="/contact">
              <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold px-10 py-6 text-lg rounded shadow-lg transition-transform hover:scale-105">
                Falar com um Consultor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Segmentos de Negócio (Carousel) */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#263858]">Segmentos de Negócio</h2>
            <p className="text-gray-600 text-lg">
              Soluções customizadas para atender as demandas específicas do seu setor.
            </p>
          </div>

          <Carousel 
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {[
                { title: "Televisão", icon: "📺", desc: "Gestão completa para emissoras" },
                { title: "Rádio", icon: "📻", desc: "Acervo de áudio inteligente" },
                { title: "TV Igreja", icon: "⛪", desc: "Organização de cultos e eventos" },
                { title: "Público", icon: "🏛️", desc: "Transparência e acesso rápido" },
                { title: "EAD", icon: "🎓", desc: "Gestão de videoaulas e materiais" },
                { title: "Corporativo", icon: "🏢", desc: "Comunicação interna eficiente" }
              ].map((item, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full text-center hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-[#263858] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Dedicated Video Section */}
      <section className="py-24 bg-[#263858] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme seu fluxo de trabalho</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Veja como a plataforma Media Portal centraliza, organiza e distribui seu conteúdo com eficiência incomparável. Nossa interface intuitiva permite que sua equipe foque no que importa: criar conteúdo de qualidade.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="text-[#EE6025] mr-3" size={20} /> Indexação automática com IA
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="text-[#EE6025] mr-3" size={20} /> Busca frame-a-frame
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="text-[#EE6025] mr-3" size={20} /> Integração nativa com editores
                </li>
              </ul>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#263858] font-bold px-8 py-3 rounded">
                Agendar Demonstração
              </Button>
            </div>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Media Portal Interface Preview" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções (Grid) */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#EE6025] font-bold uppercase tracking-widest text-sm">Nossas Soluções</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-[#263858]">Tecnologia completa para seu acervo</h2>
            <p className="text-gray-600 text-lg">
              Do cloud ao on-premises, temos a infraestrutura ideal para o seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "CloudFly", desc: "Gestão e processamento 100% em nuvem.", icon: <Cloud className="text-[#EE6025]" size={32} />, link: "/products/cloudfly" },
              { title: "Gems in a box", desc: "Infraestrutura on-premises dedicada.", icon: <Server className="text-[#EE6025]" size={32} />, link: "/products/gems-in-a-box" },
              { title: "CloudLink", desc: "Solução híbrida (Cloud + On-Premises).", icon: <Zap className="text-[#EE6025]" size={32} />, link: "/products/cloudlink" },
              { title: "Custom PRJ", desc: "Projetos customizados de infraestrutura.", icon: <Shield className="text-[#EE6025]" size={32} />, link: "/products/custom-prj" },
              { title: "Gendai TV", desc: "Fluxo completo para emissoras de TV.", icon: <PlayCircle className="text-[#EE6025]" size={32} />, link: "/products/gendai-tv" },
              { title: "Gendai News", desc: "Agilidade para jornalismo e redações.", icon: <CheckCircle2 className="text-[#EE6025]" size={32} />, link: "/products/gendai-news" }
            ].map((item, idx) => (
              <Link key={idx} href={item.link}>
                <a className="bg-white border border-gray-200 p-8 rounded-lg hover:border-[#EE6025] hover:shadow-lg transition-all group flex flex-col h-full cursor-pointer text-left">
                  <div className="bg-[#EE6025]/10 w-14 h-14 rounded flex items-center justify-center mb-6 group-hover:bg-[#EE6025] transition-colors">
                    <div className="text-[#EE6025] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#263858] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                  <div className="flex items-center text-[#EE6025] font-bold text-sm uppercase tracking-wider mt-auto group-hover:underline">
                    Saiba Mais <ArrowRight size={16} className="ml-2" />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens (Institucional) */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#263858] mb-6">Por que escolher a Media Portal?</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Somos líderes em tecnologia de gestão de mídia no Brasil, com 16 anos de experiência entregando soluções robustas para os maiores players do mercado.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Integração Total", desc: "Conecte-se com Adobe, Avid, Sony e mais." },
                  { title: "Segurança", desc: "Proteção de dados e redundância garantida." },
                  { title: "Suporte Local", desc: "Equipe brasileira especializada e ágil." },
                  { title: "Flexibilidade", desc: "Modelos SaaS, On-Premises ou Híbrido." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-[#263858] mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" alt="Media Portal Team" className="rounded-lg shadow-xl" />
               <div className="absolute -bottom-6 -left-6 bg-[#EE6025] text-white p-6 rounded shadow-lg max-w-xs">
                 <div className="text-3xl font-bold mb-1">16+ Anos</div>
                 <div className="text-sm opacity-90">De inovação contínua no mercado de broadcast.</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros (Carousel) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container text-center mb-8">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tecnologias Integradas</p>
        </div>
        <Carousel 
            plugins={[Autoplay({ delay: 2000 })]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="items-center">
              {["Adobe", "Sony", "AWS", "Google Cloud", "IBM", "Dell", "Avid", "Ross"].map((partner, idx) => (
                <CarouselItem key={idx} className="basis-1/3 md:basis-1/5 lg:basis-1/6 text-center">
                   <div className="text-xl font-bold text-gray-300 hover:text-[#263858] transition-colors cursor-default select-none">
                     {partner}
                   </div>
                </CarouselItem>
              ))}
            </CarouselContent>
        </Carousel>
      </section>
    </Layout>
  );
}
