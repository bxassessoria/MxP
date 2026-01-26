import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const clients = [
  { name: "TV Cultura", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/TV_Cultura_Logo.png/800px-TV_Cultura_Logo.png" },
  { name: "Rádio Cultura Brasil", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/R%C3%A1dio_Cultura_Brasil_logo.png/640px-R%C3%A1dio_Cultura_Brasil_logo.png" },
  { name: "EPTV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/EPTV_2017.png/600px-EPTV_2017.png" },
  { name: "TV Centro América", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/TV_Centro_Am%C3%A9rica_logo.png/600px-TV_Centro_Am%C3%A9rica_logo.png" },
  { name: "TV Tem", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TV_TEM_logo.png/600px-TV_TEM_logo.png" },
  { name: "TV Novo Tempo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/TV_Novo_Tempo_logo.png/600px-TV_Novo_Tempo_logo.png" },
  { name: "TV Morena", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/TV_Morena_logo.png/600px-TV_Morena_logo.png" },
  { name: "TV Câmara São Paulo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/TV_C%C3%A2mara_SP_logo.png/600px-TV_C%C3%A2mara_SP_logo.png" },
  { name: "TV Assembleia CE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/TV_Assembleia_CE_logo.png/600px-TV_Assembleia_CE_logo.png" },
  { name: "TV Serra Dourada", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/TV_Serra_Dourada_logo.png/600px-TV_Serra_Dourada_logo.png" },
  { name: "Traffic Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Traffic_Sports_logo.png/600px-Traffic_Sports_logo.png" },
  { name: "TV Costa Norte", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/TV_Costa_Norte_logo.png/600px-TV_Costa_Norte_logo.png" },
  { name: "TV Câmara SJC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/TV_C%C3%A2mara_SJC_logo.png/600px-TV_C%C3%A2mara_SJC_logo.png" },
  { name: "Instituto Embratel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Instituto_Embratel_logo.png/600px-Instituto_Embratel_logo.png" },
  { name: "Sports+", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sports%2B_logo.png/600px-Sports%2B_logo.png" },
  { name: "Arca Media", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Arca_Media_logo.png/600px-Arca_Media_logo.png" },
  { name: "Igreja Adventista", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Igreja_Adventista_logo.png/600px-Igreja_Adventista_logo.png" },
  { name: "MTV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/MTV_logo.png/600px-MTV_logo.png" },
  { name: "TV Rá Tim Bum", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/TV_R%C3%A1_Tim_Bum_logo.png/600px-TV_R%C3%A1_Tim_Bum_logo.png" },
  { name: "Embrapa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Embrapa_logo.png/600px-Embrapa_logo.png" }
];

export default function ClientsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 0.8, stopOnInteraction: false, direction: 'backward' })
  ]);

  return (
    <section className="py-24 bg-[#F8F9FA] border-y border-gray-200 overflow-hidden">
      <div className="container mb-12 text-center">
        <h2 className="text-3xl font-bold text-[#263858] mb-4">Quem confia na Media Portal</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">Grandes empresas que transformaram sua gestão de mídia</p>
      </div>
      
      <div className="embla mb-12" ref={emblaRef}>
        <div className="flex gap-16 items-center px-4">
          {clients.map((client, index) => (
            <div key={index} className="flex-[0_0_150px] min-w-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer flex items-center justify-center h-24">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="w-full h-full object-contain mix-blend-multiply"
                onError={(e) => {
                    // Fallback para nome se imagem falhar
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                        e.currentTarget.style.display = 'none';
                        parent.innerText = client.name;
                        parent.className = "flex-[0_0_150px] min-w-0 font-bold text-gray-400 text-center flex items-center justify-center h-24 border border-dashed border-gray-300 rounded";
                    }
                }}
              />
            </div>
          ))}
           {/* Duplicar para loop infinito visual */}
           {clients.map((client, index) => (
            <div key={`dup-${index}`} className="flex-[0_0_150px] min-w-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer flex items-center justify-center h-24">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="w-full h-full object-contain mix-blend-multiply"
                onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                        e.currentTarget.style.display = 'none';
                        parent.innerText = client.name;
                        parent.className = "flex-[0_0_150px] min-w-0 font-bold text-gray-400 text-center flex items-center justify-center h-24 border border-dashed border-gray-300 rounded";
                    }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/cases">
            <Button variant="outline" className="border-[#EE6025] text-[#EE6025] hover:bg-[#EE6025] hover:text-white font-bold px-8 py-6 rounded-full transition-all">
                Saiba Mais sobre nossos Cases
            </Button>
        </Link>
      </div>
    </section>
  );
}
