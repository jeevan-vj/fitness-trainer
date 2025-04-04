
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { 
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'hover:text-[#E1306C]',
      bgColor: 'bg-gradient-to-br from-[#405DE6] via-[#E1306C] to-[#FFDC80]'
    },
    { 
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      color: 'hover:text-[#1877F2]',
      bgColor: 'bg-[#1877F2]'
    },
    { 
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-[#1DA1F2]',
      bgColor: 'bg-[#1DA1F2]'
    },
    { 
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      color: 'hover:text-[#FF0000]',
      bgColor: 'bg-[#FF0000]'
    },
    { 
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-[#0A66C2]',
      bgColor: 'bg-[#0A66C2]'
    }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className={`transition-transform hover:scale-110 ${social.color}`}
          aria-label={`Follow us on ${social.name}`}
        >
          <div className={`p-3 rounded-full text-white ${social.bgColor}`}>
            <social.icon size={20} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
