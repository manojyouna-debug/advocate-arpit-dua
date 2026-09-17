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
import { ArticlesSection } from './components/ArticlesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { PracticeArea } from './types';

export default function App() {
  const [selectedMatter, setSelectedMatter] = useState<string>('High Court Litigation');

  const scrollToContact = (matterType?: string) => {
    if (matterType) {
      setSelectedMatter(matterType);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectArea = (area: PracticeArea) => {
    scrollToContact(area.title);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-900 font-sans selection:bg-[#c5a059] selection:text-[#070c1b]">
      {/* Top Header & Sticky Navigation */}
      <Header onConsultClick={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with H1, Trust Strip and Direct CTAs */}
        <Hero onConsultClick={() => scrollToContact()} />

        {/* Section 10: Meet Advocate Arpit Dua (About, Timeline, Photo, Quote) */}
        <AboutSection onConsultClick={() => scrollToContact()} />

        {/* Section 11: A First-Generation Lawyer. A Litigation-First Approach */}
        <FirstGenSection />

        {/* Section 12: Areas of Legal Practice (6 verified litigation areas) */}
        <PracticeAreas
          onSelectArea={handleSelectArea}
          onConsultClick={(title) => scrollToContact(title)}
        />

        {/* Section 13: How Can We Help? (5 Situational Guides & Checklists) */}
        <HowCanWeHelp onConsultClick={(cat) => scrollToContact(cat)} />

        {/* Section 14: The 5-Step Approach Process */}
        <ApproachSection />

        {/* Section 16: Dedicated High Court Section */}
        <HighCourtSection onConsultClick={() => scrollToContact('High Court Litigation')} />

        {/* Section 15: Beyond the Brief (Access to Justice & Pro-bono) */}
        <BeyondTheBrief />

        {/* Section 17: Areas Served (Chandigarh, Mohali, Panchkula, Yamunanagar) */}
        <ServiceAreas />

        {/* Section 18: Legal Articles & Insights (Full Text Available) */}
        <ArticlesSection onConsultClick={(topic) => scrollToContact(topic)} />

        {/* Section 19: Frequently Asked Questions (AEO & User Clarity) */}
        <FaqSection />

        {/* Section 20: Contact & Consultation (Form, NAP, Maps) */}
        <ContactSection initialMatter={selectedMatter} />
      </main>

      {/* Section 21: Full Legal Footer & Bar Council Disclaimer */}
      <Footer />

      {/* Section 22: Mobile Sticky Bottom Action Bar */}
      <MobileStickyBar />
    </div>
  );
}

