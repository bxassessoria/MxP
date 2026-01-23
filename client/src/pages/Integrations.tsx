import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Integrations() {
  const partners = [
    "Adobe", "Sony", "AWS", "Google Cloud", "IBM", "Dell", "HP", "Apple",
    "Avid", "Grass Valley", "Harmonic", "Telestream", "Rohde & Schwarz",
    "EVS", "Ross Video", "Chyron", "Vizrt", "Dalet", "Bitmovin", "Wowza",
    "Akamai", "Microsoft Azure", "Oracle Cloud", "Wasabi"
  ];

  return (
    <Layout>
      <div className="bg-[#0056D2] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#02040A] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ecossistema de Integrações</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            O Media Portal conecta-se nativamente com as principais tecnologias do mercado broadcast e TI, garantindo interoperabilidade total para o seu fluxo de trabalho.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center justify-center hover:border-[#00FF00] hover:bg-white/10 transition-all cursor-pointer h-24 group">
              <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors">{partner}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-[#050A1F] border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF00]/5 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Seja um Parceiro Tecnológico</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Desenvolva integrações com nossa API aberta e faça parte do ecossistema Media Portal.
              </p>
              <Button className="bg-[#00FF00] hover:bg-green-400 text-black font-bold px-8 py-3 h-auto text-lg rounded-full shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                  Aplicar para Parceria
              </Button>
            </div>
        </div>
      </div>
    </Layout>
  );
}
