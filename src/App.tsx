import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { FeatureDeepDives } from './components/FeatureDeepDives';
import { IspSolutionsGrid } from './components/IspSolutionsGrid';
import { RoiCalculator } from './components/RoiCalculator';
import { WhyNetzur } from './components/WhyNetzur';
import { CustomerSpotlight } from './components/CustomerSpotlight';
import { ResourcesSection } from './components/ResourcesSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#353F4F] font-sans antialiased">
      {/* Top Header Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Experience with Interactive ISP SaaS Dashboard */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 2. Why ISPs Choose Netzur (Clean, professional cards directly below hero) */}
        <WhyNetzur onOpenDemo={handleOpenDemo} />

        {/* 3. Enterprise Stats & Trusted Operators Banner */}
        {/* <StatsBanner /> */}

        {/* 4. Core Feature Deep Dives (Integrations, Smarter ISP Management, Who We Are) */}
        <FeatureDeepDives onOpenDemo={handleOpenDemo} />

        {/* 5. Solutions in Action (Challenge / Solution / Outcome architecture cards) */}
        <IspSolutionsGrid onOpenDemo={handleOpenDemo} />

        {/* 6. Interactive ROI & Unbilled Revenue Leakage Calculator */}
        {/* <RoiCalculator onOpenDemo={handleOpenDemo} /> */}

        {/* 7. Customer Success Spotlight (High contrast quote & metrics) */}
        <CustomerSpotlight onOpenDemo={handleOpenDemo} />

        {/* 8. Telecom Engineering & BSS Insights Resources */}
        {/* <ResourcesSection onOpenDemo={handleOpenDemo} /> */}

        {/* 9. Conversion Banner */}
        {/* <CtaBanner onOpenDemo={handleOpenDemo} /> */}
      </main>

      {/* Enterprise Footer with Certifications and Regional Offices */}
      <Footer />

      {/* Interactive Demo / Sandbox Booking Modal */}
      <BookDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={handleCloseDemo} 
      />
    </div>
  );
}
