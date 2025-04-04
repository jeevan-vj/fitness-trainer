
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PlanProps {
  id: string;
  title: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  className?: string;
}

const PlanCard = ({ title, price, period, description, features, popular = false, className }: PlanProps) => {
  return (
    <Card className={cn(
      "card-hover overflow-hidden w-full",
      popular && "border-fitness-primary shadow-lg relative",
      className
    )}>
      {popular && (
        <div className="absolute top-0 right-0">
          <Badge className="m-2 bg-fitness-primary text-white">Popular</Badge>
        </div>
      )}
      
      <CardHeader className="pb-0 pt-6">
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      
      <CardContent className="pb-0">
        <div className="mt-4 mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-sm text-gray-500 ml-1">/{period}</span>
          </div>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
        </div>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <CheckCircle size={18} className="text-fitness-primary mr-2 shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-6">
        <Button 
          className={cn(
            "w-full",
            popular 
              ? "bg-fitness-primary hover:bg-fitness-primary/90" 
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          )}
        >
          {popular ? "Start Now" : "Select Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
