import Layout from "@/components/Layout";
import { MapPin, Phone, Mail } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#263858] text-white py-24">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre nós</h1>
        </div>
      </div>

      {/* Missão, Visão, Valores */}
      <div className="container py-20">
        <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-[#EE6025] mb-4">Missão</h2>
                <p className="text-gray-600 leading-relaxed">
                    A Media Portal atua no mercado com foco em estruturar, facilitar e otimizar a gestão de conteúdo digital e monetização de acervos.
                </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-[#EE6025] mb-4">Visão</h2>
                <p className="text-gray-600 leading-relaxed">
                    Ser a empresa referência em transformação digital de fluxos de trabalho e acervos, que liberta nossos clientes para a exploração do seu máximo potencial.
                </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-[#EE6025] mb-4">Valores</h2>
                <ul className="text-gray-600 space-y-2">
                    <li>Espírito de Equipe</li>
                    <li>Comprometimento</li>
                    <li>Respeito</li>
                    <li>Inovação</li>
                    <li>Flexibilidade</li>
                </ul>
            </div>
        </div>
      </div>

      {/* A Empresa */}
      <div className="bg-gray-50 py-20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#263858] mb-8 text-center">A empresa</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
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
      </div>

      {/* Onde Estamos & Contato */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-16">
            <div>
                <h2 className="text-2xl font-bold text-[#263858] mb-6">Onde estamos</h2>
                <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-[#EE6025] shrink-0 mt-1" />
                    <p className="text-gray-600">
                        Praça Dom José Gaspar nº 30 – 20º andar<br/>
                        República – São Paulo/SP<br/>
                        CEP 01047-010 – Brasil
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-[#263858] mb-6">Contato</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Mail className="text-[#EE6025] shrink-0 mt-1" />
                        <div>
                            <p className="text-gray-600">comercial@mediaportal.com.br</p>
                            <p className="text-gray-600">contato@mediaportal.com.br</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-[#EE6025] shrink-0 mt-1" />
                        <div>
                            <p className="text-gray-600">+55 (11) 9 4389 6879</p>
                            <p className="text-gray-600">+55 (11) 3063 4411</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
