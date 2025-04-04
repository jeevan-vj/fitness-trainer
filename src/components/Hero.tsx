
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-20 pb-12 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-fitness-primary/10 to-fitness-secondary/5 rounded-bl-full -z-10" />
      
      <div className="mobile-container">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-1 lg:pr-12 mb-10 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="ml-2 text-sm font-medium">Trusted by 1,000+ clients</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Transform Your Body With <span className="gradient-text">Expert Guidance</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Professional fitness plans designed to help you achieve your goals, 
              whether you want to lose weight, build muscle, or improve your overall health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-fitness-primary hover:bg-fitness-primary/90 text-white px-6 py-6">
                View Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-fitness-secondary text-fitness-secondary hover:bg-fitness-secondary/10 py-6">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <p className="ml-4 text-sm font-medium">
                Joined by <span className="text-fitness-primary">250+</span> people this month
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              {/* Image container with gradient overlay */}
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-t from-fitness-dark/60 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Personal Trainer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <p className="text-white font-bold text-xl">John Fitness</p>
                  <p className="text-white/90">Certified Personal Trainer</p>
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20">
                <p className="text-sm font-medium text-gray-600">Experience</p>
                <p className="text-2xl font-bold text-fitness-dark">10+ Years</p>
              </div>
              
              {/* Rating card */}
              <div className="absolute top-4 -right-6 bg-white rounded-lg shadow-lg p-3 z-20">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-bold">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
