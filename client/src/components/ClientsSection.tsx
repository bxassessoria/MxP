import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Dados centralizados dos clientes (mesmos da página Cases)
const clients = [
  { name: "TV Cultura", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-01.jpg" },
  { name: "Rádio Cultura Brasil", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-18.jpg" },
  { name: "EPTV", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/EPTV_ok.jpg" },
  { name: "TV Centro América", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/centro-pb.jpg" },
  { name: "TV Tem", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-06.jpg" },
  { name: "TV Novo Tempo", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-03_c.jpg" },
  { name: "TV Morena", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/morena-pb.jpg" },
  { name: "TV Câmara São Paulo", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/saopaulo_case.jpg" },
  { name: "TV Assembleia CE", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/TVALCEBW.png" },
  { name: "TV Serra Dourada", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-04.jpg" },
  { name: "Traffic Sports", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/traffic-sports.jpg" },
  { name: "TV Costa Norte", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/costa-norte2.png" },
  { name: "TV Câmara SJC", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/saojose.jpg" },
  { name: "Instituto Embratel", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/instituto-embratel.jpg" },
  { name: "Sports+", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-24.jpg" },
  { name: "Arca Media", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logo-arca-media.jpg" },
  { name: "Igreja Adventista", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-21.jpg" },
  { name: "MTV", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-27.jpg" },
  { name: "TV Rá Tim Bum", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-22.jpg" },
  { name: "Embrapa", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-19.jpg" }
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
      
      <div className="embla mb-16" ref={emblaRef}>
        <div className="flex gap-8 items-center px-4">
          {/* Mapeamento original */}
          {clients.map((client, index) => (
            <div 
                key={index} 
                className="flex-[0_0_220px] min-w-0 bg-white border border-gray-100 rounded-xl p-6 aspect-[4/3] flex items-center justify-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-[80%] max-h-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                        e.currentTarget.style.display = 'none';
                        const span = document.createElement('span');
                        span.innerText = client.name;
                        span.className = "text-center font-bold text-gray-400";
                        parent.appendChild(span);
                    }
                }}
              />
            </div>
          ))}
           {/* Duplicar para loop infinito visual (necessário para AutoScroll suave) */}
           {clients.map((client, index) => (
            <div 
                key={`dup-${index}`} 
                className="flex-[0_0_220px] min-w-0 bg-white border border-gray-100 rounded-xl p-6 aspect-[4/3] flex items-center justify-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-[80%] max-h-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                        e.currentTarget.style.display = 'none';
                        const span = document.createElement('span');
                        span.innerText = client.name;
                        span.className = "text-center font-bold text-gray-400";
                        parent.appendChild(span);
                    }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/cases">
            <Button variant="outline" className="border-[#EE6025] text-[#EE6025] hover:bg-[#EE6025] hover:text-white font-bold px-8 py-6 rounded-full transition-all shadow-sm hover:shadow-md">
                Saiba Mais sobre nossos Cases
            </Button>
        </Link>
      </div>
    </section>
  );
}
