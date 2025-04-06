
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { SwipeIndicator } from '@/components/ui/swipe-indicator';

const Testimonials = () => {
  const isMobile = useIsMobile();
  
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
    },
    {
      content: "I was skeptical at first, but after just 8 weeks I've seen incredible progress. The workout routines are challenging but never boring.",
      author: "David Kim",
      role: "Completed first triathlon",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      content: "The personalized nutrition plan was a game-changer for me. I've never felt better or had more energy throughout my day.",
      author: "Jessica Taylor",
      role: "Overcame plateau after 2 years",
      rating: 4,
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
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
        
        {isMobile && <SwipeIndicator />}
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {!isMobile && (
            <>
              <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
              <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
