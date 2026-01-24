import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Server, Cloud, Video, Database, MonitorPlay, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const integrations = {
  "Edição e Pós-Produção": [
    { name: "Adobe Premiere", icon: <Video />, desc: "Painel nativo dentro do Premiere Pro para busca, importação e exportação direta do MAM." },
    { name: "Avid Media Composer", icon: <Video />, desc: "Integração via Interplay e Web Services para fluxos de trabalho colaborativos." },
    { name: "DaVinci Resolve", icon: <Video />, desc: "Suporte a metadados e conformidade de cor integrada ao fluxo de ingest." },
  ],
  "Armazenamento e Cloud": [
    { name: "AWS S3 / Glacier", icon: <Cloud />, desc: "Arquivamento profundo e recuperação inteligente de ativos na nuvem da Amazon." },
    { name: "Google Cloud Storage", icon: <Cloud />, desc: "Utilize a infraestrutura do Google para escalar seu armazenamento sob demanda." },
    { name: "Dell EMC Isilon", icon: <Server />, desc: "Otimização para storages de alta performance em ambientes on-premises." },
  ],
  "Transcodificação e IA": [
    { name: "Telestream Vantage", icon: <MonitorPlay />, desc: "Automação de transcodificação complexa orquestrada pelo Media Portal." },
    { name: "Azure Video Indexer", icon: <Database />, desc: "Enriquecimento automático de metadados com reconhecimento facial e transcrição." },
    { name: "FFmpeg", icon: <MonitorPlay />, desc: "Motor de processamento flexível para geração de proxies e formatos web." },
  ]
};

export default function Integrations() {
  return (
    <Layout>
      <div className="bg-[#263858] text-white py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ecossistema Conectado</h1>
          <p className="text-xl text-gray-300">
            O Media Portal não trabalha sozinho. Nossa arquitetura aberta permite integração nativa com as principais tecnologias do mercado broadcast e corporativo.
          </p>
        </div>
      </div>

      <div className="container py-20">
        {Object.entries(integrations).map(([category, items], idx) => (
          <div key={idx} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-[#263858] mb-8 border-l-4 border-[#EE6025] pl-4">{category}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {items.map((item, itemIdx) => (
                <Dialog key={itemIdx}>
                  <DialogTrigger asChild>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg hover:border-[#EE6025] transition-all cursor-pointer group text-left h-full flex flex-col">
                      <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#263858] group-hover:bg-[#EE6025] group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#263858] mb-2">{item.name}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">{item.desc}</p>
                      <span className="text-[#EE6025] text-sm font-bold uppercase tracking-wider mt-auto">Saiba Mais +</span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[#263858] flex items-center gap-3">
                        {item.icon} {item.name}
                      </DialogTitle>
                      <DialogDescription className="text-base text-gray-600 pt-4 leading-relaxed">
                        {item.desc}
                        <br/><br/>
                        <strong>Benefícios da Integração:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                          <li>Fluxo de trabalho unificado</li>
                          <li>Redução de erros manuais</li>
                          <li>Sincronização de metadados bidirecional</li>
                        </ul>
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                        <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold">
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

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#263858]">Dúvidas sobre Integrações</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">O Media Portal possui API aberta?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Sim, oferecemos uma API RESTful completa e documentada para que sua equipe de desenvolvimento possa criar integrações customizadas com sistemas internos (ERP, CRM, CMS).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Funciona com storages legados?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Sim, nossa arquitetura agnóstica permite montar volumes de armazenamento em praticamente qualquer hardware que suporte protocolos padrão como SMB/CIFS, NFS ou S3.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Como é feita a integração com o Active Directory?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Suportamos integração nativa com LDAP e Microsoft Active Directory para autenticação centralizada (SSO) e gestão de grupos de permissão.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
