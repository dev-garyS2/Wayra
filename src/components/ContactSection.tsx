
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "¡Nos pondremos en contacto con usted lo antes posible!",
      duration: 5000,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-business-500 font-semibold">CONTÁCTENOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Contáctenos Hoy</h2>
          <p className="mt-4 text-gray-600 text-lg">
            ¿Tiene preguntas o está listo para comenzar? Póngase en contacto con nuestro equipo.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conectemos</h3>
              <p className="text-gray-600">
                Complete el formulario y nuestro equipo se pondrá en contacto con usted en 24 horas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 w-10 h-10 bg-business-100 rounded-lg flex items-center justify-center text-business-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Nuestra Ubicación</p>
                  <p className="text-gray-600">Avenida Negocios 123, Ciudad Empresarial, 90210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 w-10 h-10 bg-business-100 rounded-lg flex items-center justify-center text-business-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Envíenos un Email</p>
                  <p className="text-gray-600">info@negocio-ejemplo.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 w-10 h-10 bg-business-100 rounded-lg flex items-center justify-center text-business-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Llámenos</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Su Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-500 focus:border-business-500 outline-none transition"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Su Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-500 focus:border-business-500 outline-none transition"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Su Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-500 focus:border-business-500 outline-none transition"
                    placeholder="¿Cómo podemos ayudarle?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" className="w-full bg-business-500 hover:bg-business-600 text-white h-12">
                    Enviar Mensaje
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
