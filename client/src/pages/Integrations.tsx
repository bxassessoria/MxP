import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const categories = [
  {
    title: "Edição & Pós-Produção",
    partners: [
      { name: "Adobe Premiere", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png", desc: "Painel nativo para busca e importação direta na timeline." },
      { name: "Avid Media Composer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Avid_Technology_logo.svg/1200px-Avid_Technology_logo.svg.png", desc: "Integração via Interplay e check-in/check-out de assets." },
      { name: "Final Cut Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Final_Cut_Pro_X_logo.png/1200px-Final_Cut_Pro_X_logo.png", desc: "Exportação de XML e workflow de proxy automatizado." }
    ]
  },
  {
    title: "Cloud & Storage",
    partners: [
      { name: "AWS S3", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png", desc: "Armazenamento escalável com tiering automático (Glacier)." },
      { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png", desc: "Processamento de IA e armazenamento nearline." },
      { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png", desc: "Integração com serviços cognitivos e AD." }
    ]
  },
  {
    title: "Transcodificação & IA",
    partners: [
      { name: "Telestream Vantage", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Telestream_Logo.png/220px-Telestream_Logo.png", desc: "Orquestração de workflows complexos de mídia." },
      { name: "Harmonic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Harmonic_Inc_Logo.svg/1200px-Harmonic_Inc_Logo.svg.png", desc: "Playout e encoding de alta densidade." },
      { name: "Elemental", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png", desc: "Processamento de vídeo elástico na nuvem." }
    ]
  }
];

export default function Integrations() {
  return (
    <Layout>
      {/* 1. HERO SECTION PADRONIZADA */}
      <section className="relative min-h-[60vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <img 
               src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
               alt="Background Integrações" 
               className="w-full h-full object-cover"
             />
        </div>
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="text-white space-y-6">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-2">
              Ecossistema Conectado
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Integrações Nativas
            </h1>
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Conecte o Media Portal às ferramentas que você já usa e potencialize seu fluxo de trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRAÇÕES GRID */}
      <section className="py-24 bg-white">
        <div className="container">
          {categories.map((category, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <h2 className="text-2xl font-bold text-[#263858] mb-10 border-l-4 border-[#EE6025] pl-4">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {category.partners.map((partner, pIdx) => (
                  <Dialog key={pIdx}>
                    <DialogTrigger asChild>
                      <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#EE6025] transition-all cursor-pointer flex flex-col items-center text-center h-full">
                        <div className="h-16 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100">
                          <img src={partner.logo} alt={partner.name} className="h-full w-auto object-contain" />
                        </div>
                        <h3 className="text-lg font-bold text-[#263858] mb-2">{partner.name}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{partner.desc}</p>
                        <div className="mt-6 text-[#EE6025] text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          <Plus size={12} /> Ver Detalhes
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <div className="flex justify-center mb-6">
                            <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain" />
                        </div>
                        <DialogTitle className="text-center text-2xl font-bold text-[#263858]">{partner.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-gray-600 text-center leading-relaxed">
                            {partner.desc}
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <h4 className="font-bold text-[#263858] text-sm mb-2 flex items-center gap-2">
                                <Check size={14} className="text-[#EE6025]" /> Recursos da Integração:
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1 pl-6 list-disc">
                                <li>API Restful bidirecional</li>
                                <li>Sincronização de metadados</li>
                                <li>Automação de triggers</li>
                            </ul>
                        </div>
                      </div>
                      <div className="flex justify-center pt-4">
                        <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white w-full">
                            Solicitar Documentação da API
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#F8F9FA] border-t border-gray-200">
        <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#263858] text-center mb-12">Dúvidas Frequentes</h2>
            <div className="space-y-4">
                {[
                    { q: "O Media Portal possui API aberta?", a: "Sim, oferecemos uma API RESTful completa para integração com qualquer sistema de terceiro." },
                    { q: "Vocês suportam autenticação via SSO?", a: "Sim, suportamos SAML 2.0, OAuth e integração direta com Active Directory/LDAP." },
                    { q: "É possível desenvolver plugins customizados?", a: "Sim, oferecemos suporte a plugins via Webhooks e SDKs." }
                ].map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-[#263858] mb-2 flex items-start gap-3">
                            <span className="text-[#EE6025] text-lg">?</span> {faq.q}
                        </h3>
                        <p className="text-gray-600 pl-6">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </Layout>
  );
}
