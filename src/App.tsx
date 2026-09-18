/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FirstGenSection } from './components/FirstGenSection';
import { PracticeAreas } from './components/PracticeAreas';
import { HowCanWeHelp } from './components/HowCanWeHelp';
import { ApproachSection } from './components/ApproachSection';
import { HighCourtSection } from './components/HighCourtSection';
import { BeyondTheBrief } from './components/BeyondTheBrief';
import { ServiceAreas } from './components/ServiceAreas';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ScheduleConsultationModal } from './components/ScheduleConsultationModal';
import { PracticeArea } from './types';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { isMidnight } = useTheme();
  const [selectedMatter, setSelectedMatter] = useState<string>('High Court Litigation');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState<boolean>(false);

  const openConsultation = (matterType?: string) => {
    if (matterType) {
      setSelectedMatter(matterType);
    }
    setIsConsultModalOpen(true);
  };

  const handleSelectArea = (area: PracticeArea) => {
    openConsultation(area.title);
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#c5a059] selection:text-[#070c1b] transition-colors duration-300 ${
        isMidnight ? 'bg-[#070c1b] text-slate-100' : 'bg-[#fdfbf7] text-slate-900'
      }`}
    >
      {/* Top Header & Sticky Navigation */}
      <Header onConsultClick={() => openConsultation()} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with H1, Trust Strip and Direct CTAs */}
        <Hero onConsultClick={() => openConsultation()} />

        {/* Section 10: Meet Advocate Arpit Dua (About, Timeline, Photo, Quote) */}
        <AboutSection onConsultClick={() => openConsultation()} />

        {/* Section 11: A First-Generation Lawyer. A Litigation-First Approach */}
        <FirstGenSection />

        {/* Section 12: Areas of Legal Practice (6 verified litigation areas) */}
        <PracticeAreas
          onSelectArea={handleSelectArea}
          onConsultClick={(title) => openConsultation(title)}
        />

        {/* Section 13: How Can We Help? (5 Situational Guides & Checklists) */}
        <HowCanWeHelp onConsultClick={(cat) => openConsultation(cat)} />

        {/* Section 14: The 5-Step Approach Process */}
        <ApproachSection />

        {/* Section 16: Dedicated High Court Section */}
        <HighCourtSection onConsultClick={() => openConsultation('High Court Litigation')} />

        {/* Section 15: Beyond the Brief (Access to Justice & Pro-bono) */}
        <BeyondTheBrief />

        {/* Section 17: Areas Served (Chandigarh, Mohali, Panchkula, Yamunanagar) */}
        <ServiceAreas />

        {/* Section 17.5: Client Testimonials (Anonymized Feedback & Credibility) */}
        <TestimonialsSection onConsultClick={() => openConsultation()} />

        {/* Section 18: Legal Articles & Insights (Full Text Available) */}
        <ArticlesSection onConsultClick={(topic) => openConsultation(topic)} />

        {/* Section 19: Frequently Asked Questions (AEO & User Clarity) */}
        <FaqSection />

        {/* Section 20: Contact & Consultation (Form, NAP, Maps) */}
        <ContactSection initialMatter={selectedMatter} />
      </main>

      {/* Section 21: Full Legal Footer & Bar Council Disclaimer */}
      <Footer />

      {/* Section 22: Mobile Sticky Bottom Action Bar */}
      <MobileStickyBar onConsultClick={() => openConsultation()} />

      {/* Schedule Consultation Popup Modal (Lead Generation) */}
      <ScheduleConsultationModal
        isOpen={isConsultModalOpen}
        initialMatter={selectedMatter}
        onClose={() => setIsConsultModalOpen(false)}
      />
    </div>
  );
}

