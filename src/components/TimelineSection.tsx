import React from 'react';

const timeline = [
  {
    year: "2022",
    title: "Started Computer Engineering Diploma",
    description: "Enrolled at Dr. Subhash University. Started learning programming fundamentals, networking, and system design basics including Linux and the OSI Model.",
    tag: "Education",
    tagColor: "bg-blue-400/10 text-blue-400",
  },
  {
    year: "2025 Q1",
    title: "Lateral Entry — B.Tech Information Technology",
    description: "Joined JG University, Ahmedabad for B.Tech IT via lateral entry after completing the Diploma. Continuing to build AI-powered products while studying.",
    tag: "Education",
    tagColor: "bg-blue-400/10 text-blue-400",
  },
  {
    year: "2025 Q2",
    title: "First AI Projects — Jarvis & Law-Bot",
    description: "Built Jarvis, a 1900-line voice-activated AI desktop assistant using Gemini 2.5 Pro and Python. Built Law-Bot for Smart India Hackathon 2025 — an AI legal assistant using the Gemini API with full prompt architecture.",
    tag: "Building",
    tagColor: "bg-purple-400/10 text-purple-400",
  },
  {
    year: "2025 Q3",
    title: "Shipped 4 Deployed Products",
    description: "Launched AI-Based SMS Spam Detector (98% accuracy, live on Render) and Sustainable Token Analyzer (React + NVIDIA Qwen 2.5 72B, Netlify). Four live products across Python, React, TypeScript, and four different AI APIs.",
    tag: "Shipped",
    tagColor: "bg-emerald-400/10 text-emerald-400",
  },
  {
    year: "Now",
    title: "Open to AI Builder Roles & Freelance",
    description: "Actively looking for AI Builder, Prompt Engineering, and AI Workflow Design roles. Available for freelance projects. Portfolio ranking top 3 on Google for 'Neev Lila'.",
    tag: "Open to Work",
    tagColor: "bg-primary/10 text-primary",
  },
];

const TimelineSection = () => {
  return (
    <section id="journey" aria-label="Neev Lila Journey and Timeline" className="pt-20 pb-10 lg:pt-32 lg:pb-16 bg-secondary">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
          <p className="text-lg text-muted-foreground">
            From learning to build — to building things people use.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'} pl-14 md:pl-0`}>
                  <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5">
                    <div className={`inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${item.tagColor}`}>
                      {item.tag}
                    </div>
                    <h3 className="font-semibold text-foreground text-base mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center dot with year */}
                <div className="absolute left-0 md:left-1/2 top-5 md:-translate-x-1/2 flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                    <span className="text-[10px] font-bold text-primary leading-none text-center">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Empty spacer for alternating side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;
