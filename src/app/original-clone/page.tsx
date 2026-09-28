"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";
import TopbarBanner from "@/components/TopbarBanner";

export default function OriginalConejoClonePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teamDropdown, setTeamDropdown] = useState(false);
  const [specialtiesDropdown, setSpecialtiesDropdown] = useState(false);
  const [methodsDropdown, setMethodsDropdown] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#FBF7F4] text-[#473C38]">
      {/* Topbar Evaluation Switcher */}
      <TopbarBanner />

      {/* Conejo Valley Header */}
      <header className="bg-[#FBF7F4]/95 backdrop-blur-md sticky top-[41px] z-40 border-b border-[#E9DFD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <Link href="/original-clone" className="flex flex-col text-left group">
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#473C38] group-hover:text-[#9C6258] transition-colors">
                Conejo Valley Family Counseling
              </span>
              <span className="text-[10px] tracking-widest text-[#7A6F6B] uppercase font-sans mt-0.5">
                Newbury Park & Across California
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#473C38]">
              {/* About & Team */}
              <div
                className="relative"
                onMouseEnter={() => setTeamDropdown(true)}
                onMouseLeave={() => setTeamDropdown(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#9C6258] transition-colors py-2">
                  <span>About</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                {teamDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-[#E9DFD8] py-2 z-50 animate-fadeIn">
                    {[
                      "Jennifer Anderson, LMFT",
                      "Candace Bletscher, AMFT",
                      "Heather Williams-Baumgart, AMFT",
                      "Samantha Johnson, AMFT",
                      "Autumn Bodily, AMFT",
                      "Andrea Watkins, APCC",
                      "Rosa Gomez, AMFT",
                      "Chad Flores, AMFT",
                    ].map((name, i) => (
                      <span
                        key={i}
                        className="block px-4 py-1.5 hover:bg-[#FBF7F4] text-xs text-[#473C38] hover:text-[#9C6258] cursor-pointer"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Specialties */}
              <div
                className="relative"
                onMouseEnter={() => setSpecialtiesDropdown(true)}
                onMouseLeave={() => setSpecialtiesDropdown(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#9C6258] transition-colors py-2">
                  <span>Specialties</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                {specialtiesDropdown && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-[#E9DFD8] py-2 z-50 animate-fadeIn">
                    {[
                      "Dissociation",
                      "Trauma",
                      "Special Needs Parenting",
                      "Couples",
                      "Children & Teens",
                      "Anxiety & Depression",
                      "Adoption",
                    ].map((item, i) => (
                      <span
                        key={i}
                        className="block px-4 py-1.5 hover:bg-[#FBF7F4] text-xs text-[#473C38] hover:text-[#9C6258] cursor-pointer"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Methods */}
              <div
                className="relative"
                onMouseEnter={() => setMethodsDropdown(true)}
                onMouseLeave={() => setMethodsDropdown(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#9C6258] transition-colors py-2">
                  <span>Methods</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                {methodsDropdown && (
                  <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-[#E9DFD8] py-2 z-50 animate-fadeIn">
                    {[
                      "EMDR",
                      "Brainspotting",
                      "Somatic Therapy",
                      "Parts Work Therapy",
                    ].map((item, i) => (
                      <span
                        key={i}
                        className="block px-4 py-1.5 hover:bg-[#FBF7F4] text-xs text-[#473C38] hover:text-[#9C6258] cursor-pointer"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#conejo-faqs" className="hover:text-[#9C6258] transition-colors">
                FAQs
              </Link>
              <Link href="#conejo-footer" className="hover:text-[#9C6258] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Book Appointment CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="#conejo-cta"
                className="px-6 py-2.5 rounded-full bg-[#9C6258] hover:bg-[#7E4B42] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all"
              >
                Book an Appointment
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#473C38] hover:bg-black/5"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FBF7F4] border-b border-[#E9DFD8] px-6 py-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-[#473C38]">
              <span className="font-semibold text-xs text-[#9C6258] uppercase">About Our Practice</span>
              <Link href="#conejo-hope" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link href="#conejo-specialties" onClick={() => setMobileMenuOpen(false)}>Specialties & Methods</Link>
              <Link href="#conejo-how" onClick={() => setMobileMenuOpen(false)}>How We Work</Link>
              <Link href="#conejo-faqs" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
              <Link href="#conejo-footer" onClick={() => setMobileMenuOpen(false)}>Contact & Location</Link>
            </nav>
            <div className="pt-4 border-t border-[#E9DFD8]">
              <Link
                href="#conejo-cta"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 rounded-full bg-[#9C6258] text-white text-sm font-semibold text-center"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* SECTION 2: HERO (CLONE OF ORIGINAL CONEJO VALLEY HOMEPAGE) */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
                <span className="text-xs font-semibold tracking-widest-sub text-[#9C6258] uppercase block">
                  ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
                </span>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#473C38] leading-[1.15] tracking-tight">
                  Rebuild your foundation on solid ground and finally begin to{" "}
                  <span className="italic font-normal text-[#9C6258]">thrive.</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-[#7A6F6B] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
                  Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
                </p>

                <div className="pt-2">
                  <Link
                    href="#conejo-cta"
                    className="inline-block px-8 py-4 rounded-full bg-[#9C6258] hover:bg-[#7E4B42] text-white text-sm sm:text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>

              {/* Right Column: Original Overlapping Arch Images */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Primary Arch */}
                  <div className="relative w-72 sm:w-80 lg:w-84 aspect-[3/4] arch-top overflow-hidden shadow-2xl border-4 border-white mx-auto z-10">
                    <Image
                      src="/images/conejo/hero_arch_1.jpg"
                      alt="Counseling in Newbury Park, CA"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Overlapping Secondary Arch */}
                  <div className="hidden sm:block absolute -bottom-8 -right-4 w-48 sm:w-56 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20">
                    <Image
                      src="/images/conejo/hero_arch_2.jpg"
                      alt="Conejo Valley Family Counseling"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOPE SECTION */}
        <section id="conejo-hope" className="py-20 lg:py-28 bg-[#F4ECE6] border-y border-[#E9DFD8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/images/conejo/hope_portrait.jpg"
                    alt="Holding onto hope for healing and growth"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#473C38] leading-tight">
                  You’re holding onto hope that life can be better than it is right now.
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[#7A6F6B] leading-relaxed">
                  <p className="font-medium text-[#473C38]">
                    At Conejo Valley Family Counseling we want to make that hope a reality.
                  </p>
                  <p>
                    Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
                  </p>
                  <p>
                    First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHO WE HELP */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#473C38]">
                Who we help
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Adults */}
              <div className="bg-[#FBF7F4] rounded-3xl overflow-hidden border border-[#E9DFD8] shadow-card hover:shadow-lg transition-all flex flex-col">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/images/conejo/who_adults.jpg"
                    alt="Adults Counseling"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 space-y-3 flex-grow">
                  <h3 className="font-serif text-2xl font-medium text-[#473C38]">
                    Adults
                  </h3>
                  <p className="text-sm sm:text-base text-[#7A6F6B] leading-relaxed">
                    Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.
                  </p>
                </div>
              </div>

              {/* Couples */}
              <div className="bg-[#FBF7F4] rounded-3xl overflow-hidden border border-[#E9DFD8] shadow-card hover:shadow-lg transition-all flex flex-col">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/images/conejo/who_couples.jpg"
                    alt="Couples Counseling"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 space-y-3 flex-grow">
                  <h3 className="font-serif text-2xl font-medium text-[#473C38]">
                    Couples
                  </h3>
                  <p className="text-sm sm:text-base text-[#7A6F6B] leading-relaxed">
                    Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.
                  </p>
                </div>
              </div>

              {/* Children & Teens */}
              <div className="bg-[#FBF7F4] rounded-3xl overflow-hidden border border-[#E9DFD8] shadow-card hover:shadow-lg transition-all flex flex-col">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src="/images/conejo/who_teens.jpg"
                    alt="Children & Teens Therapy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 space-y-3 flex-grow">
                  <h3 className="font-serif text-2xl font-medium text-[#473C38]">
                    Children & Teens
                  </h3>
                  <p className="text-sm sm:text-base text-[#7A6F6B] leading-relaxed">
                    Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FULL-WIDTH QUOTE BANNER */}
        <section className="relative py-28 lg:py-36 bg-[#2B2624] text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/conejo/quote_banner.png"
              alt="Quote Background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-[#FBF7F4]">
              “You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.”
            </h2>
          </div>
        </section>

        {/* SECTION 6: AREAS OF EXPERTISE */}
        <section className="py-14 bg-white border-b border-[#E9DFD8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#473C38] mb-6">
              Our areas of expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Dissociation",
                "Trauma",
                "Family conflict",
                "Special needs parenting",
                "Depression",
                "Marriage",
                "Anxiety",
                "Relationships",
                "Children",
                "Teens",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-[#FBF7F4] text-[#473C38] border border-[#E9DFD8]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: HOW WE WORK */}
        <section id="conejo-how" className="py-20 lg:py-28 bg-[#FBF7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold tracking-widest uppercase text-[#9C6258]">
                  HOW WE WORK
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#473C38] leading-tight">
                  We’re here to make a difference.
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-[#7A6F6B] leading-relaxed">
                  <p className="font-medium text-[#473C38]">
                    The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.
                  </p>
                  <p>
                    Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
                  </p>
                  <p>
                    Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="#conejo-cta"
                    className="inline-block px-7 py-3.5 rounded-full bg-[#9C6258] hover:bg-[#7E4B42] text-white text-sm font-semibold tracking-wide shadow-sm transition-all"
                  >
                    Learn more about us
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-[3/4] arch-top rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/conejo/how_we_work.jpg"
                    alt="Conejo Valley Therapy Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: HONORING BANNER */}
        <section className="relative py-24 lg:py-32 bg-[#473C38] text-white text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/conejo/honoring_banner.jpg"
              alt="Honoring where you have been"
              fill
              className="object-cover opacity-25"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Honoring where you’ve been & helping shape where you’re headed.
            </h2>
          </div>
        </section>

        {/* SECTION 9: SPECIALTIES INCLUDE */}
        <section id="conejo-specialties" className="py-20 lg:py-28 bg-white border-b border-[#E9DFD8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#473C38]">
                Our specialties include…
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Trauma */}
              <div className="p-8 rounded-3xl bg-[#FBF7F4] border border-[#E9DFD8] flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="font-serif text-2xl font-medium text-[#473C38]">Trauma</h4>
                  <p className="text-sm text-[#7A6F6B] leading-relaxed">
                    We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="#conejo-cta" className="text-xs font-semibold text-[#9C6258] flex items-center gap-1">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Dissociation */}
              <div className="p-8 rounded-3xl bg-[#FBF7F4] border border-[#E9DFD8] flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="font-serif text-2xl font-medium text-[#473C38]">Dissociation</h4>
                  <p className="text-sm text-[#7A6F6B] leading-relaxed">
                    The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="#conejo-cta" className="text-xs font-semibold text-[#9C6258] flex items-center gap-1">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* EMDR */}
              <div className="p-8 rounded-3xl bg-[#FBF7F4] border border-[#E9DFD8] flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="font-serif text-2xl font-medium text-[#473C38]">EMDR</h4>
                  <p className="text-sm text-[#7A6F6B] leading-relaxed">
                    Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="#conejo-cta" className="text-xs font-semibold text-[#9C6258] flex items-center gap-1">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Special Needs Parenting */}
              <div className="p-8 rounded-3xl bg-[#FBF7F4] border border-[#E9DFD8] flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="font-serif text-2xl font-medium text-[#473C38]">Special Needs Parenting</h4>
                  <p className="text-sm text-[#7A6F6B] leading-relaxed">
                    Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="#conejo-cta" className="text-xs font-semibold text-[#9C6258] flex items-center gap-1">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: SCHEDULE AN APPOINTMENT (CTA) */}
        <section id="conejo-cta" className="py-20 lg:py-28 bg-[#FBF7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Overlapping Images */}
              <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-md">
                  <div className="relative w-72 sm:w-80 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/images/conejo/cta_img_1.jpg"
                      alt="Schedule an appointment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="hidden sm:block absolute -bottom-6 -right-4 w-48 sm:w-52 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <Image
                      src="/images/conejo/cta_img_2.jpg"
                      alt="Conejo Valley Family Counseling Office"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="text-xs font-bold tracking-widest uppercase text-[#9C6258]">
                  SCHEDULE AN APPOINTMENT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#473C38] leading-tight">
                  Find a therapist who is the right fit for you.
                </h2>
                <p className="text-base sm:text-lg text-[#7A6F6B] leading-relaxed">
                  Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
                </p>
                <p className="text-sm sm:text-base text-[#7A6F6B]">
                  Click the button below to schedule an appointment.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:info@conejovalleycounseling.com"
                    className="inline-block px-8 py-4 rounded-full bg-[#9C6258] hover:bg-[#7E4B42] text-white text-base font-semibold tracking-wide shadow-md transition-all"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION ANCHOR */}
        <section id="conejo-faqs" className="py-16 bg-white border-t border-[#E9DFD8]">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#473C38]">Frequently Asked Questions</h3>
            <p className="text-sm text-[#7A6F6B]">
              Questions about insurance, session format, or scheduling? Contact our administrative team at 805.242.3120.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER (SECTIONS 11 & 12 CLONE) */}
      <footer id="conejo-footer" className="bg-[#FBF7F4] text-[#473C38] border-t border-[#E9DFD8] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#E9DFD8]">
            {/* Col 1 */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative w-44 h-14">
                <Image
                  src="/images/conejo/conejo_logo.png"
                  alt="Conejo Valley Family Counseling Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-[#7A6F6B] leading-relaxed">
                We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
              </p>
            </div>

            {/* Col 2: Navigate */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-[#473C38] tracking-widest uppercase">Navigate</h4>
              <ul className="space-y-2 text-sm text-[#7A6F6B]">
                <li><Link href="/original-clone" className="hover:text-[#9C6258]">Home</Link></li>
                <li><Link href="#conejo-hope" className="hover:text-[#9C6258]">About</Link></li>
                <li><Link href="#conejo-faqs" className="hover:text-[#9C6258]">FAQs</Link></li>
                <li><Link href="#conejo-cta" className="hover:text-[#9C6258]">Contact</Link></li>
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-[#473C38] tracking-widest uppercase">Contact</h4>
              <p className="text-sm text-[#7A6F6B] leading-relaxed">
                925 Broadbeck Dr<br />
                Suites 200 and 225<br />
                Newbury Park, CA 91320<br />
                info@conejovalleycounseling.com<br />
                805.242.3120
              </p>
              <p className="text-xs text-[#7A6F6B] pt-2">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley
              </p>
            </div>

            {/* Col 4: Our Team */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-[#473C38] tracking-widest uppercase">Our Team</h4>
              <ul className="space-y-1.5 text-xs text-[#7A6F6B]">
                <li>Jennifer Anderson</li>
                <li>Heather Williams-Baumgart</li>
                <li>Autumn Bodily</li>
                <li>Candace Bletscher</li>
                <li>Samantha Johnson</li>
                <li>Andrea Watkins</li>
                <li>Rosa Gomez</li>
                <li>Chad Flores</li>
              </ul>
            </div>
          </div>

          {/* Section 12 Bottom */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6F6B]">
            <div className="flex flex-wrap gap-4">
              <span>Terms</span>
              <span>|</span>
              <span>Privacy Policy</span>
              <span>|</span>
              <span>Disclaimer</span>
              <span>|</span>
              <span>Website by Walker Strategy Co.</span>
            </div>
            <div>
              <span>Original Template Clone for Grow My Therapy Internship Selection</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
