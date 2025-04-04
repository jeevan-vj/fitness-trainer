
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import Hero from '@/components/Hero';
import TrainerProfile from '@/components/TrainerProfile';
import FitnessPlans from '@/components/FitnessPlans';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MobileNavbar />
      <main className="flex-grow">
        <Hero />
        <TrainerProfile />
        <FitnessPlans />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
