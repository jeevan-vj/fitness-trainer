
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <span className="font-bold text-xl gradient-text">FitLife</span>
        </div>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden animate-in fade-in slide-in-from-top">
          <div className="flex flex-col space-y-4 p-6 pt-4">
            {routes.map((route) => (
              <a
                key={route.path}
                href={route.path}
                className={cn(
                  "text-lg py-2 border-b border-gray-100 font-medium",
                  location.pathname === route.path ? "text-fitness-primary" : "text-gray-700"
                )}
                onClick={closeMenu}
              >
                {route.name}
              </a>
            ))}
            <Button className="bg-fitness-primary hover:bg-fitness-primary/90 w-full mt-4">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
