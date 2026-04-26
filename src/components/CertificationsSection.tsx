import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const certifications = [
  {
    title: "Cyber Security",
    issuer: "Deloitte (Forage)",
    logoUrl: "https://www.deloitte.com/favicon.ico",
    credentialUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_68d6c37f7ede33c1018bd655_1760721809188_completion_certificate.pdf",
  },
  {
    title: "GenAI Powered Data Analytics",
    issuer: "Tata (Forage)",
    logoUrl: "https://www.tata.com/favicon.ico",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_68d57892e8c126991b15d05a_1758830408377_completion_certificate.pdf",
  },
  {
    title: "Agentic AI on AWS",
    issuer: "AWS",
    // AWS favicon from their official static CDN (long-lived cache)
    logoUrl: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
    credentialUrl: "https://drive.google.com/file/d/1X_VwKl7FCArOz1Iz9nx6m8EsjX040iXM/view?usp=sharing",
  },
  {
    title: "n8n — No Code AI Agent Builder",
    issuer: "Simplilearn",
    logoUrl: "https://www.simplilearn.com/favicon.ico",
    credentialUrl: "https://certificates.simplicdn.net/share/9137360_94957271760069546686.png",
  },
  {
    title: "OpenUSD: Using Attributes",
    issuer: "NVIDIA",
    logoUrl: "https://www.nvidia.com/favicon.ico",
    credentialUrl: "https://learn.nvidia.com/certificates?id=WUulj3U2SiOMgveVHSbk5w",
  },
  {
    title: "Prompt Engineering",
    issuer: "Google Cloud Skills Boost",
    logoUrl: "https://www.google.com/favicon.ico",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/11b5e5d0-f446-4102-b7e0-6e9570fb292f/badges/18623811",
  },
  {
    title: "Explore AI for All",
    issuer: "Microsoft",
    logoUrl: "https://www.microsoft.com/favicon.ico",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/NeevLila-7043/KCG7NP6B?sharingId=1C369FF35C8C562C",
  },
  {
    title: "Google Gemini",
    issuer: "Google",
    logoUrl: "https://www.google.com/favicon.ico",
    credentialUrl: "https://edu.exceedlms.com/student/award/MDUbWqtzaNBgM27eAawpk2q2",
  },
  {
    title: "AI Fluency For Students",
    issuer: "Anthropic",
    logoUrl: "https://www.anthropic.com/favicon.ico",
    credentialUrl: "https://verify.skilljar.com/c/wh7hqydn5j82",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" aria-label="Certifications and Badges" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications &amp; Badges
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
              aria-label={`View credential: ${cert.title} by ${cert.issuer}`}
              className="inline-flex items-center gap-4 rounded-lg border border-border bg-background p-4 text-left transition-all duration-300 hover:bg-accent hover:border-primary/50 disabled:opacity-50 disabled:pointer-events-none group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md min-h-[100px]"
              aria-disabled={cert.credentialUrl === "#"}
              onClick={(e) => cert.credentialUrl === '#' && e.preventDefault()}
            >
              {/* Logo — using direct vendor URLs, not the proxy, so browser caches them long-term */}
              <img
                src={cert.logoUrl}
                alt={`${cert.issuer} logo`}
                width="48"
                height="48"
                loading="lazy"
                className="w-10 h-10 rounded-md bg-slate-700 object-contain p-1"
                onError={(e) => {
                  // Fallback: show issuer initial if logo fails to load
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const sibling = target.nextElementSibling as HTMLElement | null;
                  if (sibling && sibling.dataset.fallback) sibling.style.display = 'flex';
                }}
              />
              {/* Fallback initial badge (hidden by default, shown if img errors) */}
              <span
                data-fallback="true"
                style={{ display: 'none' }}
                className="w-10 h-10 rounded-md bg-primary/20 text-primary text-xs font-bold items-center justify-center shrink-0"
              >
                {cert.issuer.charAt(0)}
              </span>

              {/* Text Content */}
              <div className="flex flex-col flex-1">
                <h3 className="font-semibold text-foreground leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>

              {/* Arrow Icon */}
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
