
import { useEffect, useRef, useState } from 'react';

type AnimationVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'none';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  variant?: AnimationVariant;
  delay?: number;
}

export const useScrollReveal = ({
  threshold = 0.1,
  rootMargin = '0px',
  variant = 'fade-up',
  delay = 0
}: ScrollRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay]);

  const animationClasses = () => {
    if (!isVisible) {
      return 'opacity-0 transform';
    }

    const baseClass = 'transition-all duration-700 ease-out opacity-100';
    
    switch (variant) {
      case 'fade-up':
        return `${baseClass} translate-y-0`;
      case 'fade-down':
        return `${baseClass} translate-y-0`;
      case 'fade-left':
        return `${baseClass} translate-x-0`;
      case 'fade-right':
        return `${baseClass} translate-x-0`;
      case 'zoom-in':
        return `${baseClass} scale-100`;
      case 'none':
        return baseClass;
      default:
        return baseClass;
    }
  };

  const initialClasses = () => {
    switch (variant) {
      case 'fade-up':
        return 'translate-y-12';
      case 'fade-down':
        return 'translate-y-[-3rem]';
      case 'fade-left':
        return 'translate-x-[-3rem]';
      case 'fade-right':
        return 'translate-x-[3rem]';
      case 'zoom-in':
        return 'scale-95';
      case 'none':
        return '';
      default:
        return 'translate-y-12';
    }
  };

  return {
    ref,
    isVisible,
    className: `${initialClasses()} ${animationClasses()}`
  };
};

// Create a component wrapper for easy use
interface RevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const RevealAnimation: React.FC<RevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px'
}) => {
  const { ref, className: animationClass } = useScrollReveal({ 
    variant, 
    delay, 
    threshold, 
    rootMargin 
  });

  return (
    <div 
      // @ts-ignore - ref is correctly typed but TypeScript doesn't recognize it
      ref={ref} 
      className={`${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};
