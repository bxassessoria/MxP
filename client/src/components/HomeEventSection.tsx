import { Link } from "wouter";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export default function HomeEventSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#263858] to-[#1a2840] text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EE6025] rounded-full blur-[120px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EE6025] rounded-full blur-[100px] opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 text-white text-sm font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#EE6025] rounded-full animate-pulse"></span>
              Próximo Evento
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Encontro Mídia Portal & Parceiros <br/>
              <span className="text-[#EE6025]">Belo Horizonte</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Conexões estratégicas que transformam relacionamento em negócios. Um encontro exclusivo para tomadores de decisão do mercado de Broadcast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Calendar className="text-[#EE6025]" size={24} />
                <div>
                  <span className="block text-xs text-gray-400 uppercase font-bold">Data</span>
                  <span className="font-bold">25 de Fevereiro</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <MapPin className="text-[#EE6025]" size={24} />
                <div>
                  <span className="block text-xs text-gray-400 uppercase font-bold">Local</span>
                  <span className="font-bold">Hotel Royal Golden Savassi</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/encontro-bh">
                <button className="bg-[#EE6025] hover:bg-[#d94e15] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center gap-2 group">
                  Garantir minha vaga
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop" 
                alt="Networking Event" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#263858] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Networking Estratégico</p>
                <p className="text-sm text-gray-300">Troca de experiências reais</p>
              </div>
            </div>
            
            {/* Elemento decorativo atrás da imagem */}
            <div className="absolute inset-0 border-2 border-[#EE6025] rounded-2xl transform -rotate-2 translate-x-4 translate-y-4 -z-10 opacity-30"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
