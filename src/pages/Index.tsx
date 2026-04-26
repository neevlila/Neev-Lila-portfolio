import React, { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero3D from '@/components/Hero3D';

// Lazy-load every below-the-fold section — splits them into separate JS chunks
// so they are not downloaded until the browser needs them.
const AboutSection        = lazy(() => import('@/components/AboutSection'));
const SkillsSection       = lazy(() => import('@/components/SkillsSection'));
const ProjectsSection     = lazy(() => import('@/components/ProjectsSection'));
const CertificationsSection = lazy(() => import('@/components/CertificationsSection'));
const ContactSection      = lazy(() => import('@/components/ContactSection'));
const Footer              = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero3D />
        <Suspense fallback={null}>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
