"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  Shield,
  Heart,
  Brain,
  CheckCircle2,
  Video,
  Award,
} from "lucide-react";
import TopbarBanner from "@/components/TopbarBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OfficeSection from "@/components/OfficeSection";
import FAQAccordion from "@/components/FAQAccordion";
import ContactModal from "@/components/ContactModal";

export default function RedesignedMayaPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#232624]">
      {/* Topbar Evaluation Switcher */}
      <TopbarBanner />

      {/* Main Header */}
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-grow">
        {/* SECTION 2: HERO SECTION */}
        <section
          id="hero"
          className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Copy & Actions (7 cols) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EFEA] border border-[#3D5A4C]/20 text-[#3D5A4C] text-xs font-semibold tracking-widest-sub uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#C27453]" />
                  <span>In-Person in Santa Monica & Statewide CA Telehealth</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1E2421] leading-[1.12] tracking-tight">
                  Quiet the internal noise, heal from within, and finally begin to{" "}
                  <span className="italic font-normal text-[#3D5A4C]">thrive.</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-[#5F6662] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
                  Specialized, evidence-based therapy for thoughtful adults, high-achievers, and creatives in Santa Monica. Combining EMDR, CBT, and somatic regulation to overcome anxiety, trauma, and burnout.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#3D5A4C] hover:bg-[#2D4539] text-white text-sm sm:text-base font-semibold tracking-wide shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#D48464]" />
                    <span>Book a Consultation</span>
                  </button>

                  <Link
                    href="#office"
                    className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#D5CCC1] bg-white hover:bg-[#FAF7F2] text-[#232624] text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <span>Tour Our Santa Monica Office</span>
                    <ArrowRight className="w-4 h-4 text-[#C27453]" />
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-[#E5DDD3] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#727974]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3D5A4C]" />
                    <span>Licensed Clinical Psychologist (PsyD)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3D5A4C]" />
                    <span>Certified EMDR Provider</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3D5A4C]" />
                    <span>Confidential & HIPAA Compliant</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Arch Composition (5 cols) */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
                  {/* Primary Arched Image: Dr. Maya Reynolds Portrait */}
                  <div className="relative w-72 sm:w-80 lg:w-88 aspect-[3/4] arch-top overflow-hidden shadow-2xl border-4 border-white mx-auto z-10">
                    <Image
                      src="/images/maya/maya_reynolds.png"
                      alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                      <span className="text-xs uppercase tracking-widest font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                        Dr. Maya Reynolds, PsyD
                      </span>
                    </div>
                  </div>

                  {/* Overlapping Secondary Image: Calming Office / Architectural Arch */}
                  <div className="hidden sm:block absolute -bottom-8 -right-4 w-48 sm:w-56 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20">
                    <Image
                      src="/images/maya/office1.jpeg"
                      alt="Dr. Maya Reynolds Calm Therapy Office Space"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Floating Experience Tag */}
                  <div className="absolute -top-4 -left-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#E5DDD3] z-30 flex items-center gap-2.5 text-xs font-semibold text-[#1E2421]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3D5A4C] animate-pulse" />
                    <span>Accepting In-Person & Virtual Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOPE & RELIEF INTRO SECTION */}
        <section
          id="about"
          className="py-20 lg:py-28 bg-[#F4ECE6] border-y border-[#E9DFD8]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Frame */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                  <Image
                    src="/images/maya/maya_work_bg.jpg"
                    alt="Warm sunlit sanctuary for psychological reflection and somatic healing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#3D5A4C]/10" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-md text-xs text-[#232624]">
                    <p className="font-serif text-sm font-semibold text-[#3D5A4C] mb-0.5">
                      Collaborative & Grounded Therapy
                    </p>
                    <p className="text-[#666B66]">
                      Paced with care, psychological safety, and deep respect for your story.
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E2421] leading-tight">
                  You’re holding onto hope that life can feel lighter and more grounded than it does right now.
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[#555B57] leading-relaxed font-sans">
                  <p className="font-medium text-[#232624]">
                    At Dr. Maya Reynolds’ practice, we want to help make that hope a lived reality.
                  </p>
                  <p>
                    I’m a licensed clinical psychologist based in Santa Monica, California, offering specialized therapy for adults who feel weighed down by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and deeply self-aware—yet internally feel exhausted, stuck in perpetual overthinking, or emotionally on edge.
                  </p>
                  <p>
                    First and foremost, we believe what you’re experiencing is real, valid, and worthy of compassionate, expert support. Whether you are navigating professional burnout, managing panic, or processing traumatic memories, we provide a structured yet deeply safe sanctuary to help you reconnect with yourself and discover a transformative path forward.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-6 py-3 rounded-full bg-[#3D5A4C] hover:bg-[#2D4539] text-white text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all"
                  >
                    Schedule a Confidential Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHO WE HELP (3 AUDIENCE CARDS) */}
        <section className="py-20 lg:py-28 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C27453] mb-2 block">
                Targeted Care for Adults & Professionals
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E2421]">
                Who We Help
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Adults & Anxiety */}
              <div className="bg-white rounded-3xl overflow-hidden border border-[#E5DDD3] shadow-card hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/images/maya/maya_anxiety.jpg"
                    alt="Adult feeling calm and relieved from chronic anxiety in therapy"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#1E2421] mb-2">
                      Adults with Anxiety & Worry
                    </h3>
                    <p className="text-sm sm:text-base text-[#666B66] leading-relaxed">
                      Feeling functional on the outside while quietly struggling with panic, sleepless nights, physical tension, or constant anticipatory dread? We address the root causes of anxiety to bring lasting nervous system relief.
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-semibold text-[#3D5A4C] flex items-center gap-1">
                    <span>Evidence-based CBT & Somatics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card 2: Trauma Survivors & EMDR */}
              <div className="bg-white rounded-3xl overflow-hidden border border-[#E5DDD3] shadow-card hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/images/maya/maya_trauma.jpg"
                    alt="Restoring psychological safety and emotional balance through EMDR trauma recovery"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#1E2421] mb-2">
                      Trauma & Past Experiences
                    </h3>
                    <p className="text-sm sm:text-base text-[#666B66] leading-relaxed">
                      Navigating the persistent ripples of single-incident trauma or complex relationship wounds? We use paced, specialized EMDR therapy to safely reprocess painful memories so they no longer control your daily life.
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-semibold text-[#3D5A4C] flex items-center gap-1">
                    <span>Stabilization & Memory Reprocessing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card 3: High-Achievers & Burnout */}
              <div className="bg-white rounded-3xl overflow-hidden border border-[#E5DDD3] shadow-card hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/images/maya/maya_burnout.jpg"
                    alt="Professional taking a reflective pause from burnout in Santa Monica"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#1E2421] mb-2">
                      Professionals & High-Achievers
                    </h3>
                    <p className="text-sm sm:text-base text-[#666B66] leading-relaxed">
                      Are you an entrepreneur, creative, or executive exhausted after years of pushing through relentless pressure? We offer a confidential space to deconstruct perfectionism and establish sustainable ways of living and leading.
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-semibold text-[#3D5A4C] flex items-center gap-1">
                    <span>Burnout Recovery & Sustainable Success</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FULL-WIDTH QUOTE BANNER */}
        <section className="relative py-28 lg:py-36 bg-[#1E2421] text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/maya/maya_quote_bg.jpg"
              alt="Serene coastal California horizon background"
              fill
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E2421] via-[#1E2421]/90 to-[#1E2421]" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
            <span className="inline-block text-xs uppercase tracking-widest text-[#D48464] font-semibold">
              Our Core Philosophy
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-[#F4EFEA]">
              “You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.”
            </blockquote>
            <p className="text-sm font-sans text-[#C5D0C9] tracking-wide">
              — Dr. Maya Reynolds, PsyD • Licensed Clinical Psychologist
            </p>
          </div>
        </section>

        {/* SECTION 6: AREAS OF EXPERTISE (INTERACTIVE PILL BADGES) */}
        <section className="py-14 bg-white border-b border-[#E5DDD3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1E2421] mb-6">
              Our Areas of Clinical Expertise
            </h3>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
              {[
                "Anxiety & Panic Disorders",
                "EMDR Trauma Therapy",
                "Single-Incident Trauma",
                "Complex & Relational Trauma",
                "Executive & Founder Burnout",
                "High-Achiever Perfectionism",
                "Mindfulness-Based Practices",
                "Cognitive Behavioral Therapy (CBT)",
                "Body-Oriented Somatics",
                "Nervous System Regulation",
                "Santa Monica In-Person Sessions",
                "California Statewide Telehealth",
              ].map((area, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#FAF7F2] text-[#363B38] border border-[#E5DDD3] hover:border-[#3D5A4C] hover:bg-[#E8EFEA] hover:text-[#3D5A4C] transition-all cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: HOW WE WORK (ABOUT & MODALITIES) */}
        <section id="approach" className="py-20 lg:py-28 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Copy (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold tracking-widest uppercase text-[#C27453]">
                  HOW WE WORK
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E2421] leading-tight">
                  We’re here to make a lasting difference in your life.
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[#555B57] leading-relaxed">
                  <p className="font-medium text-[#232624]">
                    The clients I work with balance so many complex responsibilities at once, it is often challenging for them to put themselves first.
                  </p>
                  <p>
                    Here, your needs, boundaries, and emotional well-being are always the top priority. I take the time to deeply listen in order to understand your unique lived experience. We recognize that no two individuals are the same, and personalized psychological care requires an intentional, tailored approach. You won’t find anything rigid or “one-size-fits-all” here.
                  </p>
                  <p>
                    Sessions combine structured evidence-based methods—including Cognitive Behavioral Therapy (CBT), EMDR, and somatic grounding—with exploratory depth. Sometimes we gently challenge long-standing assumptions; other times we explore the physiological roots of tension in your body. My goal is to walk alongside you as you uncover your inherent resilience and cultivate lasting clarity.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-6 py-3.5 rounded-full bg-[#3D5A4C] hover:bg-[#2D4539] text-white text-sm font-semibold tracking-wide shadow-md transition-all"
                  >
                    Learn More About Working Together
                  </button>
                  <Link
                    href="#faqs"
                    className="text-sm font-semibold text-[#3D5A4C] hover:text-[#2D4539] underline underline-offset-4"
                  >
                    Read Common Questions & Fees
                  </Link>
                </div>
              </div>

              {/* Image (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-[3/4] arch-top rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/maya/maya_hero_texture.jpg"
                    alt="Calm, natural light interior representing mindfulness and therapy depth"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs uppercase font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                      Mindful, Evidence-Based Methods
                    </span>
                    <p className="font-serif text-lg font-medium mt-2">
                      CBT • EMDR • Somatic Body-Oriented Techniques
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: INSPIRATIONAL BANNER */}
        <section className="relative py-20 lg:py-28 bg-[#3D5A4C] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Honoring where you’ve been & helping shape where you’re headed.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#E8EFEA] max-w-2xl mx-auto">
              Healing doesn’t mean forgetting the past; it means understanding your story with kindness and rebuilding your life on solid ground.
            </p>
          </div>
        </section>

        {/* SECTION 9: SPECIALTIES CARDS (STRICTLY FROM MAYA PROFILE) */}
        <section id="services" className="py-20 lg:py-28 bg-white border-b border-[#E5DDD3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C27453] mb-2 block">
                Evidence-Based Modalities
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E2421]">
                Our Specialties Include…
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Specialty 1: Anxiety & Panic */}
              <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DDD3] hover:border-[#3D5A4C] shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8EFEA] text-[#3D5A4C] flex items-center justify-center">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-[#1E2421]">
                    Anxiety & Panic
                  </h4>
                  <p className="text-sm text-[#5F6662] leading-relaxed">
                    Overcome constant worry, nervous system arousal, sleep disruptions, and panic symptoms through Cognitive Behavioral Therapy (CBT) and somatic body-oriented grounding.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="text-xs font-semibold text-[#3D5A4C] hover:text-[#2D4539] flex items-center gap-1.5"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C27453]" />
                  </button>
                </div>
              </div>

              {/* Specialty 2: Trauma & EMDR */}
              <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DDD3] hover:border-[#3D5A4C] shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FBF0EB] text-[#C27453] flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-[#1E2421]">
                    Trauma Recovery (EMDR)
                  </h4>
                  <p className="text-sm text-[#5F6662] leading-relaxed">
                    Carefully paced reprocessing of single-incident or complex childhood wounds. We prioritize stabilization and emotional regulation so you feel safe both inside and outside of sessions.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="text-xs font-semibold text-[#3D5A4C] hover:text-[#2D4539] flex items-center gap-1.5"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C27453]" />
                  </button>
                </div>
              </div>

              {/* Specialty 3: Burnout & High-Achievers */}
              <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DDD3] hover:border-[#3D5A4C] shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8EFEA] text-[#3D5A4C] flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-[#1E2421]">
                    Burnout & Perfectionism
                  </h4>
                  <p className="text-sm text-[#5F6662] leading-relaxed">
                    Tailored for entrepreneurs, executives, and creatives feeling disconnected from themselves after years of chronic stress. Learn to slow down and create sustainable life balance.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="text-xs font-semibold text-[#3D5A4C] hover:text-[#2D4539] flex items-center gap-1.5"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C27453]" />
                  </button>
                </div>
              </div>

              {/* Specialty 4: Somatics & Mindfulness */}
              <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DDD3] hover:border-[#3D5A4C] shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FBF0EB] text-[#C27453] flex items-center justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-[#1E2421]">
                    Somatic Grounding
                  </h4>
                  <p className="text-sm text-[#5F6662] leading-relaxed">
                    Integrate body awareness with cognitive insight. Learn physiological techniques to downshift fight-or-flight, release somatic tension, and experience calm in everyday moments.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="text-xs font-semibold text-[#3D5A4C] hover:text-[#2D4539] flex items-center gap-1.5"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C27453]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM NEW SECTION: PART 3 - "OUR OFFICE" */}
        <OfficeSection onOpenBooking={() => setBookingOpen(true)} />

        {/* SECTION 10: SCHEDULE AN APPOINTMENT (CTA SECTION) */}
        <section className="py-20 lg:py-28 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Overlapping Images (5 cols) */}
              <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-md">
                  <div className="relative w-72 sm:w-80 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/images/maya/office2.jpeg"
                      alt="Private and quiet seating in Santa Monica counseling office"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="hidden sm:block absolute -bottom-6 -right-4 w-48 sm:w-52 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <Image
                      src="/images/maya/maya_cta_calm.jpg"
                      alt="Comfortable setting for emotional healing and self-discovery"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text & Button (7 cols) */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="text-xs font-bold tracking-widest uppercase text-[#C27453]">
                  SCHEDULE AN APPOINTMENT
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E2421] leading-tight">
                  Find a psychologist who is the right fit for your journey.
                </h2>

                <p className="text-base sm:text-lg text-[#555B57] leading-relaxed">
                  Choosing to enter therapy is a courageous decision. Connecting with a psychologist who genuinely understands your world makes all the difference. In my Santa Monica office and through virtual appointments across California, I am here to support you with unwavering presence, clinical depth, and warmth.
                </p>

                <p className="text-sm sm:text-base text-[#666B66]">
                  Take the first step today. We will begin with a free consultation call to discuss your needs and ensure we are a good mutual fit.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-8 py-4 rounded-full bg-[#3D5A4C] hover:bg-[#2D4539] text-white text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
                  >
                    Book Your Initial Consultation
                  </button>
                  <Link
                    href="#office"
                    className="px-7 py-4 rounded-full border border-[#D5CCC1] bg-white hover:bg-[#FAF7F2] text-[#232624] text-base font-semibold text-center transition-all"
                  >
                    Office Location & Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
        <section id="faqs" className="py-20 lg:py-28 bg-[#F4ECE6] border-t border-[#E9DFD8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C27453] mb-2 block">
                Clear Answers & Practical Details
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E2421]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#666B66]">
                Everything you need to know about starting therapy with Dr. Maya Reynolds.
              </p>
            </div>

            <FAQAccordion />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* Booking Consultation Modal */}
      <ContactModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        therapistName="Dr. Maya Reynolds, PsyD"
      />
    </div>
  );
}
