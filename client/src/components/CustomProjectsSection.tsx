import { Wrench, Network, Cpu, Settings } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CustomProjectsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-[#263858]/10 text-[#263858] border border-[#263858]/20 px-4 py-1 rounded-full font-bold tracking-wider text-xs uppercase">
              Soluções Sob Medida
            </div>
            <h2 className="text-4xl font-bold text-[#263858] leading-tight">
              Projetos Customizados com a sua <span className="text-[#EE6025]">Assinatura Operacional</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desenvolvemos projetos customizados potencializando a infraestrutura já existente, integrando o seu diferencial no Media Portal. O sistema terá a sua assinatura operacional, transformando rotinas repetitivas em tarefas automáticas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EE6025]/10 text-[#EE6025] flex items-center justify-center shrink-0">
                  <Network size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#263858] mb-1">Ampla Integração</h3>
                  <p className="text-sm text-gray-600">Grass Valley, Avid, Telestream, LTO, RDX e muito mais.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EE6025]/10 text-[#EE6025] flex items-center justify-center shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#263858] mb-1">On-Premises & Cloud</h3>
                  <p className="text-sm text-gray-600">Projetos em data center in-house ou 100% na nuvem.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EE6025]/10 text-[#EE6025] flex items-center justify-center shrink-0">
                  <Settings size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#263858] mb-1">Automação de Fluxos</h3>
                  <p className="text-sm text-gray-600">Captação, edição, exibição e arquivamento sistematizados.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EE6025]/10 text-[#EE6025] flex items-center justify-center shrink-0">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#263858] mb-1">Intercâmbio Gerenciado</h3>
                  <p className="text-sm text-gray-600">Integração segura com sua infraestrutura de TI.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact">
                <Button className="bg-[#263858] hover:bg-[#1a2840] text-white h-12 px-8 rounded-lg font-bold shadow-lg transition-all">
                  Falar com Consultor
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#EE6025]/20 to-[#263858]/20 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#263858] mb-6 border-b pb-4">Capacidade de Integração</h3>
              <ul className="space-y-4">
                {[
                  "Servidores de vídeo (Grass Valley, Seachange, Omneon, ORAD)",
                  "Sistemas de Edição (Avid, Adobe Premiere, DaVinci)",
                  "Transcodificação (Telestream, Harmonic, MainConcept)",
                  "Arquivamento (LTO, RDX, ODA)",
                  "Sistemas de Playout e Exibição",
                  "Infraestrutura de TI e Redes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#EE6025]"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-[#263858] italic">
                  "Caso você tenha algum sistema em produção e deseja integrá-lo com a infraestrutura de TI... converse conosco!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
