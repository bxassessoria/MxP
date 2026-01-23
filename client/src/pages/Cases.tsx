import Layout from "@/components/Layout";
import { ArrowRight, PlayCircle } from "lucide-react";

const cases = [
  {
    client: "Canal UOL",
    title: "Expansão para TV Paga",
    desc: "Como a Media Portal estruturou o fluxo de gestão de mídia para a estreia do Canal UOL na Vivo TV e outras operadoras.",
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=2071&auto=format&fit=crop",
    tags: ["MAM", "Playout", "Cloud"]
  },
  {
    client: "Rede TV!",
    title: "Digitalização de Acervo Histórico",
    desc: "Preservação e monetização de décadas de conteúdo televisivo com indexação automática por IA.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop",
    tags: ["Arquivamento", "IA", "LTO"]
  },
  {
    client: "TV Cultura",
    title: "Modernização do Jornalismo",
    desc: "Agilidade na produção de notícias com integração entre MAM e sistemas de redação (NRCS).",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Jornalismo", "Integração", "News"]
  },
  {
    client: "Rádio Jovem Pan",
    title: "Convergência Rádio-TV",
    desc: "Gestão unificada de ativos para transmissão multiplataforma (Rádio e YouTube).",
    image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?q=80&w=1974&auto=format&fit=crop",
    tags: ["Visual Radio", "Streaming", "MAM"]
  },
  {
    client: "Igreja Universal",
    title: "Gestão Global de Conteúdo",
    desc: "Distribuição eficiente de conteúdo religioso para templos e emissoras em todo o mundo.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    tags: ["Global", "Distribuição", "Cloud"]
  },
  {
    client: "EAD Unicesumar",
    title: "Plataforma de Videoaulas",
    desc: "Organização e streaming de milhares de horas de conteúdo educacional para alunos EAD.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    tags: ["Educação", "VOD", "Gestão"]
  }
];

export default function Cases() {
  return (
    <Layout>
      <div className="bg-[#02040A] text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cases de Sucesso</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Descubra como grandes players do mercado utilizam a tecnologia Media Portal para transformar seus negócios.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div key={idx} className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00FF00]/50 transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <PlayCircle className="text-white w-16 h-16 drop-shadow-lg" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold text-[#00FF00] bg-[#00FF00]/10 px-2 py-1 rounded uppercase tracking-wider border border-[#00FF00]/20">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-2">{item.client}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00FF00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-center font-bold text-white group-hover:text-[#00FF00] transition-colors">
                  Ver Case Completo <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
