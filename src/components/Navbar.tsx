import React, { useState, useEffect } from 'react';
import { Flower2, Menu, X, Sparkles } from 'lucide-react'; // Trocamos tesoura por Flor e Brilhos
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-md border-b border-emerald-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* LOGO FB HUB */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-200">
            <Flower2 size={24} />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold tracking-tight text-stone-900 leading-none">FB HUB</h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-600 font-bold">Rosi Cangueiro</p>
          </div>
        </div>

        {/* Desktop Nav - Cores Emerald */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-emerald-200 uppercase tracking-wide flex items-center gap-2"
          >
            <Sparkles size={16} />
            Agendar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-stone-800 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white text-center py-4 rounded-xl font-bold mt-2 shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;