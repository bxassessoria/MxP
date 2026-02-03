import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash, ArrowLeft } from "lucide-react";

export default function CasesList() {
  const [cases, setCases] = useState<any[]>([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const res = await fetch("/api/cases.php");
      if (res.ok) {
        const data = await res.json();
        setCases(data);
      } else {
        // Mock local
        setCases([]);
      }
    } catch (err) {
      console.error("Erro ao buscar cases", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este case?")) return;
    
    try {
      await fetch(`/api/cases.php?id=${id}`, { method: "DELETE" });
      fetchCases();
    } catch (err) {
      alert("Erro ao excluir (pode ser ambiente local)");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link href="/painel/dashboard">
                <Button variant="ghost" size="icon">
                    <ArrowLeft size={20} />
                </Button>
            </Link>
            <h1 className="text-3xl font-bold">Gerenciar Cases</h1>
          </div>
          <Link href="/painel/cases/new">
            <Button className="flex items-center gap-2">
              <Plus size={16} /> Novo Case
            </Button>
          </Link>
        </div>

        <div className="grid gap-4">
          {cases.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex justify-between items-center p-6">
                <div className="flex items-center gap-4">
                  {item.logo && <img src={item.logo} alt={item.client} className="w-12 h-12 object-contain bg-gray-100 rounded p-1" />}
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.client}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/painel/cases/edit/${item.id}`}>
                    <Button variant="ghost" size="icon">
                      <Edit size={18} />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="text-red-500" onClick={() => handleDelete(item.id)}>
                    <Trash size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {cases.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500 mb-4">Nenhum case cadastrado ainda.</p>
                <Link href="/painel/cases/new">
                    <Button variant="outline">Cadastrar primeiro case</Button>
                </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
