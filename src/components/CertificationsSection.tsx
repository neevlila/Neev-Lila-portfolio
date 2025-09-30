import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Cybersecurity Analyst",
      issuer: "Tata Insights and Quants (Forage)",
      logoUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/48x48/1e293b/ffffff?text=TATA&w=48&h=48",
      credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_68d57892e8c126991b15d05a_1758882308684_completion_certificate.pdf",
    },
    {
      title: "GenAI Powered Data Analytics",
      issuer: "Tata Insights and Quants (Forage)",
      logoUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/48x48/1e293b/ffffff?text=TATA&w=48&h=48",
      credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_68d57892e8c126991b15d05a_1758830408377_completion_certificate.pdf",
    },
    {
      title: "OpenUSD: Using Attributes",
      issuer: "NVIDIA",
      logoUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/48x48/1e293b/ffffff?text=NVIDIA&w=48&h=48",
      credentialUrl: "https://learn.nvidia.com/certificates?id=WUulj3U2SiOMgveVHSbk5w#",
    },
		{
      title: "Prompt Engineering",
      issuer: "Google Cloud Skills Boost",
      logoUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/48x48/1e293b/ffffff?text=GCP&w=48&h=48",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/11b5e5d0-f446-4102-b7e0-6e9570fb292f/badges/18623811",
    },
    {
      title: "Integrating Applications with Gemini 1.0 Pro on Google Cloud",
      issuer: "Google Cloud Skills Boost",
      logoUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/48x48/1e293b/ffffff?text=GCP&w=48&h=48",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/11b5e5d0-f446-4102-b7e0-6e9570fb292f/badges/18701154",
    },
  ];

  return (
    <section id="certifications" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & Badges
          </h2>
          <p className="text-lg text-muted-foreground">
            My commitment to continuous learning and staying at the forefront of technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 rounded-lg border border-border bg-background p-4 text-left transition-all duration-300 hover:bg-accent hover:border-primary/50 disabled:opacity-50 disabled:pointer-events-none group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              aria-disabled={cert.credentialUrl === "#"}
              onClick={(e) => cert.credentialUrl === '#' && e.preventDefault()}
            >
              <img 
                src={cert.logoUrl} 
                alt={`${cert.issuer} logo`} 
                className="w-10 h-10 rounded-md bg-gray-700 object-contain"
              />
              <div>
                <h3 className="font-semibold text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground ml-auto transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
