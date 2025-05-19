
import React from 'react';
import { ArrowRight, Globe, Settings, Users } from 'lucide-react';

const features = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Misión',
    description: 'Democratizar el acceso a la conectividad digital mediante soluciones tecnológicas sostenibles que impulsen la equidad, innovación y desarrollo urbano inteligente en Bolivia, comenzando desde La paz'
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Visión',
    description: 'Ser la plataforma líder de conectividad urbana pública en Latinoamérica, inspirando un ecosistema digital más justo, accesible y colaborativo desde las ciudades bolivianas hacia el mundo.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-business-500 font-semibold">¿QUIENES SOMOS?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Wayra Connect</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Ofrecemos una nueva forma de mantenerte conectado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-12 h-12 bg-business-100 rounded-lg flex items-center justify-center text-business-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-business-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">¿Listo para conectarte?</h3>
              <p className="mt-4 text-gray-600">
                Únase a cientos de clientes satisfecho.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-business-500 text-white font-medium rounded-lg hover:bg-business-600 transition"
              >
                Contáctenos Hoy <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
