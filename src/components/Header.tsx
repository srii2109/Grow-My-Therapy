"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, MapPin, Calendar } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="bg-[#FAF7F2]/95 backdrop-blur-md sticky top-[41px] z-40 border-b border-[#E5DDD3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex flex-col text-left group">
            <span className="font-serif text-xl sm:text-2xl lg:text-2xl font-medium tracking-tight text-[#1E2421] group-hover:text-[#3D5A4C] transition-colors">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest text-[#727974] uppercase font-sans mt-0.5">
              Licensed Clinical Psychologist • Santa Monica, CA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#363B38]">
            <Link
              href="#about"
              className="hover:text-[#3D5A4C] transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#3D5A4C] transition-colors py-2">
                <span>Specialties</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-[#E5DDD3] py-2.5 animate-fadeIn z-50">
                  <Link
                    href="#services"
                    className="block px-4 py-2 hover:bg-[#FAF7F2] text-xs font-semibold text-[#1E2421] hover:text-[#3D5A4C]"
                  >
                    Anxiety & Panic Therapy
                    <span className="block text-[11px] font-normal text-[#666B66]">
                      Nervous system regulation & CBT
                    </span>
                  </Link>
                  <Link
                    href="#services"
                    className="block px-4 py-2 hover:bg-[#FAF7F2] text-xs font-semibold text-[#1E2421] hover:text-[#3D5A4C]"
                  >
                    Trauma Recovery & EMDR
                    <span className="block text-[11px] font-normal text-[#666B66]">
                      Single-incident & complex trauma
                    </span>
                  </Link>
                  <Link
                    href="#services"
                    className="block px-4 py-2 hover:bg-[#FAF7F2] text-xs font-semibold text-[#1E2421] hover:text-[#3D5A4C]"
                  >
                    Professional Burnout & Perfectionism
                    <span className="block text-[11px] font-normal text-[#666B66]">
                      For entrepreneurs & creatives
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#office"
              className="hover:text-[#3D5A4C] transition-colors flex items-center gap-1"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C27453]" />
              <span>Our Office</span>
            </Link>

            <Link
              href="#approach"
              className="hover:text-[#3D5A4C] transition-colors"
            >
              Approach
            </Link>

            <Link
              href="#faqs"
              className="hover:text-[#3D5A4C] transition-colors"
            >
              FAQs
            </Link>

            <Link
              href="#contact"
              className="hover:text-[#3D5A4C] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-[#3D5A4C] hover:bg-[#2D4539] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D48464]" />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#3D5A4C] text-white text-xs font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#232624] hover:bg-black/5"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E5DDD3] px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#232624]">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#3D5A4C]"
            >
              About Dr. Maya Reynolds
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#3D5A4C]"
            >
              Specialties (Anxiety, EMDR, Burnout)
            </Link>
            <Link
              href="#office"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#3D5A4C] flex items-center gap-2 font-semibold text-[#3D5A4C]"
            >
              <span className="w-2 h-2 rounded-full bg-[#C27453]" />
              Our Santa Monica Office (New Section)
            </Link>
            <Link
              href="#approach"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#3D5A4C]"
            >
              Therapeutic Approach & Modalities
            </Link>
            <Link
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#3D5A4C]"
            >
              Frequently Asked Questions
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#3D5A4C]"
            >
              Contact & Location
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#E5DDD3] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-[#3D5A4C] text-white text-sm font-semibold text-center shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D48464]" />
              <span>Book an Appointment</span>
            </button>
            <p className="text-center text-xs text-[#727974]">
              123th Street 45 W, Santa Monica, CA 90401 • In-Person & Telehealth
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
