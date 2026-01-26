import { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Tv, Radio, Church, Users, GraduationCap } from "lucide-react";

const segments = [
  { id: 1, title: "Televisão", icon: <Tv size={48} />, desc: "Gestão completa de grade e acervo" },
  { id: 2, title: "Rádio", icon: <Radio size={48} />, desc: "Visual radio e podcasting" },
  { id: 3, title: "TV Igreja", icon: <Church size={48} />, desc: "Gestão de conteúdo religioso" },
  { id: 4, title: "Público", icon: <Users size={48} />, desc: "Transparência e acesso cidadão" },
  { id: 5, title: "EAD", icon: <GraduationCap size={48} />, desc: "Acervo de aulas e educação" },
];

export default function SegmentsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false })
  ]);

  return (
    <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="container mb-12 text-center">
        <h2 className="text-3xl font-bold text-[#263858] mb-4">Segmentos de Atuação</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Soluções adaptadas para cada tipo de negócio de mídia</p>
      </div>
      
      <div className="embla" ref={emblaRef}>
        <div className="flex gap-6 px-4">
          {segments.map((segment) => (
            <div key={segment.id} className="flex-[0_0_280px] min-w-0">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 h-full flex flex-col items-center text-center hover:border-[#EE6025] hover:shadow-lg transition-all group">
                <div className="text-[#263858] mb-6 p-4 bg-white rounded-full shadow-sm group-hover:text-[#EE6025] transition-colors">
                  {segment.icon}
                </div>
                <h3 className="text-xl font-bold text-[#263858] mb-2">{segment.title}</h3>
                <p className="text-sm text-gray-500">{segment.desc}</p>
              </div>
            </div>
          ))}
           {/* Duplicar para loop infinito visual */}
           {segments.map((segment) => (
            <div key={`dup-${segment.id}`} className="flex-[0_0_280px] min-w-0">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 h-full flex flex-col items-center text-center hover:border-[#EE6025] hover:shadow-lg transition-all group">
                <div className="text-[#263858] mb-6 p-4 bg-white rounded-full shadow-sm group-hover:text-[#EE6025] transition-colors">
                  {segment.icon}
                </div>
                <h3 className="text-xl font-bold text-[#263858] mb-2">{segment.title}</h3>
                <p className="text-sm text-gray-500">{segment.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
