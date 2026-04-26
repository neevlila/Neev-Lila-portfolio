import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Background3D from './Background3D';

const Hero3D = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" aria-label="Introduction" className="relative h-screen flex items-center justify-center overflow-hidden bg-background text-center">
      <Background3D />

      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Neev Lila
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-8 animate-fade-in animation-delay-500">
          Frontend Developer &middot; AI Integration &middot; React, TypeScript &amp; Gemini API
        </p>
        <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-1000">
          I build responsive web interfaces with React and TypeScript, and integrate LLM&nbsp;APIs&nbsp;&mdash; primarily Google&nbsp;Gemini&nbsp;&mdash; to add real AI capability to products. Currently a B.Tech IT student, I&apos;ve shipped a legal chatbot for Smart India Hackathon 2025 and a live NLP&#8209;based SMS spam classifier.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
          <Button size="lg" onClick={scrollToAbout} id="hero-discover-btn">
            View My Work
          </Button>
          <Button size="lg" variant="outline" id="hero-contact-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2">
        <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
          Scroll to explore
        </span>
        <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero3D;
