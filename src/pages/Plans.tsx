
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import PlansHero from '@/components/PlansHero';
import FitnessPlans from '@/components/FitnessPlans';
import PlanComparison from '@/components/PlanComparison';
import PlansFAQ from '@/components/PlansFAQ';
import CTASection from '@/components/CTASection';

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MobileNavbar />
      <main className="flex-grow pt-16">
        <PlansHero />
        <FitnessPlans />
        <PlanComparison />
        <PlansFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Plans;
