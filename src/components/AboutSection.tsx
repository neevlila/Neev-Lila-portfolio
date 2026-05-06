import React from 'react';
import { BrainCircuit, Layers, FlaskConical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const traits = [
    {
      icon: BrainCircuit,
      title: "AI Product Building",
      description: "Designs and ships end-to-end AI systems using ChatGPT, Claude, Gemini, and NVIDIA APIs. Knows the difference between a chatbot wrapper and a properly architected, prompt-engineered AI product. Builds for real use, not demos."
    },
    {
      icon: Layers,
      title: "Full-Stack Development",
      description: "Builds component-driven interfaces with React and TypeScript on the frontend, and serverless API backends with Netlify Functions. Has deployed across Vercel, Netlify, and Render. Understands the gap between a UI that looks good in Figma and one that works in production."
    },
    {
      icon: FlaskConical,
      title: "Python & ML Tooling",
      description: "Uses Python, scikit-learn, and NLTK to build and deploy text classification pipelines — demonstrated in production with a live SMS spam detector at 98% accuracy. Also builds desktop automation systems with PyAutoGUI, Win32 API, OpenCV, and pyttsx3."
    }
  ];

  return (
    <section id="about" aria-label="About Neev Lila" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">

        {/* ── Two-column bio row ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-5xl mx-auto mb-20">

          {/* Photo — left on desktop, centred on mobile */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              {/* Glow ring behind the image */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl scale-105" />
              <img
                src="/assets/neev.jpg"
                alt="Neev Lila — AI Product Builder"
                width={280}
                height={360}
                loading="lazy"
                className="relative w-[260px] md:w-[300px] h-auto rounded-2xl object-cover object-[center_15%] border border-primary/30 shadow-2xl shadow-primary/10"
              />
            </div>
          </div>

          {/* Bio text — right on desktop */}
          <div className="text-center lg:text-left animate-fade-in animation-delay-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I&apos;m Neev Lila &mdash; an AI Product Builder and B.Tech IT student based in Ahmedabad. I design and ship AI-powered tools using ChatGPT, Claude, and Gemini as the medium, not just helpers. My process: system design first, prompt architecture second, build and iterate until it actually works. Not vibe coding &mdash; structured engineering with AI as the tool.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;ve shipped four projects with live deployments &mdash; across Python, React, TypeScript, and four different AI APIs. Every project started as a specific problem and ended as a working product, not a tutorial clone.
            </p>
            <p className="mt-6 text-sm font-medium text-primary">
              Currently open to AI Builder roles and freelance projects.
            </p>
          </div>
        </div>

        {/* ── Three trait cards — full width below ── */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {traits.map((trait, index) => (
            <Card key={index} className="text-center border-0 bg-background/50 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <trait.icon size={32} />
                </div>
                <CardTitle className="text-xl">{trait.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{trait.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;