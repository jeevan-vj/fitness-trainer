
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { RevealAnimation } from '@/hooks/use-scroll-reveal';

export interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ content, author, role, rating, image }: TestimonialProps) => {
  return (
    <RevealAnimation variant="zoom-in" delay={100} threshold={0.2}>
      <Card className="h-full">
        <CardContent className="p-4 md:p-6">
          <div className="mb-3 flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={`${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} mr-1`} 
              />
            ))}
          </div>
          
          <blockquote className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base line-clamp-4 md:line-clamp-none">
            "{content}"
          </blockquote>
          
          <div className="flex items-center">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden mr-3 md:mr-4">
              <img 
                src={image} 
                alt={author} 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-sm md:text-base">{author}</p>
              <p className="text-xs md:text-sm text-gray-500">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </RevealAnimation>
  );
};

export default TestimonialCard;
