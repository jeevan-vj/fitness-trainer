
import { useState, useRef, useEffect } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SwipeIndicator } from "@/components/ui/swipe-indicator";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
  aspectRatio?: number;
  showFullScreen?: boolean;
  title?: string;
  subtitle?: string;
}

export function ImageGallery({ 
  images, 
  className, 
  aspectRatio = 3/4, 
  showFullScreen = true,
  title,
  subtitle
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Function to navigate to the next image
  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  
  // Function to navigate to the previous image
  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullScreen) return;
      
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        setIsFullScreen(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen, images.length]);
  
  // Update scroll position when active index changes
  useEffect(() => {
    if (scrollRef.current && !isFullScreen) {
      const scrollArea = scrollRef.current;
      const thumbnailWidth = scrollArea.querySelector('div')?.offsetWidth || 0;
      scrollArea.scrollTo({
        left: thumbnailWidth * activeIndex,
        behavior: 'smooth'
      });
    }
  }, [activeIndex, isFullScreen]);
  
  // Prevent body scroll when in fullscreen
  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullScreen]);
  
  return (
    <div className={cn("w-full", className)}>
      {(title || subtitle) && (
        <div className="mb-4 text-center">
          {title && <h3 className="text-xl font-bold">{title}</h3>}
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      
      {/* Image carousel/thumbnails */}
      <div className="relative">
        <div className="mb-2 overflow-hidden rounded-lg">
          <AspectRatio ratio={aspectRatio} className="bg-muted relative">
            <img 
              src={images[activeIndex].src} 
              alt={images[activeIndex].alt}
              className="object-cover w-full h-full rounded-lg" 
              onClick={() => showFullScreen && setIsFullScreen(true)}
            />
            {showFullScreen && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm" 
                onClick={() => setIsFullScreen(true)}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            )}
          </AspectRatio>
        </div>
        
        {/* Caption */}
        {images[activeIndex].caption && (
          <p className="text-sm text-center text-muted-foreground my-2">
            {images[activeIndex].caption}
          </p>
        )}
        
        {/* Thumbnails */}
        {images.length > 1 && (
          <>
            <ScrollArea className="w-full pb-2" ref={scrollRef}>
              <div className="flex gap-2 pb-2">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "flex-shrink-0 cursor-pointer transition-all duration-200 rounded-md overflow-hidden",
                      activeIndex === index 
                        ? "ring-2 ring-fitness-primary" 
                        : "ring-1 ring-border opacity-70 hover:opacity-100"
                    )}
                    style={{ width: '80px' }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <AspectRatio ratio={aspectRatio}>
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <SwipeIndicator className="mt-1" />
          </>
        )}
        
        {/* Mobile counter */}
        {isMobile && images.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>
      
      {/* Fullscreen viewer */}
      {isFullScreen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <Button variant="ghost" size="icon" onClick={() => setIsFullScreen(false)}>
              <X className="h-5 w-5" />
            </Button>
            <div className="text-sm font-medium">
              {activeIndex + 1} / {images.length}
            </div>
            <div className="w-10"></div> {/* Spacer for alignment */}
          </div>
          
          <div className="flex-1 relative flex items-center justify-center">
            <img 
              src={images[activeIndex].src} 
              alt={images[activeIndex].alt}
              className="max-h-full max-w-full object-contain" 
            />
            
            {images.length > 1 && (
              <>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-2 bg-background/40 backdrop-blur-sm"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 bg-background/40 backdrop-blur-sm"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
          
          {images[activeIndex].caption && (
            <div className="p-4 text-center border-t">
              <p>{images[activeIndex].caption}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
