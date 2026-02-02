import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Tenta conectar na API PHP
      const res = await fetch("/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      // Fallback para teste local (se a API não existir/404)
      if (res.status === 404) {
         if (password === "admin") {
            localStorage.setItem("adminToken", "mock_token");
            setLocation("/admin/dashboard");
            return;
         }
      }

      const data = await res.json();
      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        setLocation("/admin/dashboard");
      } else {
        setError("Senha incorreta");
      }
    } catch (err) {
      // Em ambiente local sem PHP, permite login mockado
      if (password === "admin") {
        localStorage.setItem("adminToken", "mock_token");
        setLocation("/admin/dashboard");
      } else {
        setError("Erro de conexão ou senha incorreta");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">Entrar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
