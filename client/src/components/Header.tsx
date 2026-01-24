import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "BLOG", path: "/blog" },
    { name: "PRODUTO", path: "/produtos" },
    { name: "INTEGRAÇÕES", path: "/integracoes" },
    { name: "CASES", path: "/cases" },
    { name: "SOBRE", path: "/sobre" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <div className="cursor-pointer flex items-center">
            {/* Logo atualizado - usando a versão JPG nova */}
            <img 
              src="/images/logo_new.jpg" 
              alt="Media Portal" 
              className="h-12 md:h-14 object-contain mix-blend-multiply" 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <span 
                className={`text-sm font-bold cursor-pointer transition-colors uppercase tracking-wide ${
                  location === link.path 
                    ? "text-[#EE6025]" 
                    : "text-[#263858] hover:text-[#EE6025]"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Button 
            className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold px-6 rounded shadow-lg shadow-[#EE6025]/20 transition-all hover:scale-105"
          >
            Entrar em contato
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#263858]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <span 
                className="block py-2 text-[#263858] font-bold hover:text-[#EE6025] text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold">
            Entrar em contato
          </Button>
        </div>
      )}
    </header>
  );
}
