import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Produto", href: "/products" },
    { label: "Integrações", href: "/partners" },
    { label: "Cases", href: "/cases" },
    { label: "Sobre", href: "/about" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[#050A1F]/90 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent py-4"}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2 group">
            <img src="/images/mediaportal_logo.webp" alt="Media Portal" className="h-10 md:h-12 w-auto brightness-200 contrast-200 group-hover:brightness-100 transition-all" />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a className={`text-sm font-bold tracking-widest uppercase transition-all hover:text-[#00FF00] hover:scale-105 ${
                  location === item.href ? "text-[#00FF00]" : "text-gray-300"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
             <Button className="bg-[#00FF00] hover:bg-green-400 text-black font-bold rounded-full px-6 shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:shadow-[0_0_25px_rgba(0,255,0,0.6)] transition-all">
              Entrar em contato
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050A1F] border-b border-white/10 shadow-xl">
          <div className="container py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a 
                  className="text-lg font-bold text-gray-300 hover:text-[#00FF00] block py-2 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact">
                <Button className="w-full bg-[#00FF00] hover:bg-green-400 text-black font-bold rounded-full py-6">
                  Entrar em contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
