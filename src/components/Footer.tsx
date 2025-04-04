
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mobile-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="font-bold text-xl text-white">FitLife Plan Hub</span>
            </div>
            <p className="mb-4 text-sm">
              Personalized fitness plans designed to help you achieve your goals, with expert guidance every step of the way.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/plans" className="hover:text-white transition-colors">Plans</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutrition Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Workout Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@fitlifeplanhub.com" className="hover:text-white transition-colors">
                  info@fitlifeplanhub.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 FitLife Plan Hub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
