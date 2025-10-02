import React from 'react';
import { Code, Bug, Wrench } from 'lucide-react';  // updated icons
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Technical Skills",
      icon: Code,
      items: [
        "Prompt Engineering",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "AI-Augmented Development",
        "Rapid Prototyping"
      ]
    },
    {
      category: "Quality & Testing",
      icon: Bug,
      items: [
        "Software Testing",
        "Quality Assurance",
        "Quality analysis",
      ]
    },
    {
      category: "Tools",
      icon: Wrench,
      items: [
        "Google Gemini",
        "ChatGPT",
        "GitHub Copilot",
        "VS Code",
        "Git & GitHub",
        "Vercel",
        "Netlify",
        "Generative AI Tools"
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            A blend of AI integration, rapid prototyping, and a strong commitment to quality to build innovative and reliable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((skillGroup) => (
            <Card key={skillGroup.category} className="bg-secondary border-border h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <skillGroup.icon size={24} />
                  </div>
                  <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li 
                      key={skill}
                      className="flex items-start text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
