import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, product: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (error) {
      console.log("Envio simulado (API offline)");
    }

    setSubmitted(true);
    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = `Olá, gostaria de saber mais sobre as soluções da Mídia Portal.`;
    window.open(`https://wa.me/5511943896879?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center bg-[#263858] text-white py-20">
          <div className="container text-center">
            <div className="w-24 h-24 bg-[#EE6025] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle size={48} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Mensagem Enviada!</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Obrigado pelo contato. Nossa equipe retornará o mais breve possível.
            </p>
            <Button 
              onClick={() => setSubmitted(false)} 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-[#263858]"
            >
              Enviar nova mensagem
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative py-20 bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-[#263858]/90 to-[#263858]"></div>
        </div>
        
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Fale Conosco</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para entender seu desafio e apresentar a melhor solução para o seu fluxo de trabalho.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#263858]">Canais de Atendimento</h2>
                <p className="text-gray-600">
                  Escolha a forma mais conveniente para falar com nosso time comercial ou suporte técnico.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-l-4 border-l-[#EE6025] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-[#EE6025]/10 p-3 rounded-full text-[#EE6025]">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#263858] mb-1">WhatsApp Comercial</h3>
                      <p className="text-gray-600 mb-4">Atendimento rápido para dúvidas e orçamentos.</p>
                      <Button onClick={openWhatsApp} className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold">
                        <MessageCircle className="mr-2 h-5 w-5" /> Iniciar Conversa
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-[#263858]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#263858]">E-mail</h3>
                      <p className="text-gray-600">contato@mediaportal.com.br</p>
                      <p className="text-gray-600">comercial@mediaportal.com.br</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-[#263858]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#263858]">Endereço</h3>
                      <p className="text-gray-600">Praça Dom José Gaspar nº 30 – 20º andar</p>
                      <p className="text-gray-600">República – São Paulo/SP</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#263858] mb-6">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nome Completo</Label>
                    <Input name="name" onChange={handleChange} required placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label>Empresa</Label>
                    <Input name="company" onChange={handleChange} placeholder="Sua empresa" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>E-mail</Label>
                    <Input name="email" type="email" onChange={handleChange} required placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Telefone / WhatsApp</Label>
                    <Input name="phone" onChange={handleChange} required placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Interesse em qual solução?</Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um produto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mam">MAM (Media Asset Management)</SelectItem>
                      <SelectItem value="pam">PAM (Production Asset Management)</SelectItem>
                      <SelectItem value="dam">DAM (Digital Asset Management)</SelectItem>
                      <SelectItem value="cloudfly">CloudFly (Transferência)</SelectItem>
                      <SelectItem value="ingest">Ingest Automatizado</SelectItem>
                      <SelectItem value="exibicao">Sistemas de Exibição</SelectItem>
                      <SelectItem value="outros">Outros Assuntos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Mensagem</Label>
                  <Textarea 
                    name="message" 
                    onChange={handleChange} 
                    required 
                    placeholder="Conte um pouco sobre sua necessidade..." 
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-[#EE6025] hover:bg-[#d94e15] font-bold py-6 text-lg">
                  {loading ? "Enviando..." : "Enviar Solicitação"} <Send className="ml-2 h-5 w-5" />
                </Button>
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
