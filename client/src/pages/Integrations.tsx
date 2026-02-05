import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// Definição das categorias
const categories = [
  "Todos",
  "Cloud & Storage",
  "Broadcast Hardware",
  "Edição & Post",
  "Infraestrutura IT",
  "Outros"
];

// Helper para categorizar e buscar logos
const getPartnerInfo = (name: string) => {
  const n = name.toLowerCase();
  let logoUrl = "";
  
  // Mapeamento direto de logos locais
  const logoMap: {[key: string]: string} = {
    "pebble beach": "/images/logos/pebble-beach.png",
    "telestream": "/images/logos/telestream.png",
    "sony": "/images/logos/sony.png",
    "tektronix": "/images/logos/tektronix.png",
    "ipv": "/images/logos/ipv.png",
    "harris": "/images/logos/harris.png",
    "harmonic": "/images/logos/harmonic.png",
    "edit share": "/images/logos/edit-share.png",
    "seachange": "/images/logos/seachange.png",
    "ap news": "/images/logos/ap-news.png",
    "snews": "/images/logos/snews.png",
    "quantum": "/images/logos/quantum.png",
    "orad": "/images/logos/orad.png",
    "qualstar": "/images/logos/qualstar.png",
    "aws": "/images/logos/aws.png",
    "google cloud": "/images/logos/google-cloud.png",
    "fujitsu": "/images/logos/fujitsu.png",
    "mdotti": "/images/logos/mdotti.png",
    "embratel": "/images/logos/embratel.png",
    "grass valley": "/images/logos/grass-valley.png",
    "apptek": "/images/logos/apptek.png",
    "mog": "/images/logos/mog.png",
    "4s media solutions": "/images/logos/4s-media.png",
    "cinegy": "/images/logos/cinegy.png",
    "dell": "/images/logos/dell.png",
    "ibm": "/images/logos/ibm.png",
    "hitachi": "/images/logos/hitachi.png",
    "hp": "/images/logos/hp.png",
    "apple": "/images/logos/apple.png",
    "supermicro": "/images/logos/supermicro.png",
    "vmware": "/images/logos/vmware.png",
    "citrix": "/images/logos/citrix.png",
    "hyper-v": "/images/logos/hyper-v.png",
    "vimeo": "/images/logos/vimeo.png",
    "youtube": "/images/logos/youtube.png",
    "blackbaze": "/images/logos/blackbaze.png",
    "owncloud": "/images/logos/owncloud.png",
    "dropbox": "/images/logos/dropbox.png",
    "front porch": "/images/logos/front-porch.png",
    "floripa tecnologia": "/images/logos/floripa.png",
    "voice interaction": "/images/logos/voice-interaction.png",
    "rohde & schwarz": "/images/logos/rohde-schwarz.png",
    "overland tandberg": "/images/logos/overland.png",
    "main concept": "/images/logos/main-concept.png",
    "omneon": "/images/logos/omneon.png",
    "xendata": "/images/logos/xendata.png",
    "masstech": "/images/logos/masstech.png",
    "nexsan": "/images/logos/nexsan.png",
    "autocliper": "/images/logos/autocliper.png",
    "signiant": "/images/logos/signiant.png",
    "npaw": "/images/logos/npaw.png",
    "digilab": "/images/logos/digilab.png"
  };

  if (logoMap[n]) {
    logoUrl = logoMap[n];
  } else {
    // Fallback para Clearbit apenas se não tiver logo local
    let logoDomain = `${n.replace(/\s/g, '')}.com`;
    logoUrl = `https://logo.clearbit.com/${logoDomain}`;
  }

  if (n.includes("aws") || n.includes("google") || n.includes("azure") || n.includes("cloud") || n.includes("dropbox") || n.includes("blackbaze") || n.includes("owncloud") || n.includes("signiant")) {
    return { category: "Cloud & Storage", logo: logoUrl };
  }
  if (n.includes("sony") || n.includes("canon") || n.includes("panasonic") || n.includes("grass") || n.includes("harmonic") || n.includes("pebble") || n.includes("telestream") || n.includes("tektronix") || n.includes("orad") || n.includes("qualstar") || n.includes("omneon") || n.includes("xendata") || n.includes("masstech") || n.includes("nexsan") || n.includes("digilab")) {
    return { category: "Broadcast Hardware", logo: logoUrl };
  }
  if (n.includes("adobe") || n.includes("avid") || n.includes("apple") || n.includes("final") || n.includes("edit") || n.includes("cinegy") || n.includes("main concept") || n.includes("autocliper")) {
    return { category: "Edição & Post", logo: logoUrl };
  }
  if (n.includes("dell") || n.includes("hp") || n.includes("ibm") || n.includes("quantum") || n.includes("hitachi") || n.includes("supermicro") || n.includes("citrix") || n.includes("hyper-v") || n.includes("npaw")) {
    return { category: "Infraestrutura IT", logo: logoUrl };
  }
  return { category: "Outros", logo: logoUrl };
};

