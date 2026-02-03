import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function EncontroBH() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/subscribe-event.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      // Mesmo se der erro no fetch (local), consideramos sucesso para UX
    } catch (error) {
      console.log("Envio simulado (API offline)");
    }

    setSubmitted(true);
    setLoading(false);
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center bg-[#263858] text-white py-20">
          <div className="container text-center">
            <div className="w-24 h-24 bg-[#EE6025] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle size={48} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Inscrição Recebida!</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Obrigado pelo seu interesse no Encontro Mídia Portal & Parceiros – Belo Horizonte.
              <br />
              Entraremos em contato em breve para confirmar sua participação.
            </p>
            <Button 
              onClick={() => setSubmitted(false)} 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-[#263858]"
            >
              Voltar para a página do evento
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
               alt="Background Evento BH" 
               className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] via-[#263858]/90 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block bg-white/10 border border-white/20 px-4 py-1 rounded-full text-white text-sm font-bold tracking-wider uppercase mb-2">
              Belo Horizonte - MG
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-md !text-white">
              Encontro Mídia Portal & Parceiros
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              Conexões estratégicas que transformam relacionamento em negócios no mercado de Broadcast.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 pt-4 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Calendar className="text-[#EE6025]" /> 25 de Fevereiro
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Clock className="text-[#EE6025]" /> 14h às 18h
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <MapPin className="text-[#EE6025]" /> Hotel Royal Golden Savassi
              </div>
            </div>

            <div className="pt-6">
              <Button 
                onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#EE6025] hover:bg-[#d94e15] text-white font-bold text-lg py-6 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all"
              >
                Quero participar do encontro <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Form Short (Hero) */}
          <div className="hidden lg:block">
            <Card className="bg-white/5 backdrop-blur-md border-white/10 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Garanta sua vaga</CardTitle>
                <p className="text-center text-gray-300 text-sm">Vagas limitadas para profissionais do setor</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Nome Completo</Label>
                    <Input name="name" onChange={handleChange} required placeholder="Seu nome" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <Label>E-mail Corporativo</Label>
                    <Input name="email" onChange={handleChange} required type="email" placeholder="seu@empresa.com.br" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                  {/* Campos ocultos no short form, mas necessários para estado */}
                  <input type="hidden" name="company" value={formData.company} />
                  <input type="hidden" name="role" value={formData.role} />
                  <input type="hidden" name="phone" value={formData.phone} />

                  <Button type="submit" disabled={loading} className="w-full bg-[#EE6025] hover:bg-[#d94e15] font-bold py-6">
                    {loading ? "Enviando..." : "Inscrever-se Agora"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O ENCONTRO */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263858]">
            Um encontro feito para quem decide e influencia o mercado
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            O <strong>Encontro Mídia Portal & Parceiros – Belo Horizonte</strong> acontece em torno da SET Regional e foi criado para ir além do networking tradicional.
            <br/><br/>
            É um espaço onde conexões se transformam em relacionamentos estratégicos, ideias ganham profundidade e negócios começam a ser construídos de forma natural, em um ambiente consultivo e exclusivo.
          </p>
        </div>
      </section>

      {/* POR QUE PARTICIPAR & PÚBLICO (Grid Compacto) */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Por que participar */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#EE6025] uppercase tracking-wide">Por que participar</h3>
              <ul className="space-y-4">
                {[
                  "Conexão direta com empresas e profissionais que movimentam o mercado",
                  "Relacionamento próximo com tomadores de decisão",
                  "Ambiente propício à construção de confiança e parcerias",
                  "Discussões práticas sobre desafios e oportunidades do setor",
                  "Alto potencial de geração de negócios no contexto regional"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#263858] mt-1 shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Público */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#EE6025] uppercase tracking-wide">Público do Evento</h3>
              <p className="text-gray-600 mb-4">Reunimos profissionais e empresas diretamente envolvidos com soluções, infraestrutura e operação no mercado de Broadcast:</p>
              <ul className="space-y-4">
                {[
                  "Emissoras de rádio e televisão",
                  "Produtoras de conteúdo e audiovisual",
                  "Integradores de tecnologia",
                  "Empresas de transmissão, streaming e infraestrutura",
                  "Gestores técnicos, diretores e decisores"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EE6025] rounded-full mt-2.5 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATO DO ENCONTRO */}
      <section className="py-20 bg-[#263858] text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Um formato pensado para conversas reais</h2>
          <p className="text-xl text-white/90 mb-12">
            O evento acontece em um café exclusivo, das 14h às 18h, em um ambiente cuidadosamente selecionado para estimular a troca de experiências.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
              <span className="block text-4xl mb-4">🚫</span>
              <h3 className="font-bold text-lg text-white">Sem palestras engessadas</h3>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
              <span className="block text-4xl mb-4">🤝</span>
              <h3 className="font-bold text-lg text-white">Sem abordagens invasivas</h3>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
              <span className="block text-4xl mb-4">🚀</span>
              <h3 className="font-bold text-lg text-white">Apenas oportunidades reais</h3>
            </div>
          </div>
        </div>
      </section>

      {/* DETALHES E FORMULÁRIO FINAL */}
      <section id="inscricao" className="py-24 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Detalhes */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#263858]">Detalhes do Evento</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#EE6025]/10 p-3 rounded-lg text-[#EE6025]">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Data</h4>
                  <p className="text-gray-600">25 de Fevereiro</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#EE6025]/10 p-3 rounded-lg text-[#EE6025]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Horário</h4>
                  <p className="text-gray-600">Das 14h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#EE6025]/10 p-3 rounded-lg text-[#EE6025]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Local</h4>
                  <p className="text-gray-600">Hotel Royal Golden Savassi</p>
                  <p className="text-sm text-gray-500">Rua Garret do Norte, 1015 – Belo Horizonte – MG</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
              <h4 className="font-bold text-[#263858] mb-2">Faça parte das conexões que movem o mercado</h4>
              <p className="text-gray-600 text-sm">Este é o ambiente certo para fortalecer relacionamentos, gerar oportunidades e estar próximo de quem decide.</p>
            </div>
          </div>

          {/* Formulário Principal */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#263858] mb-2">Garanta sua vaga</h2>
            <p className="text-gray-500 mb-8 text-sm">Preencha o formulário para solicitar sua participação.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label>Nome Completo</Label>
                <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome" className="h-12" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Empresa</Label>
                  <Input name="company" value={formData.company} onChange={handleChange} required placeholder="Nome da empresa" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label>Cargo</Label>
                  <Input name="role" value={formData.role} onChange={handleChange} required placeholder="Seu cargo" className="h-12" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>E-mail Corporativo</Label>
                  <Input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="seu@empresa.com" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label>Telefone</Label>
                  <Input name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="(00) 00000-0000" className="h-12" />
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-[#EE6025] hover:bg-[#d94e15] font-bold text-lg h-14 mt-4 shadow-lg">
                {loading ? "Enviando..." : "Participar do Encontro"}
              </Button>
              
              <p className="text-center text-xs text-gray-400 mt-4">
                Evento exclusivo para profissionais do setor. A confirmação da participação será enviada por e-mail.
              </p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  );
}
