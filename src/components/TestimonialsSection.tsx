
import React from 'react';

const testimonials = [
  {
    content: "Working with this team has completely transformed how we approach our business operations. The results have been outstanding.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc."
  },
  {
    content: "Their strategic insights and dedicated support have been instrumental in our growth over the past year. Highly recommended!",
    author: "Michael Chen",
    role: "Operations Director, GrowthWave"
  },
  {
    content: "The tailored solutions they provided helped us increase efficiency by 40% and reduce operational costs significantly.",
    author: "Amanda Rodriguez",
    role: "CFO, Innovate Partners"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-business-500 font-semibold">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex flex-col"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-business-700 font-medium">Join over 500+ satisfied businesses</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-70">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 bg-gray-400 w-24 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
