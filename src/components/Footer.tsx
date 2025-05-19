
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-business-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </span>
              <span className="text-xl font-bold text-white">Wayra Connect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando empresas a través de soluciones innovadoras y excelencia estratégica.
            </p>
            <div className="flex space-x-4">
              {['#', '#', '#', '#'].map((link, index) => (
                <a 
                  key={index}
                  href={link}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-business-500 transition"
                >
                  <span className="text-white text-xs">{index + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {['Sobre Nosotros', 'Nuestro Equipo', 'Carreras', 'Noticias'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {['Consultoría Estratégica', 'Operaciones Empresariales', 'Transformación Digital', 'Investigación de Mercado'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              {['Contáctenos', 'Preguntas Frecuentes', 'Recursos', 'Política de Privacidad'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Wayra Connect. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-500 text-sm hover:text-white transition">Términos</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-white transition">Privacidad</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-white transition">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
