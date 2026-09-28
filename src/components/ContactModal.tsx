"use client";

import { useState } from "react";
import { X, Calendar, MapPin, Video, CheckCircle2, ShieldCheck } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  therapistName?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  therapistName = "Dr. Maya Reynolds, PsyD",
}: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "in-person",
    service: "anxiety",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s or let user close
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E5DDD3] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#3D5A4C] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-2xl font-medium tracking-tight">
              Request a Consultation
            </h3>
            <p className="text-xs text-[#E8EFEA] mt-0.5">
              With {therapistName} • Santa Monica, CA & Telehealth
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E8EFEA] text-[#3D5A4C] flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl text-[#232624]">
                Consultation Request Received
              </h4>
              <p className="text-sm text-[#666B66] max-w-sm mx-auto leading-relaxed">
                Thank you, {form.name || "there"}. Dr. Maya Reynolds’ practice will review your message and reach out within 24–48 business hours to discuss session availability.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#3D5A4C] text-white text-sm font-medium hover:bg-[#2D4539] transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-2 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    form.type === "in-person"
                      ? "border-[#3D5A4C] bg-[#E8EFEA] text-[#232624] font-medium"
                      : "border-[#E5DDD3] bg-white text-[#666B66]"
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    value="in-person"
                    checked={form.type === "in-person"}
                    onChange={() => setForm({ ...form, type: "in-person" })}
                    className="sr-only"
                  />
                  <MapPin className="w-4 h-4 text-[#3D5A4C] shrink-0" />
                  <span>In-Person (Santa Monica)</span>
                </label>

                <label
                  className={`flex items-center gap-2 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    form.type === "telehealth"
                      ? "border-[#3D5A4C] bg-[#E8EFEA] text-[#232624] font-medium"
                      : "border-[#E5DDD3] bg-white text-[#666B66]"
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    value="telehealth"
                    checked={form.type === "telehealth"}
                    onChange={() => setForm({ ...form, type: "telehealth" })}
                    className="sr-only"
                  />
                  <Video className="w-4 h-4 text-[#3D5A4C] shrink-0" />
                  <span>Secure Telehealth (CA)</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#474D49] uppercase tracking-wider mb-1.5">
                  Area of Primary Focus
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DDD3] bg-white text-sm text-[#232624] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]/30"
                >
                  <option value="anxiety">Anxiety & Panic Therapy</option>
                  <option value="trauma">Trauma Recovery & EMDR</option>
                  <option value="burnout">Professional Burnout & High-Achiever Support</option>
                  <option value="general">Comprehensive Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#474D49] uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#E5DDD3] bg-white text-sm text-[#232624] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#474D49] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#E5DDD3] bg-white text-sm text-[#232624] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#474D49] uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(310) 555-0192"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#E5DDD3] bg-white text-sm text-[#232624] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#474D49] uppercase tracking-wider mb-1">
                  Brief Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share a brief overview of what you're seeking support with..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#E5DDD3] bg-white text-sm text-[#232624] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]/30 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1 text-[11px] text-[#7A827C]">
                <ShieldCheck className="w-4 h-4 text-[#3D5A4C]" />
                <span>100% Confidential & HIPAA-Compliant Inquiry</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#3D5A4C] hover:bg-[#2D4539] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
                >
                  Submit Consultation Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
