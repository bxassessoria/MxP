import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#263858] text-white py-24">
        <div className="container text-center max-w-4xl">
          <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-4 block">Sobre a Media Portal</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Inovação em Gestão de Mídia</h1>
          <p className="text-xl text-gray-300">
            Há mais de 16 anos transformando o mercado de broadcast com tecnologia de ponta e suporte especializado.
          </p>
        </div>
      </div>

      {/* Quem Somos */}
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#263858] mb-6">Nossa História</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Fundada em 2008, a Media Portal nasceu com a missão de simplificar fluxos de trabalho complexos em emissoras de televisão. Ao longo dos anos, expandimos nossa atuação para corporações, igrejas e instituições de ensino, sempre mantendo o foco em robustez e inovação.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Hoje, somos referência em sistemas MAM (Media Asset Management) no Brasil, oferecendo soluções que vão desde o arquivamento inteligente até a distribuição multiplatforma.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded border border-gray-100">
                <div className="text-4xl font-bold text-[#EE6025] mb-2">16+</div>
                <div className="text-sm text-gray-500 font-bold uppercase">Anos de Mercado</div>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-100">
                <div className="text-4xl font-bold text-[#EE6025] mb-2">500+</div>
                <div className="text-sm text-gray-500 font-bold uppercase">Projetos Entregues</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" alt="Equipe Media Portal" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>

      {/* Localização e Contato */}
      <div className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Informações */}
            <div>
              <h2 className="text-3xl font-bold text-[#263858] mb-8">Onde Estamos</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#EE6025]/10 p-3 rounded-full text-[#EE6025]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#263858] text-lg mb-1">Escritório Central</h3>
                    <p className="text-gray-600">Av. Paulista, 1234 - Bela Vista<br/>São Paulo - SP, 01310-100</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#EE6025]/10 p-3 rounded-full text-[#EE6025]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#263858] text-lg mb-1">Telefones</h3>
                    <p className="text-gray-600">Comercial: +55 (11) 3000-0000</p>
                    <p className="text-gray-600">Suporte: +55 (11) 3000-0001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#EE6025]/10 p-3 rounded-full text-[#EE6025]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#263858] text-lg mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@mediaportal.com.br</p>
                    <p className="text-gray-600">suporte@mediaportal.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#EE6025]/10 p-3 rounded-full text-[#EE6025]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#263858] text-lg mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 09h às 18h</p>
                    <p className="text-gray-600">Suporte 24/7 para contratos SLA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa (Placeholder) */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] shadow-inner relative group">
               {/* Simulação de Mapa */}
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Mapa de Localização" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-white px-6 py-3 rounded-full shadow-lg font-bold text-[#263858] flex items-center gap-2">
                   <MapPin size={20} className="text-[#EE6025]" /> Ver no Google Maps
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulário de Contato */}
      <div className="container py-20 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-[#263858] mb-2 text-center">Fale Conosco</h2>
          <p className="text-gray-600 text-center mb-10">Preencha o formulário abaixo e nossa equipe entrará em contato em até 24h.</p>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
              <input type="text" className="w-full border border-gray-300 rounded p-3 focus:border-[#EE6025] outline-none" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Empresa</label>
              <input type="text" className="w-full border border-gray-300 rounded p-3 focus:border-[#EE6025] outline-none" placeholder="Nome da empresa" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
              <input type="email" className="w-full border border-gray-300 rounded p-3 focus:border-[#EE6025] outline-none" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Telefone</label>
              <input type="tel" className="w-full border border-gray-300 rounded p-3 focus:border-[#EE6025] outline-none" placeholder="(11) 99999-9999" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Assunto</label>
              <select className="w-full border border-gray-300 rounded p-3 focus:border-[#EE6025] outline-none bg-white">
                <option>Selecione um assunto</option>
                <option>Comercial / Vendas</option>
                <option>Suporte Técnico</option>
                <option>Parcerias</option>
                <option>Trabalhe Conosco</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
              <textarea className="w-full border border-gray-300 rounded p-3 focus:border-[#EE6025] outline-none h-32" placeholder="Digite sua mensagem..."></textarea>
            </div>
            <div className="md:col-span-2">
              <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold py-4 text-lg rounded">
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ Institucional */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#263858]">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Vocês atendem fora do Brasil?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Sim, possuímos clientes na América Latina e Europa, com suporte remoto bilíngue e parceiros locais para implementação.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Qual o modelo de contratação?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Trabalhamos com modelos flexíveis: SaaS (Software as a Service) para soluções em nuvem e Licenciamento Perpétuo ou Subscrição Anual para projetos on-premises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Oferecem treinamento para a equipe?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Sim, todos os nossos projetos incluem treinamento operacional e técnico para garantir que sua equipe extraia o máximo da plataforma Media Portal.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
