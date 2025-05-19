
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 w-full bg-white/90 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-md overflow-hidden flex items-center justify-center">
            <img src="/wayra-logo.png" alt="Wayra Connect Logo" className="w-full h-full object-contain" />
          </span>
          <span className="text-xl font-bold text-gray-900">Wayra Connect</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#features" className="text-gray-700 hover:text-business-600 font-medium">Características</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-business-600 font-medium">Nosotros</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-business-600 font-medium">Contacto</a></li>
          </ul>
          <Button className="bg-business-500 hover:bg-business-600 text-white">
            Comenzar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t z-50 animate-fade-in">
          <ul className="flex flex-col p-4 space-y-4">
            <li><a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>Características</a></li>
            <li><a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
          </ul>
          <div className="p-4">
            <Button className="w-full bg-business-500 hover:bg-business-600 text-white" onClick={() => setIsMenuOpen(false)}>Comenzar</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
