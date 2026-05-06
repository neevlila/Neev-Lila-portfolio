import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Jarvis — AI Desktop Assistant",
      subtitle: "Voice-Activated · Python + Gemini 2.5 Pro · 1900+ lines",
      description: "A voice-activated AI desktop assistant built in Python. Integrates Gemini 2.5 Pro for natural language conversation, full Windows automation via Win32 API and PyAutoGUI, real-time motion detection with OpenCV, and 25+ voice commands. Built for daily personal use — not a demo.",
      techStack: ["Python", "Gemini API", "OpenCV", "SpeechRecognition", "PyAutoGUI", "Win32API", "YouTube Data API", "Tkinter"],
      liveLink: "#",
      sourceLink: "https://github.com/neevlila/Jarvis",
    },
    {
      title: "Sustainable Token Analyzer",
      subtitle: "React + TypeScript · Netlify Functions · NVIDIA Qwen 2.5 72B",
      description: "A full-stack web app that measures AI prompt cost, energy usage, and carbon footprint — then uses NVIDIA's Qwen 2.5 72B to rewrite them into leaner versions. React + TypeScript frontend with a Netlify serverless backend and a live Recharts dashboard tracking session savings.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Netlify Functions", "NVIDIA API", "Recharts", "Vite"],
      liveLink: "https://sustainable-token-analyzer.netlify.app",
      sourceLink: "https://github.com/neevlila/Sustainable-Token-Analyzer",
    },
    {
      title: "Law-Bot — AI Legal Assistant",
      subtitle: "Smart India Hackathon 2025 · React + Gemini API · Deployed on Vercel",
      description: "An AI legal chatbot that solves a real problem: Gemini hallucinates case law by default. Engineered a strict system prompt that forces the model to cite general legal principles and flag uncertainty instead of fabricating citations. Built for Smart India Hackathon 2025.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Google Gemini API", "Vercel"],
      liveLink: "https://lawbot-teal.vercel.app/",
      sourceLink: "https://github.com/neevlila/Lawbot",
    },
    {
      title: "AI-Based SMS Spam Detector",
      subtitle: "Text Classification · Python + scikit-learn · Deployed on Render",
      description: "Real-time SMS spam detection at 98% accuracy. Trained a TF-IDF + Logistic Regression pipeline on 5,574 messages with precision prioritized to eliminate false positives. Deployed as a live Streamlit app — a working product, not a Jupyter notebook.",
      techStack: ["Python", "NLTK", "scikit-learn", "TF-IDF", "Logistic Regression", "Streamlit", "Render"],
      liveLink: "https://ai-based-sms-spam-detection.onrender.com/",
      sourceLink: "https://github.com/neevlila/AI-Based-SMS-Spam-Detection",
    },
  ];

  return (
    <section id="projects" aria-label="Featured Projects" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Four deployed projects — built across Python, React, TypeScript, and four different AI APIs. Each one started as a specific problem and ended as a working product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-background/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 mt-auto pt-6">
                <Button variant="outline" asChild disabled={project.liveLink === "#"}>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live Demo for ${project.title}`}
                  >
                    Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild disabled={project.sourceLink === "#"}>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source Code for ${project.title}`}
                  >
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
