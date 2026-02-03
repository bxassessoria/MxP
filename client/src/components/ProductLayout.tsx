import { ReactNode } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface ProductLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  icon?: ReactNode;
  features: string[];
  children: ReactNode;
}

export default function ProductLayout({
  title,
  subtitle,
  description,
  heroImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  icon,
  features,
  children
}: ProductLayoutProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#263858] via-[#263858]/90 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 pt-24 pb-12">
          {/* Botão de Voltar */}
          <Link href="/produtos">
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 mb-8 pl-0 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Produtos
            </Button>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white mb-8">
              {icon && <div className="text-[#EE6025]">{icon}</div>}
              <span className="text-sm font-bold tracking-wider uppercase">{subtitle}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white h-14 px-8 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                  Solicitar Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column: Features */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-[#263858] mb-6">Principais Recursos</h3>
                <ul className="space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#EE6025] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-[#263858] text-[#263858] hover:bg-[#263858] hover:text-white font-bold">
                      Falar com Consultor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Content */}
            <div className="lg:col-span-2 prose prose-lg prose-headings:text-[#263858] prose-p:text-gray-600 max-w-none">
              {children}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-[#263858] text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Pronto para transformar sua operação?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Nossa equipe de especialistas está pronta para desenhar a solução ideal para o seu fluxo de trabalho.
          </p>
          <Link href="/contact">
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold text-lg px-8 py-6 h-auto rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Agendar Reunião
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
