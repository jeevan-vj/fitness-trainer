
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-fitness-primary/20 via-white to-fitness-secondary/10 -z-10" />
      
      <div className="mobile-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="gradient-text">Fitness Journey</span>?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied clients who have transformed their bodies 
            and lives with our personalized fitness plans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-fitness-primary hover:bg-fitness-primary/90 text-white px-8 py-6">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-fitness-secondary text-fitness-secondary hover:bg-fitness-secondary/10 py-6">
              Book a Consultation
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            No credit card required. Start with a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
