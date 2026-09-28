"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#FAF7F2] text-[#232624] border-t border-[#E5DDD3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-footer message & 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#E5DDD3]">
          {/* Column 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-[#3D5A4C] shadow-sm">
                <Image
                  src="/images/maya/maya_reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-[#1E2421]">
                  Dr. Maya Reynolds, PsyD
                </h3>
                <p className="text-xs text-[#727974] uppercase tracking-wider font-sans">
                  Licensed Clinical Psychologist
                </p>
              </div>
            </div>

            <p className="text-sm text-[#666B66] leading-relaxed pt-2">
              We want to make getting started simple. You’re welcome to come into our warm, private office in Santa Monica or schedule secure virtual sessions from anywhere in California—whatever supports your life best.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full bg-[#3D5A4C] hover:bg-[#2D4539] text-white text-xs font-semibold tracking-wide shadow-sm transition-all"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#1E2421] tracking-widest uppercase">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-[#555B57]">
              <li>
                <Link href="#hero" className="hover:text-[#3D5A4C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#3D5A4C] transition-colors">
                  About Dr. Maya
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#3D5A4C] transition-colors">
                  Specialties
                </Link>
              </li>
              <li>
                <Link href="#office" className="hover:text-[#3D5A4C] transition-colors font-medium text-[#3D5A4C]">
                  Our Santa Monica Office
                </Link>
              </li>
              <li>
                <Link href="#approach" className="hover:text-[#3D5A4C] transition-colors">
                  Approach & Modalities
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-[#3D5A4C] transition-colors">
                  FAQs & Fees
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialties (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#1E2421] tracking-widest uppercase">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-sm text-[#555B57]">
              <li>
                <Link href="#services" className="hover:text-[#3D5A4C] transition-colors">
                  Anxiety & Panic Therapy
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#3D5A4C] transition-colors">
                  EMDR & Trauma Processing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#3D5A4C] transition-colors">
                  Burnout & Perfectionism
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#3D5A4C] transition-colors">
                  High-Achievers & Entrepreneurs
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#3D5A4C] transition-colors">
                  Nervous System Somatic Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#3D5A4C] transition-colors">
                  California Statewide Telehealth
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#1E2421] tracking-widest uppercase">
              Location & Contact
            </h4>
            <div className="text-sm text-[#555B57] space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C27453] shrink-0 mt-0.5" />
                <span>
                  123th Street 45 W<br />
                  Santa Monica, CA 90401
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C27453] shrink-0" />
                <a
                  href="mailto:contact@drmayareynolds.com"
                  className="hover:text-[#3D5A4C] transition-colors"
                >
                  contact@drmayareynolds.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C27453] shrink-0" />
                <span>(310) 892-4100</span>
              </div>
              <div className="pt-2 text-xs text-[#7A827C]">
                Serving Santa Monica, Venice, Brentwood, Pacific Palisades, Westwood, Beverly Hills, and all of California online.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A827C]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</span>
            <span>•</span>
            <Link href="#faqs" className="hover:text-[#3D5A4C]">Privacy Policy</Link>
            <span>•</span>
            <Link href="#faqs" className="hover:text-[#3D5A4C]">Good Faith Estimate</Link>
            <span>•</span>
            <Link href="#faqs" className="hover:text-[#3D5A4C]">Terms of Service</Link>
          </div>

          <div className="flex items-center gap-2">
            <span>Designed for Grow My Therapy Internship Selection</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
