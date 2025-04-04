
import { ImageGallery, type GalleryImage } from "./ImageGallery";

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
  }
];

export function GallerySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mobile-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">Fitness Journey</span> Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ImageGallery 
              images={trainerImages} 
              title="Training Excellence" 
              subtitle="Expert guidance for maximum results"
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ImageGallery 
              images={transformationImages} 
              title="Success Stories" 
              subtitle="Real transformations from our clients"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
