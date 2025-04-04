
import React from 'react';
import PlanCard from './PlanCard';

const FitnessPlans = () => {
  const plans = [
    {
      id: "basic",
      title: "Basic Plan",
      price: 29,
      period: "month",
      description: "Perfect for beginners who want to start their fitness journey",
      features: [
        "1 personalized workout plan",
        "Basic nutrition guidelines",
        "Weekly check-ins",
        "Email support"
      ],
      popular: false
    },
    {
      id: "premium",
      title: "Premium Plan",
      price: 79,
      period: "month",
      description: "Our most popular plan for serious results",
      features: [
        "3 personalized workout plans",
        "Detailed nutrition plan",
        "Bi-weekly video check-ins",
        "Priority email & chat support",
        "Progress tracking tools",
        "Access to workout library"
      ],
      popular: true
    },
    {
      id: "elite",
      title: "Elite Plan",
      price: 149,
      period: "month",
      description: "Maximum support for ambitious fitness goals",
      features: [
        "Fully customized workout plans",
        "Advanced nutrition planning",
        "Weekly 1-on-1 video sessions",
        "24/7 priority support",
        "Advanced progress analytics",
        "Full workout library access",
        "Monthly program adjustments"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16" id="plans">
      <div className="mobile-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Fitness Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your goals and lifestyle. 
            Each plan includes personalized support to help you succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold mb-2">Not sure which plan is right for you?</h3>
          <p className="text-gray-700 mb-4">
            Schedule a free consultation call to discuss your goals and get personalized recommendations.
          </p>
          <button className="text-fitness-primary font-medium hover:underline">
            Book a free consultation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FitnessPlans;
