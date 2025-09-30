import React from 'react';
import { Bot, Rocket, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const traits = [
    {
      icon: Bot,
      title: "AI-Augmented Development",
      description: "Building intelligent applications by integrating Generative AI to enhance functionality and user experience."
    },
    {
      icon: Rocket,
      title: "Rapid Prototyping",
      description: "Quickly turning ideas into functional prototypes to validate concepts and accelerate development cycles."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Dedicated to rigorous software testing and QA practices to deliver reliable, high-quality products."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am an AI-Augmented Developer focused on creating intelligent solutions and ensuring their reliability. I specialize in Rapid Prototyping and leveraging Generative AI Tools like the Google Gemini API to solve real-world problems. My process is reinforced by expertise in Software Testing and Quality Assurance to guarantee stable, effective user experiences.
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
