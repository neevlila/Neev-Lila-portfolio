import React from 'react';
import { BrainCircuit, Code, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    icon: BrainCircuit,
    title: "AI & Prompt Engineering",
    summary: "Prompt architecture, LLM integration, agentic AI, and end-to-end AI product building.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    skills: [
      "Prompt Engineering",
      "Prompt Architecture",
      "AI Product Building",
      "AI Workflow Design",
      "LLM Integration",
      "Generative AI",
      "Agentic AI",
      "AI-Assisted Development",
      "AI-Augmented Development",
      "No-Code Development",
      "Rapid Prototyping",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    summary: "Four AI APIs integrated across live deployed projects — Gemini, OpenAI, Anthropic, NVIDIA.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    skills: [
      "Google Gemini API",
      "ChatGPT (OpenAI)",
      "Claude (Anthropic)",
      "NVIDIA API",
      "n8n",
      "Streamlit",
      "Supabase",
      "Vercel",
      "Netlify",
    ],
  },
  {
    icon: Code,
    title: "Development",
    summary: "Python for ML and automation. React/TypeScript for frontend. Netlify Functions for backend.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    skills: [
      "Python",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
      "Real-Time Data Processing",
      "Edge Case Testing",
      "Systems Design",
      "Git & GitHub",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" aria-label="Skills" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground">
            Prompt engineering and AI product building at the core. Python and React/TypeScript for development. Four AI APIs integrated across live deployed projects.
          </p>
        </div>

        {/* Category header cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {skillCategories.map((cat) => (
            <Card
              key={cat.title}
              className="bg-secondary border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardContent className="pt-6 pb-6">
                <div className={`w-12 h-12 ${cat.bg} ${cat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <cat.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All skills as badge pills — grouped */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-secondary border-border">
            <CardContent className="pt-8 pb-8">
              <div className="space-y-6">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <p className={`text-xs font-semibold uppercase tracking-widest ${cat.color} mb-3`}>
                      {cat.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-sm py-1 px-3 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
