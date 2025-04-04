
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ content, author, role, rating, image }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} mr-1`} 
            />
          ))}
        </div>
        
        <blockquote className="text-gray-700 mb-6">"{content}"</blockquote>
        
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img 
              src={image} 
              alt={author} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
