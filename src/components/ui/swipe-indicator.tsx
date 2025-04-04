
import { cn } from "@/lib/utils";

interface SwipeIndicatorProps {
  className?: string;
}

export function SwipeIndicator({ className }: SwipeIndicatorProps) {
  return (
    <div className={cn("flex items-center justify-center my-2", className)}>
      <div className="flex gap-1 items-center">
        <span className="text-xs text-gray-500">Swipe</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="animate-pulse-subtle text-fitness-primary"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
