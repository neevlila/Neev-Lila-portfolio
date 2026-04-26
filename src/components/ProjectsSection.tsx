import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Lawbot — AI Legal Assistant",
      subtitle: "Smart India Hackathon 2025 · React + Gemini API",
      description: "The core challenge: Gemini's default behavior hallucinates case law when asked legal questions. Solved by engineering a strict system prompt that instructs the model to cite general legal principles and explicitly flag uncertainty rather than fabricating citations. Frontend is React + TypeScript + Tailwind CSS; API calls run through a client-side service layer with response streaming for perceived speed. Deployed on Vercel with sub-2s cold start.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Google Gemini API", "Vercel"],
      liveLink: "https://lawbot-teal.vercel.app/",
      sourceLink: "https://github.com/neevlila/Lawbot",
    },
    {
      title: "NLP SMS Spam Classifier",
      subtitle: "Text Classification · Python + scikit-learn · Deployed on Render",
      description: "Trained a TF-IDF + Multinomial Naive Bayes pipeline on the UCI SMS Spam Collection (5,574 messages). Hit 97.4% accuracy and 100% precision on spam — precision was prioritized to eliminate false positives (legitimate messages wrongly blocked). Preprocessing pipeline: NLTK tokenization → stop-word removal → Porter stemming → TF-IDF vectorization. Serialized with Pickle, served via a Streamlit UI, and continuously deployed on Render.",
      techStack: ["Python", "NLTK", "scikit-learn", "TF-IDF", "Streamlit", "Render"],
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
            A selection of projects where I've turned complex problems into elegant, AI-powered solutions.
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
