
import React from 'react';
import { Award, CheckCircle, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const TrainerProfile = () => {
  const isMobile = useIsMobile();
  const skills = [
    "Strength Training", 
    "Weight Management", 
    "Nutrition Planning",
    "HIIT Workouts",
    "Mobility Training",
    "Recovery Techniques"
  ];
  
  const certifications = [
    { name: "Certified Personal Trainer (CPT)", org: "National Academy of Sports Medicine" },
    { name: "Strength and Conditioning Specialist", org: "National Strength and Conditioning Association" },
    { name: "Nutrition Coach", org: "Precision Nutrition" }
  ];

  const trainerImages = [
    {
      src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
      alt: "John Fitness - Personal Trainer"
    },
    {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
      alt: "John coaching a client"
    },
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
      alt: "John leading a group workout"
    },
    {
      src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80", 
      alt: "John demonstrating equipment"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mobile-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Trainer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With over a decade of experience helping clients achieve their fitness goals, 
            John is dedicated to creating personalized plans for sustainable results.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-2/5">
            <div className="sticky top-24">
              <div className="mb-6 aspect-square overflow-hidden rounded-xl shadow-lg">
                <Carousel
                  opts={{
                    loop: true,
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {trainerImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-full w-full aspect-square">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {!isMobile && (
                    <>
                      <CarouselPrevious className="left-2 bg-white/80 backdrop-blur-sm" />
                      <CarouselNext className="right-2 bg-white/80 backdrop-blur-sm" />
                    </>
                  )}
                </Carousel>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-fitness-primary" />
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-sm text-gray-600">Years Exp.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Users className="h-6 w-6 mx-auto mb-2 text-fitness-primary" />
                  <p className="text-2xl font-bold">1,000+</p>
                  <p className="text-sm text-gray-600">Clients</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Award className="h-6 w-6 mx-auto mb-2 text-fitness-primary" />
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm text-gray-600">Awards</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">About John</h3>
                <p className="text-gray-700 mb-4">
                  John Fitness is a passionate trainer dedicated to helping people reach their health and fitness goals. 
                  With over 10 years of experience in the fitness industry, he specializes in creating personalized workout 
                  programs that fit each client's unique needs and lifestyle.
                </p>
                <p className="text-gray-700 mb-4">
                  After earning degrees in Exercise Science and Nutrition, he has worked with clients of all ages and fitness 
                  levels, from beginners to professional athletes. His holistic approach combines effective workouts with 
                  nutrition guidance and recovery techniques.
                </p>
                <p className="text-gray-700">
                  John believes that fitness should be enjoyable and sustainable. His mission is to empower clients with the 
                  knowledge and tools they need to maintain a healthy lifestyle long after they've reached their initial goals.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Specialties</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-fitness-primary mr-2" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="border-b pb-2 last:border-b-0 last:pb-0">
                        <p className="font-medium">{cert.name}</p>
                        <p className="text-sm text-gray-500">{cert.org}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Training Philosophy</h3>
                <blockquote className="border-l-4 border-fitness-primary pl-4 italic">
                  "My goal is to help you build sustainable habits that lead to lasting results. I believe fitness should 
                  enhance your life, not consume it, and I'll work with you to create a program that fits your unique needs and goals."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;
