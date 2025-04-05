
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Personal Trainer"
  },
  {
    src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    alt: "Fitness Training Session"
  },
  {
    src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    alt: "Workout Results"
  }
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const isMobile = useIsMobile();
  
  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="pt-16 pb-10 md:py-24 relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-fitness-primary/10 via-white to-fitness-secondary/5 z-0 animate-pulse-subtle" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-fitness-secondary/10 blur-3xl" />
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-fitness-primary/10 blur-3xl" />
      
      <div className="mobile-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex-1 lg:pr-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="ml-2 text-sm font-medium">Trusted by 1,000+ clients</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
              Transform Your <span className="gradient-text">Body</span> With Expert Guidance
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              Professional fitness plans designed to help you achieve your goals, 
              whether you want to lose weight, build muscle, or improve your overall health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-fitness-primary hover:bg-fitness-primary/90 text-white px-6 py-6 rounded-xl shadow-lg shadow-fitness-primary/20">
                View Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-fitness-secondary text-fitness-secondary hover:bg-fitness-secondary/10 py-6 rounded-xl">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-bold"
                    style={{
                      transform: `translateX(${i * -4}px)`,
                      zIndex: 4 - i
                    }}
                  >
                    {['JD', 'AS', 'RM', 'KT'][i]}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm font-medium">
                Joined by <span className="text-fitness-primary font-semibold">250+</span> people this month
              </p>
            </div>
          </div>
          
          {/* Image Carousel Section */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
            <div className={cn(
              "relative w-full",
              isMobile ? "h-[400px]" : "h-[500px]"
            )}>
              <Carousel 
                className="w-full h-full" 
                opts={{
                  loop: true,
                  align: "center",
                }}
              >
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full w-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-fitness-dark/60 to-transparent z-10" />
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Floating info cards */}
                        {index === 0 && (
                          <>
                            <div className="absolute bottom-6 left-6 right-6 p-4 z-20">
                              <p className="text-white font-bold text-xl">John Fitness</p>
                              <p className="text-white/90">Certified Personal Trainer</p>
                            </div>
                            
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20 transform rotate-[-5deg] animate-float">
                              <p className="text-sm font-medium text-gray-600">Experience</p>
                              <p className="text-2xl font-bold text-fitness-dark">10+ Years</p>
                            </div>
                            
                            <div className="absolute top-4 -right-6 bg-white rounded-lg shadow-lg p-3 z-20 transform rotate-[5deg] animate-float">
                              <div className="flex items-center">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <span className="ml-1 font-bold">4.9</span>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {index === 1 && (
                          <div className="absolute top-4 -right-6 bg-white rounded-lg shadow-lg p-3 z-20 transform rotate-[5deg] animate-float">
                            <p className="font-bold text-sm text-fitness-primary">250+ <span className="text-gray-500 font-normal">Success Stories</span></p>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20 transform rotate-[-5deg] animate-float">
                            <p className="text-xs font-medium text-gray-600">Average Result</p>
                            <p className="text-2xl font-bold text-fitness-primary">15kg <span className="text-sm font-normal text-gray-500">in 3 months</span></p>
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {!isMobile && (
                  <>
                    <CarouselPrevious className="left-2 bg-white/80 backdrop-blur-sm" />
                    <CarouselNext className="right-2 bg-white/80 backdrop-blur-sm" />
                  </>
                )}
              </Carousel>
              
              {/* Image indicator dots for mobile */}
              {isMobile && (
                <div className="absolute -bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        activeImage === index 
                          ? "bg-fitness-primary w-4" 
                          : "bg-gray-300"
                      )}
                      onClick={() => setActiveImage(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
