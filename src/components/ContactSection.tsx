import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';
import { ADVOCATE_CONFIG, PRACTICE_AREAS } from '../data/advocateData';
import { ConsultationFormData } from '../types';

interface ContactSectionProps {
  initialMatter?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMatter = '' }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    matterType: initialMatter || 'High Court Litigation',
    preferredContact: 'phone',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(ADVOCATE_CONFIG.officeAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Advocate Arpit Dua,\n\nName: ${formData.fullName || 'Not specified'}\nPhone: ${formData.phone || 'Not specified'}\nMatter: ${formData.matterType}\nMessage: ${formData.message || 'I would like to schedule a legal consultation.'}`;
    const url = `https://wa.me/918059288086?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#070c1b] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#d4af37] block mb-2">
            Chambers &amp; Appointments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Contact &amp; Consultation
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-slate-300 font-sans font-light leading-relaxed">
            Reach out to schedule an in-person chamber conference or telephone consultation regarding your legal matter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Details & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Cards */}
            <div className="bg-[#0b132b] border border-[#c5a059]/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white border-b border-slate-800 pb-4">
                Chamber Details
              </h3>

              {/* Direct Call */}
              <div className="flex items-start gap-4">
                <a
                  href={ADVOCATE_CONFIG.telUrl}
                  className="p-3 rounded-xl bg-[#c5a059]/15 text-[#d4af37] hover:bg-[#c5a059] hover:text-[#070c1b] transition-colors shrink-0"
                  aria-label="Call Advocate Arpit Dua"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-sans block">Direct Telephone</span>
                  <a
                    href={ADVOCATE_CONFIG.telUrl}
                    className="font-serif text-lg font-bold text-white hover:text-[#d4af37] transition-colors block"
                  >
                    {ADVOCATE_CONFIG.phoneDisplay}
                  </a>
                  <span className="text-[11px] text-[#c5a059] font-sans">Available 24 × 7 for urgent matters</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <a
                  href={ADVOCATE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors shrink-0"
                  aria-label="WhatsApp Advocate Arpit Dua"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-sans block">WhatsApp Consultation</span>
                  <a
                    href={ADVOCATE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base font-bold text-white hover:text-[#25D366] transition-colors block"
                  >
                    +91 {ADVOCATE_CONFIG.phone}
                  </a>
                  <span className="text-[11px] text-slate-400 font-sans">Quick replies &amp; brief discussions</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <a
                  href={ADVOCATE_CONFIG.emailUrl}
                  className="p-3 rounded-xl bg-[#c5a059]/15 text-[#d4af37] hover:bg-[#c5a059] hover:text-[#070c1b] transition-colors shrink-0"
                  aria-label="Email Advocate Arpit Dua"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-sans block">Official Email</span>
                  <a
                    href={ADVOCATE_CONFIG.emailUrl}
                    className="text-sm font-sans font-medium text-white hover:text-[#d4af37] transition-colors break-all block"
                  >
                    {ADVOCATE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-[#c5a059]/15 text-[#d4af37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="text-xs text-slate-400 font-sans block">Chamber Address</span>
                  <p className="text-sm font-sans text-slate-200 leading-snug">
                    {ADVOCATE_CONFIG.officeAddress}
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-[11px] text-[#d4af37] hover:underline cursor-pointer pt-1"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-[#c5a059]/15 text-[#d4af37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-sans block">Working Hours</span>
                  <p className="text-sm font-sans font-medium text-slate-200">
                    {ADVOCATE_CONFIG.workingHours}
                  </p>
                  <span className="text-[11px] text-slate-400 font-sans">
                    Appointments recommended for in-person chamber conferences
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps Chamber Location Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0b132b] shadow-xl">
              <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-sans font-bold text-slate-200 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Sector 43-B, Chandigarh Chamber</span>
                </span>
                <a
                  href="https://maps.google.com/?q=House+No.+1741/2,+Sector+43-B,+Chandigarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-sans font-bold text-[#d4af37] hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>
              <iframe
                title="Office Location Map - Advocate Arpit Dua Sector 43-B Chandigarh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13723.774438361099!2d76.74567879999999!3d30.7208889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0035cb5a79%3A0x6b4457e4e1a0a552!2sSector%2043-B%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1710600000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-90 contrast-125"
              />
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b132b] border border-[#c5a059]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              
              <div className="mb-6">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#d4af37] block mb-1">
                  Confidential Inquiry
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Request Legal Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                  Fill in your details below to coordinate a consultation regarding your matter.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-slate-900/90 border border-[#c5a059]/50 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#c5a059]/20 text-[#d4af37] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white">
                    Consultation Request Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Advocate Arpit Dua’s office will review your inquiry and get in touch with you shortly.
                  </p>
                  
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold font-sans uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Direct via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-sans cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Gurpreet Singh"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                      />
                    </div>

                    <div>
                      <label htmlFor="matterType" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nature of Legal Matter *
                      </label>
                      <select
                        id="matterType"
                        value={formData.matterType}
                        onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                      >
                        <option value="High Court Litigation">High Court Litigation (Writ/Revision/Quashing)</option>
                        <option value="Appellate Work">Appellate Work (Criminal or Civil Appeal)</option>
                        <option value="Bail Matters">Bail Matters (Regular or Anticipatory Bail)</option>
                        <option value="Criminal Proceedings">Criminal Proceedings &amp; Trial Defence</option>
                        <option value="Civil Proceedings">Civil Proceedings &amp; Injunctions</option>
                        <option value="Other Court Proceedings">Other District Court Proceedings</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Brief Summary of Matter *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize the current stage (e.g. FIR registered, summons issued, judgment challenged, or notice received)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                    />
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy Assurance:</strong> Information shared is kept strictly confidential and used solely for the purpose of scheduling and conducting your legal consultation.
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      id="submit-consultation-btn"
                      className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#b08a42] text-[#070c1b] text-xs font-bold uppercase tracking-wider hover:from-[#d4af37] hover:to-[#c5a059] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
