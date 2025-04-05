
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Plans", path: "/plans" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <span className="font-bold text-xl gradient-text">FitLife</span>
        </div>

        {/* Mobile menu using Sheet component */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-16 pb-6 px-0 w-full h-[100dvh] flex flex-col justify-start">
              <div className="flex flex-col space-y-2 px-6">
                {routes.map((route) => (
                  <SheetClose asChild key={route.path}>
                    <a
                      href={route.path}
                      className={cn(
                        "flex items-center text-xl py-4 px-2 rounded-md transition-colors",
                        location.pathname === route.path 
                          ? "bg-fitness-primary/10 text-fitness-primary font-medium" 
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      {route.name}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button className="bg-fitness-primary hover:bg-fitness-primary/90 w-full mt-4 h-14 text-lg">
                    Sign In
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <a 
              key={route.path} 
              href={route.path}
              className={cn(
                "text-base font-medium transition-colors hover:text-fitness-primary",
                location.pathname === route.path ? "text-fitness-primary" : "text-gray-700"
              )}
            >
              {route.name}
            </a>
          ))}
          <Button className="bg-fitness-primary hover:bg-fitness-primary/90">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
