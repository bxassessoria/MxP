import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    console.log("Formulário enviado:", formData);
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
               alt="Background Contato" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white">
              Fale Conosco
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Entre em <span className="text-[#EE6025]">Contato</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Estamos prontos para entender seu projeto e oferecer a melhor solução para sua gestão de mídia.
            </p>
          </div>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-[#263858] mb-8 border-l-4 border-[#EE6025] pl-4">
                Canais de Atendimento
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Nossa equipe de especialistas está à disposição para tirar dúvidas, agendar demonstrações e discutir como a Media Portal pode transformar sua operação.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-[#EE6025]/10 p-4 rounded-full">
                    <MapPin className="text-[#EE6025] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#263858] mb-2">Sede São Paulo</h3>
                    <p className="text-gray-600">Praça Dom José Gaspar nº 30 – 20º andar</p>
                    <p className="text-gray-600">República – São Paulo/SP</p>
                    <p className="text-gray-600">CEP 01047-010 – Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#EE6025]/10 p-4 rounded-full">
                    <Mail className="text-[#EE6025] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#263858] mb-2">E-mail</h3>
                    <p className="text-gray-600">comercial@mediaportal.com.br</p>
                    <p className="text-gray-600">contato@mediaportal.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#EE6025]/10 p-4 rounded-full">
                    <Phone className="text-[#EE6025] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#263858] mb-2">Telefone</h3>
                    <p className="text-gray-600">+55 (11) 9 4389 6879</p>
                    <p className="text-gray-600">+55 (11) 3063 4411</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-gray-50 p-10 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#263858] mb-6">Envie uma mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EE6025] focus:ring-2 focus:ring-[#EE6025]/20 outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EE6025] focus:ring-2 focus:ring-[#EE6025]/20 outline-none transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EE6025] focus:ring-2 focus:ring-[#EE6025]/20 outline-none transition-all"
                      placeholder="voce@empresa.com.br"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EE6025] focus:ring-2 focus:ring-[#EE6025]/20 outline-none transition-all"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Como podemos ajudar?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EE6025] focus:ring-2 focus:ring-[#EE6025]/20 outline-none transition-all resize-none"
                    placeholder="Conte um pouco sobre sua necessidade..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#EE6025] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#d94e15] transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Enviar Mensagem <Send size={20} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* MAPA FULL WIDTH */}
      <section className="h-[400px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.357283577544!2d-46.64245648447596!3d-23.54562236708369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58510705b767%3A0x6080351025550269!2sPra%C3%A7a%20Dom%20Jos%C3%A9%20Gaspar%2C%2030%20-%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001047-010!5e0!3m2!1sen!2sbr!4v1642186543210!5m2!1sen!2sbr" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>
    </Layout>
  );
}
