import { useRoute, Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function CaseDetail() {
  const [, params] = useRoute("/cases/:slug");
  const slug = params?.slug;
  
  const [caseItem, setCaseItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const fetchCase = async () => {
      try {
        const res = await fetch("/api/cases.php");
        if (res.ok) {
          const data = await res.json();
          const found = data.find((c: any) => c.slug === slug);
          setCaseItem(found);
        }
      } catch (err) {
         console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchCase();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-32 text-center">Carregando...</div>
      </Layout>
    );
  }

  if (!caseItem) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#263858]">Case não encontrado</h1>
          <Link href="/cases">
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Cases
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-[#263858] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        {caseItem.coverImage && (
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
                style={{ backgroundImage: `url(${caseItem.coverImage})` }}
            ></div>
        )}
        
        <div className="container relative z-10">
          <Link href="/cases">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-8 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Cases
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            {caseItem.logo && (
                <img src={caseItem.logo} alt={caseItem.client} className="h-16 mb-6 bg-white/10 p-2 rounded" />
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseItem.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{caseItem.summary}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
           {caseItem.coverImage && (
               <img src={caseItem.coverImage} alt={caseItem.title} className="w-full rounded-2xl shadow-xl mb-12" />
           )}
           
           <div 
                className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[#263858] prose-a:text-[#EE6025] prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: caseItem.content.replace(/\n/g, '<br/>') }}
           />
        </div>
      </section>
    </Layout>
  );
}
