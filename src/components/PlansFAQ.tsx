
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PlansFAQ = () => {
  const faqs = [
    {
      question: "How do I know which plan is right for me?",
      answer: "We recommend booking a free consultation call where we can discuss your specific goals, fitness level, and preferences. This will help us recommend the most suitable plan for you. Generally, the Basic plan is great for beginners, Premium for those with some experience looking to accelerate their progress, and Elite for those with ambitious goals requiring maximum support."
    },
    {
      question: "Can I switch plans if my needs change?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. If you upgrade, we'll prorate the difference. If you downgrade, the changes will take effect at the start of your next billing cycle."
    },
    {
      question: "How personalized are the workout plans?",
      answer: "Each plan includes personalized workout plans tailored to your specific goals, fitness level, and preferences. The level of customization increases with each tier, with the Elite plan offering fully customized programming adjusted weekly based on your progress and feedback."
    },
    {
      question: "Do I need special equipment for the workouts?",
      answer: "We design your workout plans based on the equipment you have access to. Whether you work out at home with minimal equipment or at a fully-equipped gym, we'll create a plan that works for your situation."
    },
    {
      question: "How are the check-ins conducted?",
      answer: "Regular check-ins are conducted via your preferred method of communication. Basic plan includes weekly email check-ins, Premium includes bi-weekly video calls, and Elite includes weekly video calls with your trainer."
    },
    {
      question: "What's included in the nutrition guidelines?",
      answer: "The Basic plan includes general nutrition guidelines and recommendations. The Premium plan includes a detailed nutrition plan with macronutrient targets and meal suggestions. The Elite plan includes a fully customized nutrition plan with ongoing adjustments based on your progress and preferences."
    }
  ];

  return (
    <section className="py-16">
      <div className="mobile-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our plans? Find answers to commonly asked questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-6 hover:no-underline hover:text-fitness-primary">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Still have questions? <a href="/contact" className="text-fitness-primary font-medium hover:underline">Contact us</a> or 
            <a href="#" className="text-fitness-primary font-medium hover:underline ml-1">book a free consultation</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansFAQ;
