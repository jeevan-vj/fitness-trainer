
import { ImageGallery, type GalleryImage } from "./ImageGallery";
import { Button } from "@/components/ui/button";
import { CameraIcon, Dumbbell, Heart, Stars } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const trainerImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    alt: "Trainer demonstrating workout",
    caption: "John demonstrating proper form for functional training"
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    alt: "Group training session",
    caption: "Group HIIT session led by our certified trainers"
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    alt: "Weightlifting session",
    caption: "Strength training with proper technique is key to results"
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    alt: "Stretching routine",
    caption: "Recovery and flexibility are essential components of our program"
  },
  {
    src: "https://images.unsplash.com/photo-1594381898411-846e7d193883",
    alt: "Equipment training",
    caption: "Using the latest equipment for optimal training results"
  },
  {
    src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba",
    alt: "Outdoor training",
    caption: "Taking advantage of outdoor workouts for variety and fresh air"
  }
];

const transformationImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1520787497953-1985ca79705a",
    alt: "Client transformation",
    caption: "Sarah lost 30lbs in 6 months following our nutrition and exercise plan"
  },
  {
    src: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb",
    alt: "Client success story",
    caption: "Mike gained 15lbs of muscle through our strength program"
  },
  {
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5",
    alt: "Group fitness class",
    caption: "Our community workouts create motivation and accountability"
  },
  {
    src: "https://images.unsplash.com/photo-1604249740662-efe0a37fb209",
    alt: "Before and after",
    caption: "Real results through consistent training and proper nutrition"
  },
  {
    src: "https://images.unsplash.com/photo-1541534401786-2077eed87a74",
    alt: "Active lifestyle",
    caption: "Building strength that translates to everyday activities"
  }
];

const facilityImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
    alt: "Modern gym equipment",
    caption: "State-of-the-art equipment to help you reach your goals"
  },
  {
    src: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca",
    alt: "Functional training area",
    caption: "Dedicated spaces for functional and HIIT training"
  },
  {
    src: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df",
    alt: "Recovery zone",
    caption: "Recovery area for stretching and mobility work"
  }
];

export function GallerySection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="mobile-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          <span className="gradient-text">Fitness Journey</span> Gallery
        </h2>
        
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore our comprehensive approach to fitness through these images showcasing 
          our training methods, client transformations, and state-of-the-art facilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Dumbbell className="h-5 w-5 text-fitness-primary mr-2" />
              <h3 className="text-xl font-bold">Training Excellence</h3>
            </div>
            <ImageGallery 
              images={trainerImages.slice(0, isMobile ? 3 : undefined)} 
              subtitle="Expert guidance for maximum results"
              aspectRatio={4/3}
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Heart className="h-5 w-5 text-fitness-primary mr-2" />
              <h3 className="text-xl font-bold">Success Stories</h3>
            </div>
            <ImageGallery 
              images={transformationImages.slice(0, isMobile ? 3 : undefined)} 
              subtitle="Real transformations from our clients"
              aspectRatio={4/3}
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <CameraIcon className="h-5 w-5 text-fitness-primary mr-2" />
              <h3 className="text-xl font-bold">Our Facilities</h3>
            </div>
            <ImageGallery 
              images={facilityImages} 
              subtitle="State-of-the-art equipment and spaces"
              aspectRatio={4/3}
            />
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-fitness-primary hover:bg-fitness-primary/90">
            Book a Tour
          </Button>
        </div>
      </div>
    </section>
  );
}
