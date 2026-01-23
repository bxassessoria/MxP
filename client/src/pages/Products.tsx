import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    title: "Media Asset Management",
    desc: "Gestão completa de ativos digitais com indexação avançada e busca inteligente.",
    link: "/products/mam",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cloud Archive",
    desc: "Armazenamento seguro e escalável na nuvem para preservação de longo prazo.",
    link: "/products/cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Inteligência Artificial",
    desc: "Reconhecimento facial, transcrição de áudio e análise de sentimentos automática.",
    link: "/products/ai",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
  },
  {
    title: "Ingest & Playout",
    desc: "Automação de captura e exibição de conteúdo para broadcast e streaming.",
    link: "/products/ingest",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Workflow Automation",
    desc: "Orquestração de processos de mídia para aumentar a eficiência operacional.",
    link: "/products/workflow",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Digital Signage",
    desc: "Soluções para distribuição de conteúdo em telas corporativas e públicas.",
    link: "/products/signage",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Products() {
  return (
    <Layout>
      <div className="bg-[#02040A] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0056D2]/20 via-transparent to-transparent"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Nossas Soluções</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Tecnologia de ponta para gestão, distribuição e monetização de conteúdo audiovisual.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.title} href={product.link}>
              <a className="group block overflow-hidden bg-white/5 border border-white/10 rounded-xl hover:border-[#00FF00]/50 transition-all hover:shadow-[0_0_30px_rgba(0,255,0,0.1)]">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00FF00] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{product.desc}</p>
                  <div className="flex items-center text-[#00FF00] font-bold text-sm">
                    Saiba Mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#050A1F] py-20 border-t border-white/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Precisa de uma solução personalizada?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Nossos especialistas podem desenhar o fluxo ideal para o seu negócio de mídia.
          </p>
          <Button className="bg-[#00FF00] hover:bg-green-400 text-black font-bold px-8 py-3 h-auto text-lg rounded-full shadow-[0_0_20px_rgba(0,255,0,0.3)]">
            Falar com Consultor
          </Button>
        </div>
      </div>
    </Layout>
  );
}
