
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ConsultationFormTrigger } from '@/components/ConsultationForm';

const PlansHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center"></div>
      <div className="mobile-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find the Perfect <span className="gradient-text">Fitness Plan</span> for You
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Customized training plans designed to help you achieve your fitness goals, 
            whether you're just starting out or looking to take your fitness to the next level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-fitness-primary hover:bg-fitness-primary/90 text-white px-6 py-6 rounded-lg flex items-center gap-2 text-base">
              Get Started Today
              <ArrowRight size={18} />
            </Button>
            <ConsultationFormTrigger>
              <Button variant="outline" className="border-fitness-primary text-fitness-primary hover:bg-fitness-primary/10 px-6 py-6 rounded-lg text-base">
                Book a Free Consultation
              </Button>
            </ConsultationFormTrigger>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { count: '500+', label: 'Happy Clients' },
              { count: '15+', label: 'Years Experience' },
              { count: '98%', label: 'Success Rate' },
              { count: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-fitness-primary">{stat.count}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansHero;
