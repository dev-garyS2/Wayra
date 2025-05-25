
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                 Conectividad que viaja como el viento
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Proporcionamos una plataforma de conectividad urbana inteligente que 
                integre tecnologías de telecomunicaciones y análisis de datos para mejorar el acceso.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple hover:bg-darkblue text-white h-12 px-6 text-base">
                Comenzar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-business-200 text-business-700 hover:bg-business-50 h-12 px-6 text-base">
                Más Información
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] lg:aspect-[16/10] bg-gradient-to-br from-business-500 to-blue-400 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/Wayra/tu-imagen.jpg" 
                alt="Descripción de la imagen"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
