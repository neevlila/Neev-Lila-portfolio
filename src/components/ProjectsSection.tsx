import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Legal Assistant (Built for Smart India Hackathon 2025)",
      subtitle: "Generative AI Chatbot",
      description: "A legal guidance chatbot built on the Google Gemini API to streamline legal queries. It provides accessible, up-to-date information, demonstrating expertise in Generative AI and Rapid Prototyping.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Google Gemini API", "Generative AI Tools"],
      liveLink: "https://lawbot-teal.vercel.app/",
      sourceLink: "https://github.com/neevlila/Lawbot",
    },
    {
      title: "EduScheduler",
      subtitle: "Academic Timetabling Solution",
      description: "A comprehensive timetabling application designed to help educational institutions manage schedules efficiently. Features automated conflict resolution and a user-friendly interface.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Appwrite"],
      liveLink: "https://eduscheduler-ten.vercel.app/",
      sourceLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24 bg-secondary">
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
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild disabled={project.sourceLink === "#"}>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
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
