
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const PlanComparison = () => {
  const features = [
    { name: 'Personalized Workout Plan', basic: true, premium: true, elite: true },
    { name: 'Nutrition Guidelines', basic: true, premium: true, elite: true },
    { name: 'Regular Check-ins', basic: 'Weekly', premium: 'Bi-weekly', elite: 'Weekly' },
    { name: 'Video Call Support', basic: false, premium: true, elite: true },
    { name: 'Progress Tracking Tools', basic: 'Basic', premium: 'Advanced', elite: 'Advanced' },
    { name: 'Workout Library Access', basic: false, premium: true, elite: true },
    { name: '24/7 Priority Support', basic: false, premium: false, elite: true },
    { name: 'Nutrition Plan', basic: 'Basic', premium: 'Detailed', elite: 'Custom' },
    { name: 'Program Adjustments', basic: 'Quarterly', premium: 'Monthly', elite: 'Weekly' },
    { name: 'Supplement Recommendations', basic: false, premium: true, elite: true },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mobile-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans Comparison</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare our plans side by side to find the one that's right for you.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b">
              <div className="font-bold text-lg">Features</div>
              <div className="font-bold text-lg text-center">Basic</div>
              <div className="font-bold text-lg text-center">Premium</div>
              <div className="font-bold text-lg text-center">Elite</div>
            </div>

            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "grid grid-cols-4 gap-4 py-3",
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                )}
              >
                <div className="font-medium">{feature.name}</div>
                <div className="text-center">
                  {typeof feature.basic === 'boolean' ? (
                    feature.basic ? 
                      <CheckCircle className="inline-block text-green-500" size={20} /> : 
                      <XCircle className="inline-block text-gray-300" size={20} />
                  ) : (
                    <span className="text-sm">{feature.basic}</span>
                  )}
                </div>
                <div className="text-center">
                  {typeof feature.premium === 'boolean' ? (
                    feature.premium ? 
                      <CheckCircle className="inline-block text-green-500" size={20} /> : 
                      <XCircle className="inline-block text-gray-300" size={20} />
                  ) : (
                    <span className="text-sm">{feature.premium}</span>
                  )}
                </div>
                <div className="text-center">
                  {typeof feature.elite === 'boolean' ? (
                    feature.elite ? 
                      <CheckCircle className="inline-block text-fitness-primary" size={20} /> : 
                      <XCircle className="inline-block text-gray-300" size={20} />
                  ) : (
                    <span className="text-sm">{feature.elite}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanComparison;
