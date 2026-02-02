import Layout from "@/components/Layout";
import { CheckCircle2, MapPin, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <Layout>
      {/* HERO SECTION - PADRÃO HOME */}
      <section className="relative min-h-[90vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
               alt="Background Sobre" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white">
              Nossa História
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Sobre a <span className="text-[#EE6025]">Media Portal</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              Transformando a gestão de conteúdo digital e monetização de acervos desde 2008.
            </p>
            <div className="h-1 w-20 bg-[#EE6025] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumb / Back Button */}
      <div className="container py-8">
        <Link href="/">
            <Button variant="ghost" className="text-gray-500 hover:text-[#EE6025] pl-0">
                <ArrowLeft size={16} className="mr-2" /> Voltar para Home
            </Button>
        </Link>
      </div>

      {/* A Empresa */}
      <div className="container pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h2 className="text-3xl font-bold text-[#263858] mb-6 border-l-4 border-[#EE6025] pl-4">A Empresa</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                    <p>
                        A Media Portal é uma <strong>empresa brasileira</strong> que atua no desenvolvimento de soluções para <strong>arquivamento e gestão de grandes acervos digitais</strong>.
                    </p>
                    <p>
                        Fundada em 2008 a empresa tem trabalhado em <strong>projetos pioneiros e inovadores</strong>, e em mercados distintos, onde pôde ao longo desses <strong>10 anos</strong>, demonstrar sua versatilidade e <strong>alto grau de tecnologia integrada</strong> em suas soluções.
                    </p>
                    <p>
                        Entre <strong>nossas especialidades</strong> destacamos a recente integração de nosso sistema com os abundantes recursos que a <strong>computação em nuvem</strong> oferece, tais como, elasticidade, resiliência e escalabilidade. Também mantemos a prestação de serviço e elaboração de <strong>projetos dedicados e customizados</strong>, oferecendo serviços ainda mais personalizados aos nossos clientes.
                    </p>
                    <p>
                        Contamos com uma <strong>equipe qualificada</strong>, suporte e pós venda ativos, além de uma <strong>rede de parceiros</strong> que garantem a <strong>eficiência e qualidade técnica</strong> dos nossos projetos.
                    </p>
                </div>
            </div>
            <div className="h-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden relative shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Office" className="absolute inset-0 w-full h-full object-cover" />
            </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-[#EE6025]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#EE6025] transition-colors">
                    <CheckCircle2 className="text-[#EE6025] group-hover:text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#263858] mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                    A Media Portal atua no mercado com foco em estruturar, facilitar e otimizar a gestão de conteúdo digital e monetização de acervos.
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-[#263858]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#263858] transition-colors">
                    <CheckCircle2 className="text-[#263858] group-hover:text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#263858] mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                    Ser a empresa referência em transformação digital de fluxos de trabalho e acervos, que liberta nossos clientes para a exploração do seu máximo potencial.
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-[#EE6025]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#EE6025] transition-colors">
                    <CheckCircle2 className="text-[#EE6025] group-hover:text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#263858] mb-4">Valores</h3>
                <ul className="space-y-3">
                    {["Espírito de Equipe", "Comprometimento", "Respeito", "Inovação", "Flexibilidade"].map((val, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-[#EE6025] rounded-full mr-3"></span> {val}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Onde Estamos & Contato */}
        <div className="bg-[#263858] text-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-16 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-10 border-b border-white/10 pb-6 text-white">Onde Estamos</h2>
                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#EE6025] transition-colors">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-xl mb-2">Sede São Paulo</p>
                                <p className="text-gray-300 text-lg">Praça Dom José Gaspar nº 30 – 20º andar</p>
                                <p className="text-gray-300 text-lg">República – São Paulo/SP</p>
                                <p className="text-gray-300 text-lg">CEP 01047-010 – Brasil</p>
                            </div>
                        </div>
                        
                        <div className="border-t border-white/10 my-2"></div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#EE6025] transition-colors">
                                    <Mail className="text-white" size={24} />
                                </div>
                                <div className="text-gray-300 text-lg">
                                    <p>comercial@mediaportal.com.br</p>
                                    <p>contato@mediaportal.com.br</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#EE6025] transition-colors">
                                    <Phone className="text-white" size={24} />
                                </div>
                                <div className="text-gray-300 text-lg">
                                    <p>+55 (11) 9 4389 6879</p>
                                    <p>+55 (11) 3063 4411</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mapa Estático (Placeholder) */}
                <div className="bg-gray-200 relative min-h-[400px] md:min-h-full">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.357283577544!2d-46.64245648447596!3d-23.54562236708369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58510705b767%3A0x6080351025550269!2sPra%C3%A7a%20Dom%20Jos%C3%A9%20Gaspar%2C%2030%20-%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001047-010!5e0!3m2!1sen!2sbr!4v1642186543210!5m2!1sen!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy"
                        className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
