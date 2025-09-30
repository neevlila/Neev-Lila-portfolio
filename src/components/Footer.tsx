import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://github.com/neevlila',
      icon: Github,
      title: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/neev-lila-292b46301',
      icon: Linkedin,
      title: 'LinkedIn'
    },
    {
      href: 'https://www.instagram.com/neev_lila',
      icon: Instagram,
      title: 'Instagram'
    },
    {
      href: 'mailto:nneev223@gmail.com',
      icon: Mail,
      title: 'Email'
    }
  ];

  return (
    <footer className="bg-secondary py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title={link.title}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Neev Lila. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
