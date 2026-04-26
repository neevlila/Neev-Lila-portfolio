import React from 'react';
import { BrainCircuit, Layers, FlaskConical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const traits = [
    {
      icon: BrainCircuit,
      title: "AI Integration",
      description: "Connects frontend UIs to LLM APIs — primarily Google Gemini — to build tools that understand natural language. Knows the difference between a chatbot wrapper and a properly prompted, instruction-followed AI feature."
    },
    {
      icon: Layers,
      title: "UI Development",
      description: "Builds component-driven interfaces with React and TypeScript. Understands the gap between a UI that looks good in Figma and one that works at 3G on a mid-range phone."
    },
    {
      icon: FlaskConical,
      title: "ML Tooling",
      description: "Uses Python, scikit-learn, and NLTK to build and deploy text classification models — demonstrated in production with a live NLP-based spam detector achieving 97.4% accuracy, deployed on Render."
    }
  ];

  return (
    <section id="about" aria-label="About Neev Lila" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a B.Tech IT student building web interfaces and integrating AI APIs into practical tools. My main stack is React, TypeScript, and Tailwind CSS on the frontend, with Python for data and ML work. I connect these to LLM backends — primarily Google Gemini — to give applications real language understanding instead of hardcoded logic.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            I&apos;ve shipped two projects with live deployments: a legal guidance chatbot built for Smart India Hackathon 2025 using the Gemini API, and an NLP-based SMS spam classifier trained with scikit-learn and deployed on Render. Both started as a specific problem and ended with a working tool, not a tutorial clone.
          </p>
        </div>

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
