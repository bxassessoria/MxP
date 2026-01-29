import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CaseDetail() {
  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="container">
          <Link href="/cases">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Cases
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-[#263858] mb-6">Detalhes do Case</h1>
          <p className="text-gray-600 text-lg">
            Em breve, detalhes completos sobre este case de sucesso.
          </p>
        </div>
      </section>
    </Layout>
  );
}
