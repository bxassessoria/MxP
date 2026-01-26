import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const clients = [
  { name: "UOL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/UOL_logo.svg/2560px-UOL_logo.svg.png" },
  { name: "Rede TV!", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/RedeTV%21.svg/1200px-RedeTV%21.svg.png" },
  { name: "TV Gazeta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TV_Gazeta_logo_2016.svg/1200px-TV_Gazeta_logo_2016.svg.png" },
  { name: "ALMG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bras%C3%A3o_de_Minas_Gerais.svg/1200px-Bras%C3%A3o_de_Minas_Gerais.svg.png" },
  { name: "SBT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/SBT_logo.svg/1200px-SBT_logo.svg.png" },
  { name: "Band", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Band_2018_logo.svg/1200px-Band_2018_logo.svg.png" },
  { name: "Record", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/RecordTV_2016_logo.svg/1200px-RecordTV_2016_logo.svg.png" },
  { name: "Globo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/TV_Globo_logo_2022.svg/1200px-TV_Globo_logo_2022.svg.png" }
];

export default function ClientsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 0.8, stopOnInteraction: false, direction: 'backward' })
  ]);

  return (
    <section className="py-24 bg-[#F8F9FA] border-y border-gray-200 overflow-hidden">
      <div className="container mb-12 text-center">
        <h2 className="text-3xl font-bold text-[#263858] mb-4">Quem confia na Media Portal</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Grandes empresas que transformaram sua gestão de mídia</p>
      </div>
      
      <div className="embla" ref={emblaRef}>
        <div className="flex gap-16 items-center px-4">
          {clients.map((client, index) => (
            <div key={index} className="flex-[0_0_180px] min-w-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer">
              <img src={client.logo} alt={client.name} className="w-full h-auto object-contain max-h-16 mix-blend-multiply" />
            </div>
          ))}
           {/* Duplicar para loop infinito visual */}
           {clients.map((client, index) => (
            <div key={`dup-${index}`} className="flex-[0_0_180px] min-w-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer">
              <img src={client.logo} alt={client.name} className="w-full h-auto object-contain max-h-16 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
