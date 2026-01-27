import Layout from "@/components/Layout";
import { Search, Globe, Server, Video, Cloud, Database, Cpu } from "lucide-react";
import { useState } from "react";

// Helper para categorizar e atribuir ícones/descrições
const getPartnerInfo = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("aws") || n.includes("google") || n.includes("azure") || n.includes("cloud") || n.includes("dropbox")) {
    return { 
      category: "Cloud & Storage", 
      icon: Cloud,
      desc: "Armazenamento e processamento em nuvem escalável.",
      logo: `https://logo.clearbit.com/${n.replace(/\s/g, '')}.com`
    };
  }
  if (n.includes("sony") || n.includes("canon") || n.includes("panasonic") || n.includes("grass") || n.includes("harmonic")) {
    return { 
      category: "Broadcast Hardware", 
      icon: Video,
      desc: "Integração direta com câmeras e playout servers.",
      logo: `https://logo.clearbit.com/${n.replace(/\s/g, '')}.com`
    };
  }
  if (n.includes("adobe") || n.includes("avid") || n.includes("apple") || n.includes("final") || n.includes("edit")) {
    return { 
      category: "Edição & Post", 
      icon: Cpu,
      desc: "Workflows de edição não-linear integrados.",
      logo: `https://logo.clearbit.com/${n.replace(/\s/g, '')}.com`
    };
  }
  if (n.includes("dell") || n.includes("hp") || n.includes("ibm") || n.includes("quantum") || n.includes("hitachi")) {
    return { 
      category: "Infraestrutura IT", 
      icon: Server,
      desc: "Servidores e storage de alta performance.",
      logo: `https://logo.clearbit.com/${n.replace(/\s/g, '')}.com`
    };
  }
  return { 
    category: "Tecnologia", 
    icon: Globe,
    desc: "Soluções conectadas ao ecossistema Media Portal.",
    logo: null
  };
};

const partnerNames = [
  "Pebble", "Telestream", "Sony", "Tektronix", "IPV", "Harris", "Harmonic",
  "Edit Share", "Seachange", "AP News", "SNews", "Quantum", "Orad", "Qualstar",
  "AWS", "Google Cloud", "Fujitsu", "MDotti", "Embratel", "Grass Valley",
  "Apptek", "MOG", "4S", "Cinegy", "Dell", "IBM", "Hitachi", "HP", "Apple",
  "Supermicro", "VMware", "Xen", "Hyper-V", "Vimeo", "YouTube", "BlackBaze",
  "Owncloud", "DropBox", "Front Porch", "Floripa Tecnologia", "Voice Interaction",
  "Rohde & Schwarz", "Overland Tandberg", "Main Concept"
];

// Gerar lista de objetos
const partners = partnerNames.map(name => {
  const info = getPartnerInfo(name);
  return {
    name,
    ...info
  };
}).sort((a, b) => a.name.localeCompare(b.name));

export default function Integrations() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPartners = partners.filter(partner => 
    partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* HERO SECTION - PADRÃO HOME */}
      <section className="relative min-h-[90vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
               alt="Background Integrações" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white">
              Conectividade Total
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Lista de <span className="text-[#EE6025]">Integrações</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              O Media Portal se conecta nativamente com as principais tecnologias do mercado broadcast e TI.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg">
                <input 
                    type="text" 
                    placeholder="Buscar por nome ou categoria..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:border-[#EE6025] focus:bg-white/20 outline-none transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRAÇÕES GRID */}
      <section className="py-24 bg-white">
        <div className="container">
          {filteredPartners.length === 0 ? (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">Nenhuma integração encontrada para "{searchTerm}".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPartners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#EE6025]/30 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 shrink-0 bg-gray-50 rounded-lg p-2 flex items-center justify-center border border-gray-100">
                        {/* Tenta carregar logo, fallback para ícone */}
                        <img 
                            src={partner.logo || ""} 
                            alt={partner.name}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                            className="max-h-full max-w-full object-contain"
                        />
                        <partner.icon className="hidden text-[#EE6025] w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#263858] group-hover:text-[#EE6025] transition-colors">
                            {partner.name}
                        </h3>
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                            {partner.category}
                        </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {partner.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#F8F9FA] border-t border-gray-200 text-center">
        <div className="container max-w-2xl">
            <h2 className="text-3xl font-bold text-[#263858] mb-4">Não encontrou o que procurava?</h2>
            <p className="text-gray-600 mb-8">
                Nossa arquitetura aberta permite o desenvolvimento rápido de novos drivers e conectores.
            </p>
            <a 
                href="/contact" 
                className="inline-block bg-[#263858] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#1e2d4a] transition-colors"
            >
                Falar com Engenharia
            </a>
        </div>
      </section>
    </Layout>
  );
}
