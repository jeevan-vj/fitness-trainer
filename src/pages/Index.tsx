
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import Hero from '@/components/Hero';
import TrainerProfile from '@/components/TrainerProfile';
import FitnessPlans from '@/components/FitnessPlans';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { GallerySection } from '@/components/GallerySection';
import { RevealAnimation } from '@/hooks/use-scroll-reveal';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MobileNavbar />
      <main className="flex-grow">
        <Hero />
        
        <RevealAnimation>
          <TrainerProfile />
        </RevealAnimation>
        
        <RevealAnimation variant="fade-up" delay={100}>
          <GallerySection />
        </RevealAnimation>
        
        <RevealAnimation variant="fade-up" delay={200}>
          <FitnessPlans />
        </RevealAnimation>
        
        <Testimonials />
        
        <RevealAnimation variant="zoom-in" delay={400}>
          <CTASection />
        </RevealAnimation>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
