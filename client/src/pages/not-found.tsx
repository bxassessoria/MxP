import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-24 w-24 text-[#EE6025]" />
          </div>
          <h1 className="text-4xl font-bold text-[#263858] mb-4">Página não encontrada</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link href="/">
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold text-lg px-8 py-6 h-auto rounded shadow-lg hover:shadow-xl transition-all">
              Voltar para Home
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
