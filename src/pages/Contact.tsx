
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import SocialFeeds from '@/components/SocialFeeds';
import SocialLinks from '@/components/SocialLinks';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MobileNavbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-fitness-primary/10 to-fitness-secondary/10 py-12">
          <div className="mobile-container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h1>
            <p className="text-lg mb-6 text-gray-700 max-w-xl">
              Have questions about our fitness programs or want to start your journey? 
              We're here to help you achieve your fitness goals.
            </p>
          </div>
        </section>

        <section className="py-10 mobile-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-fitness-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-fitness-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-gray-600">123 Fitness Street, Gym City, FC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-fitness-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-fitness-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <a href="mailto:info@fitlifeplanhub.com" className="text-gray-600 hover:text-fitness-primary transition-colors">
                      info@fitlifeplanhub.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-fitness-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-fitness-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-fitness-primary transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-fitness-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-fitness-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 6am - 9pm</p>
                    <p className="text-gray-600">Saturday - Sunday: 8am - 6pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                <SocialLinks />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </section>
        
        <section className="py-10 bg-gray-50">
          <div className="mobile-container">
            <h2 className="text-2xl font-semibold mb-6 text-center">Stay Connected</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Follow us on social media for daily workout tips, success stories, and fitness inspiration.
            </p>
            <SocialFeeds />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
