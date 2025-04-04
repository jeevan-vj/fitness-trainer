
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Working with John completely transformed my approach to fitness. His personalized plan helped me lose 30 pounds in 4 months, and I've kept it off!",
      author: "Sarah Johnson",
      role: "Lost 30 lbs in 4 months",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
    },
    {
      content: "As someone who's tried countless fitness programs, I can confidently say that John's approach is different. The customized plans and consistent support made all the difference.",
      author: "Michael Chen",
      role: "Gained 15 lbs of muscle",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
    },
    {
      content: "The nutrition plan alone was worth the investment. John helped me understand how to fuel my body properly, and my energy levels have never been better.",
      author: "Emma Rodriguez",
      role: "Improved marathon time by 15 min",
      rating: 4,
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mobile-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what clients have to say about their 
            experiences working with our fitness plans.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
