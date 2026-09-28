"use client";

import Image from "next/image";
import { MapPin, Sun, Shield, HeartHandshake, CheckCircle2, Video } from "lucide-react";

interface OfficeSectionProps {
  onOpenBooking: () => void;
}

export default function OfficeSection({ onOpenBooking }: OfficeSectionProps) {
  return (
    <section
      id="office"
      className="py-20 lg:py-28 bg-[#F4EFEA] border-y border-[#E5DDD3] relative overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8EFEA]/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FBF0EB]/80 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EFEA] border border-[#3D5A4C]/20 text-[#3D5A4C] text-xs font-semibold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#C27453]" />
            <span>Santa Monica, California Practice Space</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E2421] leading-tight mb-5">
            A Calm, Grounding Space for Meaningful Healing
          </h2>

          <p className="text-base sm:text-lg text-[#666B66] leading-relaxed font-sans">
            Therapy begins the moment you step through the door. Designed with intentional warmth, natural light, and quiet privacy, our Santa Monica office offers an uncluttered sanctuary where you can pause, breathe, and feel genuinely safe to explore what matters most.
          </p>
        </div>

        {/* Office Photo Showcase & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Main Large Office Photo (office1.jpeg from Dr. Maya Reynolds' profile) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-xl border border-[#E5DDD3] group">
              <Image
                src="/images/maya/office1.jpeg"
                alt="Dr. Maya Reynolds Santa Monica Therapy Office - Comfortable Seating and Natural Light"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium mb-1.5">
                  Primary Therapy Room
                </span>
                <p className="font-serif text-lg sm:text-xl font-medium">
                  Designed for comfort, grounding, and nervous system regulation
                </p>
              </div>
            </div>
            <p className="text-xs text-[#7A827C] italic text-center sm:text-left">
              * Actual therapy space at 123th Street 45 W, Santa Monica, CA 90401
            </p>
          </div>

          {/* Secondary Photo & Office Experience Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Secondary Photo (office2.jpeg from Dr. Maya Reynolds' profile) */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#E5DDD3] group">
              <Image
                src="/images/maya/office2.jpeg"
                alt="Dr. Maya Reynolds Quiet Reception and Consultation Area"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <span className="text-xs font-medium bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  Quiet Entry & Private Seating
                </span>
              </div>
            </div>

            {/* Atmosphere Details Quote */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD3] shadow-soft">
              <blockquote className="text-[#363B38] text-sm sm:text-base leading-relaxed italic mb-3">
                “Clients often share that the space itself helps them exhale and feel more at ease the moment they arrive. In a fast-paced coastal environment, having an unhurried, private setting makes all the difference in psychological safety.”
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0 border border-[#3D5A4C]">
                  <Image
                    src="/images/maya/maya_reynolds.png"
                    alt="Dr. Maya Reynolds, PsyD"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1E2421]">
                    Dr. Maya Reynolds, PsyD
                  </div>
                  <div className="text-[11px] text-[#7A827C]">
                    Licensed Clinical Psychologist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Office Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-white border border-[#E5DDD3] shadow-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#E8EFEA] text-[#3D5A4C] flex items-center justify-center mb-4">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#1E2421] mb-2">
              Natural Light & Grounding
            </h3>
            <p className="text-sm text-[#666B66] leading-relaxed">
              Expansive windows, living plants, warm organic textiles, and gentle lighting foster an environment conducive to slowing down and processing deep emotions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DDD3] shadow-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#FBF0EB] text-[#C27453] flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#1E2421] mb-2">
              Privacy, Comfort & Discretion
            </h3>
            <p className="text-sm text-[#666B66] leading-relaxed">
              Enhanced acoustic privacy, sound masking, and private scheduling ensure that your sessions remain completely confidential, safe, and undisturbed.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DDD3] shadow-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#E8EFEA] text-[#3D5A4C] flex items-center justify-center mb-4">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#1E2421] mb-2">
              In-Person & Hybrid Flexibility
            </h3>
            <p className="text-sm text-[#666B66] leading-relaxed">
              Conveniently located for Santa Monica, Brentwood, Venice, and West LA residents, with seamless hybrid telehealth options across all of California.
            </p>
          </div>
        </div>

        {/* Location Banner with CTA */}
        <div className="bg-[#3D5A4C] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-[#D48464]">
              <MapPin className="w-4 h-4" />
              <span>Office Location & Hours</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-medium">
              123th Street 45 W, Santa Monica, CA 90401
            </h4>
            <p className="text-sm text-[#E8EFEA] max-w-xl">
              Appointments available Monday through Friday. Convenient street & structure parking available. Hybrid in-person and California telehealth options.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-full bg-[#C27453] hover:bg-[#B36444] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all text-center"
            >
              Book an In-Person Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