const partnerNames = [
  "Pebble Beach", "Telestream", "Sony", "Tektronix", "IPV", "Harris", "Harmonic",
  "Edit Share", "Seachange", "AP News", "SNews", "Quantum", "Orad", "Qualstar",
  "AWS", "Google Cloud", "Fujitsu", "mDotti", "Embratel", "Grass Valley",
  "Apptek", "MOG", "4S Media Solutions", "Cinegy", "Dell", "IBM", "Hitachi", "HP", "Apple",
  "Supermicro", "VMware", "Citrix", "Hyper-V", "Vimeo", "YouTube", "BlackBaze",
  "Owncloud", "DropBox", "Front Porch", "Floripa Tecnologia", "Voice Interaction",
  "Rohde & Schwarz", "Overland Tandberg", "Main Concept",
  "Omneon", "Xendata", "Masstech", "Nexsan", "Autocliper", "Signiant", "NPAW", "Digilab"
];

// Gerar lista de parceiros
const partners = partnerNames.map(name => {
  const info = getPartnerInfo(name);
  return {
    name,
    ...info
  };
}).sort((a, b) => a.name.localeCompare(b.name));

// Destaques para o Carrossel
const featuredPartners = [
  "SNews", "mDotti", "Voice Interaction", "Qualstar", "Overland Tandberg", "Quantum"
].map(name => partners.find(p => p.name === name) || { name, category: "Destaque", logo: "" });


export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Estado para o carrossel automático
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPartners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = activeCategory === "Todos" || partner.category === activeCategory;
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
               alt="Background Integrações" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] to-transparent"></div>
        </div>
        
        <div className="container relative z-10 pt-20 flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto Hero */}
          <div className="flex-1 max-w-2xl">
            <Link href="/">
                <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-8 pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
                </Button>
            </Link>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-2xl">
                <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white">
                Conectividade Total
                </div>
                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Nossas <span className="text-[#EE6025]">Integrações</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                O Media Portal se conecta nativamente com as principais tecnologias do mercado broadcast e TI para unificar seu fluxo de trabalho.
                </p>

                {/* Search Bar no Hero */}
                <div className="relative max-w-lg">
                    <input 
                        type="text" 
                        placeholder="Buscar parceiro..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:border-[#EE6025] focus:bg-white/20 outline-none transition-all"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                </div>
            </div>
          </div>

          {/* Carrossel de Destaques */}
          <div className="w-full md:w-1/3">
             <div className="bg-white rounded-2xl p-6 shadow-2xl border-t-4 border-[#EE6025]">
                <h3 className="text-[#263858] font-bold text-xl mb-6 text-center">Destaques</h3>
                <div className="relative h-48 flex items-center justify-center overflow-hidden">
                    {featuredPartners.map((partner, index) => (
                        <div 
                            key={index}
                            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform ${
                                index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                            }`}
                        >
                            {partner.logo ? (
                                <img src={partner.logo} alt={partner.name} className="h-24 object-contain mb-4" />
                            ) : (
                                <span className="text-2xl font-bold text-gray-400 mb-4">{partner.name}</span>
                            )}
                            <p className="text-[#EE6025] font-bold">{partner.name}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-2 mt-4">
                    {featuredPartners.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-[#EE6025] w-6" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* INTEGRATIONS GRID SECTION */}
      <section className="py-24 bg-white">
        <div className="container">
          
          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all
                  ${activeCategory === cat 
                    ? "bg-[#263858] text-white shadow-lg scale-105" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-[#263858]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PARTNERS GRID - 8 COLUNAS EM DESKTOP */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {filteredPartners.map((partner, idx) => (
              <div 
                key={idx}
                className="group relative bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center aspect-square shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
              >
                {/* LOGO */}
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                    }}
                    className="max-w-[80%] max-h-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : null}
                
                {/* Fallback text if no logo */}
                <span className={`fallback-text text-xs font-bold text-center text-gray-400 group-hover:text-[#263858] ${partner.logo ? 'hidden' : ''}`}>
                    {partner.name}
                </span>

                {/* Tooltip simples no hover */}
                <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center pointer-events-none border border-[#EE6025]">
                  <span className="text-[#263858] text-[10px] font-bold uppercase tracking-wider leading-tight">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPartners.length === 0 && (
            <div className="text-center py-20">
               <p className="text-gray-400 text-lg">Nenhum parceiro encontrado nesta categoria.</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#F8F9FA] border-t border-gray-200">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263858] mb-6">
            Não encontrou sua ferramenta?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Nossa arquitetura aberta permite o desenvolvimento rápido de novos drivers e conectores. Fale com nossa engenharia.
          </p>
          <a 
            href="/contato" 
            className="inline-block bg-[#EE6025] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#d94e15] transition-transform hover:scale-105 shadow-lg"
          >
            Solicitar Integração
          </a>
        </div>
      </section>
    </Layout>
  );
}
