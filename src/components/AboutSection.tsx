
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
  <img
    src="/Wayra/about-image.jpg" 
    alt="Conectividad urbana inteligente"
    className="w-full h-full object-cover"
  />
</div>
            
          </div>

          <div className="space-y-6">
            <span className="text-business-500 font-semibold">SOBRE NOSOTROS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900"> Conectividad que viaja como el viento</h2>
            <p className="text-gray-600 text-lg">
              Wayra Connect es una solución tecnológica futurista y funcional que inicia en La Paz como proyecto piloto de conectividad urbana inteligente. Su objetivo es transformar espacios públicos clave en zonas Wi-Fi gratuitas, sostenibles y digitales, comenzando en zonas de alto flujo como plazas, universidades, estaciones de transporte y parques urbanos.
            </p>
            <ul className="space-y-3">
              {['Inclusión Digital', 'Tecnología Sostenible', 'Ciudades Inteligentes', 'Colaboración Multisectorial'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-5 w-5 rounded-full bg-business-100 flex items-center justify-center mr-2">
                    <span className="h-2 w-2 bg-business-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button className="bg-purple hover:bg-darkblue text-white">
                Conozca Más Sobre Nosotros
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
