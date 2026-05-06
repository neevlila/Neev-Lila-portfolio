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
      description: "A full AI-integrated desktop automation system built in Python. Integrates Gemini 2.5 Pro for natural language conversation, speech recognition via pyttsx3, full Windows system automation through Win32 API and PyAutoGUI, real-time motion detection with OpenCV, YouTube Data API, QR code generation with Tkinter GUI, email drafting and sending, WiFi profile management, speed tests, and 25+ voice commands. Built for real daily use — not a demo project.",
      techStack: ["Python", "Gemini API", "OpenCV", "SpeechRecognition", "PyAutoGUI", "Win32API", "YouTube Data API", "Tkinter"],
      liveLink: "#",
      sourceLink: "https://github.com/neevlila/Jarvis",
    },
    {
      title: "Sustainable Token Analyzer",
      subtitle: "React + TypeScript · Netlify Functions · NVIDIA Qwen 2.5 72B",
      description: "A full-stack web app that analyzes AI prompts for token count, energy usage, API cost, and carbon footprint — then uses NVIDIA's Qwen 2.5 72B to rewrite them into leaner versions. Built with a React + TypeScript frontend, a Netlify serverless function as the API backend, and a Recharts dashboard tracking cumulative savings across sessions. Carbon calculations use the real global grid average of 0.386 kg CO₂/kWh. Four-tab layout: Dashboard, Analyzer, Comparison, Suggestions.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Netlify Functions", "NVIDIA API", "Recharts", "Vite"],
      liveLink: "sustainable-token-analyzer.netlify.app",
      sourceLink: "https://github.com/neevlila/Sustainable-Token-Analyzer",
    },
    {
      title: "Law-Bot — AI Legal Assistant",
      subtitle: "Smart India Hackathon 2025 · React + Gemini API · Deployed on Vercel",
      description: "The core challenge: Gemini's default behavior hallucinates case law when asked legal questions. Solved by engineering a strict system prompt that instructs the model to cite general legal principles and explicitly flag uncertainty rather than fabricating citations. Frontend is React + TypeScript + Tailwind CSS with client-side API calls and response streaming for perceived speed. Chat history persisted via browser local storage — no backend needed. Deployed on Vercel with sub-2s cold start.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Google Gemini API", "Vercel"],
      liveLink: "https://lawbot-teal.vercel.app/",
      sourceLink: "https://github.com/neevlila/Lawbot",
    },
    {
      title: "AI-Based SMS Spam Detector",
      subtitle: "Text Classification · Python + scikit-learn · Deployed on Render",
      description: "Trained a TF-IDF + Logistic Regression pipeline on the UCI SMS Spam Collection (5,574 messages). Achieved 98% accuracy with precision prioritized to eliminate false positives — legitimate messages never wrongly blocked. Preprocessing pipeline: NLTK tokenization → stop-word removal → Porter stemming → TF-IDF bi-gram vectorization. Deployed as a Streamlit web app on Render with real-world spam examples preloaded for live testing. Built as an end-to-end product, not a notebook.",
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
