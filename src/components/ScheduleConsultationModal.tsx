import React, { useState, useEffect } from 'react';
import { 
  X, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Scale, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  User,
  Mail,
  Building2,
  ExternalLink
} from 'lucide-react';
import { ADVOCATE_CONFIG, PRACTICE_AREAS } from '../data/advocateData';

interface ScheduleConsultationModalProps {
  isOpen: boolean;
  initialMatter?: string;
  onClose: () => void;
}

export const ScheduleConsultationModal: React.FC<ScheduleConsultationModalProps> = ({
  isOpen,
  initialMatter = 'High Court Litigation',
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Chandigarh',
    matterType: initialMatter,
    consultationMode: 'office',
    urgency: 'within_48h',
    caseBrief: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});

  // Synchronize initialMatter when opened
  useEffect(() => {
    if (initialMatter) {
      setFormData(prev => ({ ...prev, matterType: initialMatter }));
    }
  }, [initialMatter, isOpen]);

  // Handle modal backdrop and escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setIsSubmitted(false);
      setErrors({});
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { fullName?: string; phone?: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateReferenceId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `AD-${new Date().getFullYear()}-${random}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const newRefId = generateReferenceId();
    setRefId(newRefId);

    // Save lead to localStorage for persistence
    try {
      const existingLeadsStr = localStorage.getItem('advocate_consultation_leads') || '[]';
      const leads = JSON.parse(existingLeadsStr);
      leads.unshift({
        refId: newRefId,
        timestamp: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('advocate_consultation_leads', JSON.stringify(leads.slice(0, 50)));
    } catch {
      // ignore storage limitations
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleWhatsAppDirectSend = () => {
    const modeLabel = formData.consultationMode === 'office' 
      ? 'In-Person Chamber Conference (Sector 43-B)' 
      : formData.consultationMode === 'phone' 
      ? 'Telephone / WhatsApp Audio' 
      : 'High Court Campus Conference';

    const urgencyLabel = formData.urgency === 'urgent_24h' 
      ? 'URGENT (Within 24 Hours / Today)' 
      : formData.urgency === 'within_48h' 
      ? 'Within 24-48 Hours' 
      : 'Standard Scheduling';

    const text = `*New Legal Consultation Request [${refId || 'Direct'}]*
---------------------------------------
• *Name:* ${formData.fullName}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email || 'Not provided'}
• *Location:* ${formData.city}
• *Matter Category:* ${formData.matterType}
• *Preferred Mode:* ${modeLabel}
• *Urgency:* ${urgencyLabel}
• *Brief Summary:* ${formData.caseBrief || 'Preliminary discussion requested.'}
---------------------------------------
Advocate Arpit Dua, please let me know your available conference slot.`;

    const url = `https://wa.me/918059288086?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] bg-[#070c1b] text-white rounded-2xl shadow-2xl border border-[#c5a059]/40 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 px-5 sm:px-7 py-4 bg-[#0b132b] border-b border-[#c5a059]/25 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/35 text-[#d4af37]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 id="consultation-modal-title" className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide">
                Schedule a Legal Consultation
              </h2>
              <p className="text-xs text-slate-300 font-sans">
                Chambers of Advocate Arpit Dua • Sector 43-B, Chandigarh
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c5a059] cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Form or Success */}
        <div className="overflow-y-auto px-5 sm:px-7 py-6 space-y-6 font-sans scrollbar-thin scrollbar-thumb-slate-800">
          {isSubmitted ? (
            /* Submission Confirmation Screen */
            <div className="py-6 sm:py-8 space-y-6 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#e2c882]">
                  Consultation Request Logged
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Thank You, {formData.fullName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Your consultation request for <strong className="text-white">{formData.matterType}</strong> has been received under Reference ID: <span className="font-mono text-[#e2c882] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-bold">{refId}</span>.
                </p>
              </div>

              {/* Action Buttons for Lead Conversion */}
              <div className="bg-[#0b132b] border border-[#c5a059]/30 rounded-xl p-5 max-w-lg mx-auto space-y-3.5 text-left">
                <span className="text-xs font-semibold text-slate-300 block">
                  Recommended Immediate Step:
                </span>
                
                {/* Send on WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppDirectSend}
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#070c1b] font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Brief to Advocate via WhatsApp</span>
                </button>

                {/* Direct Call Button */}
                <a
                  href={ADVOCATE_CONFIG.telUrl}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-colors block text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Or Call Directly: {ADVOCATE_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            /* Consultation Lead Generation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Trust Badge Banner */}
              <div className="p-3.5 rounded-xl bg-[#0b132b] border border-[#c5a059]/25 flex items-start gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white">Advocate-Client Privilege:</strong> All case disclosures, personal details, and documents are held in strict professional confidence under statutory bar rules.
                </p>
              </div>

              {/* Step 1: Client Information */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#e2c882] flex items-center gap-2 pb-1 border-b border-slate-800">
                  <User className="w-3.5 h-3.5" />
                  <span>1. Contact Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-name" className="text-xs font-medium text-slate-300 flex items-center gap-1">
                      Full Name <span className="text-[#c5a059]">*</span>
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#c5a059] transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-phone" className="text-xs font-medium text-slate-300 flex items-center gap-1">
                      Phone / WhatsApp <span className="text-[#c5a059]">*</span>
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#c5a059] transition-all ${
                        errors.phone ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-email" className="text-xs font-medium text-slate-300">
                      Email Address <span className="text-slate-500 text-[10px]">(Optional)</span>
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      placeholder="e.g. client@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#c5a059] transition-all"
                    />
                  </div>

                  {/* City / Service Area */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-city" className="text-xs font-medium text-slate-300">
                      Your City / Location
                    </label>
                    <select
                      id="modal-city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#c5a059] transition-all"
                    >
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Mohali">Mohali (SAS Nagar)</option>
                      <option value="Panchkula">Panchkula</option>
                      <option value="Yamunanagar">Yamunanagar</option>
                      <option value="Other Punjab / Haryana">Other Punjab / Haryana District</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="NRI / Overseas">NRI / Overseas Client</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Legal Matter Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#e2c882] flex items-center gap-2 pb-1 border-b border-slate-800">
                  <Scale className="w-3.5 h-3.5" />
                  <span>2. Legal Matter &amp; Preference</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Matter Category */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="modal-matter" className="text-xs font-medium text-slate-300">
                      Primary Subject of Inquiry
                    </label>
                    <select
                      id="modal-matter"
                      value={formData.matterType}
                      onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#c5a059] transition-all"
                    >
                      <option value="High Court Litigation">High Court Litigation (Appeals / Writs / Revisions)</option>
                      <option value="Criminal Defense & Bail (Sec 438/439 CrPC)">Criminal Defense &amp; Anticipatory / Regular Bail</option>
                      <option value="Quashing Petitions (Sec 482 CrPC / BNSS)">FIR Quashing &amp; High Court Petitions</option>
                      <option value="Civil & Property Disputes (Partition / Injunctions)">Civil, Property, Partition &amp; Title Injunctions</option>
                      <option value="Cheque Bounce & Commercial (Sec 138 NI Act)">Cheque Dishonour (Sec 138 NI Act) &amp; Commercial Recovery</option>
                      <option value="Matrimonial & Family Dispute Resolution">Matrimonial, Maintenance &amp; Family Mediation</option>
                      <option value="Corporate Contracts & Specific Performance">Commercial Contracts &amp; Agreement Enforcement</option>
                      <option value="General Legal Advisory">General Legal Advisory / Documentation</option>
                    </select>
                  </div>

                  {/* Preferred Mode */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Consultation Format
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationMode: 'office' })}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                          formData.consultationMode === 'office'
                            ? 'bg-[#c5a059]/20 border-[#c5a059] text-white'
                            : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span className="font-semibold block text-white text-[11px]">Chamber Meet</span>
                        <span className="text-[10px] text-slate-400">Sector 43-B, Chandigarh</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationMode: 'phone' })}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                          formData.consultationMode === 'phone'
                            ? 'bg-[#c5a059]/20 border-[#c5a059] text-white'
                            : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span className="font-semibold block text-white text-[11px]">Phone / Video</span>
                        <span className="text-[10px] text-slate-400">Telephonic Briefing</span>
                      </button>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-urgency" className="text-xs font-medium text-slate-300 block">
                      Timeframe / Urgency
                    </label>
                    <select
                      id="modal-urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#c5a059] transition-all"
                    >
                      <option value="urgent_24h">Urgent — Within 24 Hours (Immediate Hearing / Apprehension)</option>
                      <option value="within_48h">Within 24 to 48 Hours</option>
                      <option value="standard">This Week / General Scheduling</option>
                    </select>
                  </div>
                </div>

                {/* Case Brief */}
                <div className="space-y-1.5">
                  <label htmlFor="modal-brief" className="text-xs font-medium text-slate-300 flex items-center justify-between">
                    <span>Brief Case Summary / Particulars</span>
                    <span className="text-slate-500 text-[11px]">e.g. Current court stage, FIR/Suit No.</span>
                  </label>
                  <textarea
                    id="modal-brief"
                    rows={3}
                    placeholder="Provide a brief outline of the dispute, court stage, or notice received..."
                    value={formData.caseBrief}
                    onChange={(e) => setFormData({ ...formData, caseBrief: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#c5a059] transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Buttons & Call Link */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d4af37] hover:from-[#d4af37] hover:to-[#e2c882] text-[#070c1b] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Details...</span>
                  ) : (
                    <>
                      <span>Confirm &amp; Book Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span>Need instant emergency assistance?</span>
                  <a
                    href={ADVOCATE_CONFIG.telUrl}
                    className="text-[#e2c882] hover:underline font-semibold flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call +91 80592 88086</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
