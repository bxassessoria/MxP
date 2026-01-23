import Layout from "@/components/Layout";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-[#02040A] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Sobre a Media Portal</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Há mais de 16 anos desenvolvendo soluções inovadoras para gestão de ativos digitais, transformando a maneira como o mercado de broadcast lida com seu conteúdo.
          </p>
        </div>
      </div>

      {/* Mission Vision Values */}
      <section className="py-20 bg-[#050A1F]">
        <div className="container grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Missão", 
              icon: <Target className="text-[#00FF00]" size={40} />,
              text: "Prover soluções tecnológicas de excelência para gestão de mídia, garantindo eficiência, segurança e inovação para nossos clientes." 
            },
            { 
              title: "Visão", 
              icon: <Eye className="text-[#00FF00]" size={40} />,
              text: "Ser referência global em Media Asset Management, reconhecida pela qualidade, robustez e capacidade de adaptação às novas tecnologias." 
            },
            { 
              title: "Valores", 
              icon: <Heart className="text-[#00FF00]" size={40} />,
              text: "Inovação constante, compromisso com o cliente, ética, transparência e valorização do capital humano." 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <div className="bg-[#00FF00]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* History/Timeline Section could go here */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Nossa História</h2>
              <p className="text-gray-400 mb-6 text-lg">
                Fundada com o objetivo de resolver os desafios complexos de armazenamento e recuperação de mídia, a Media Portal cresceu para se tornar uma parceira estratégica das maiores emissoras do país.
              </p>
              <p className="text-gray-400 mb-6">
                Nossa trajetória é marcada pelo desenvolvimento contínuo de nossa plataforma proprietária, sempre à frente das tendências de mercado como Cloud Computing e Inteligência Artificial.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 p-4 rounded-lg border-l-4 border-[#00FF00]">
                  <div className="text-2xl font-bold text-white">16+</div>
                  <div className="text-sm text-gray-500">Anos de Experiência</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border-l-4 border-[#00FF00]">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-500">Projetos Entregues</div>
                </div>
              </div>
            </div>
            <div className="relative">
               <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" alt="Office Culture" className="rounded-2xl shadow-2xl border border-white/10" />
               <div className="absolute -bottom-6 -right-6 bg-[#00FF00] text-black p-6 rounded-xl font-bold text-xl shadow-lg max-w-xs">
                 "Tecnologia feita por quem entende de mídia."
               </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
