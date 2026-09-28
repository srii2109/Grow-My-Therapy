"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Video,
  Clock,
  Sparkles,
  CheckCircle2,
  Copy,
  ChevronRight,
  Monitor,
  Smartphone,
  Palette,
  FileText,
  Building,
  Target,
  ArrowLeft,
  Volume2,
} from "lucide-react";
import TopbarBanner from "@/components/TopbarBanner";
import Footer from "@/components/Footer";

interface ScriptSection {
  timestamp: string;
  timeRange: string;
  title: string;
  screenAction: string;
  script: string;
  keyBenefits: string[];
}

const scriptData: ScriptSection[] = [
  {
    timestamp: "0:00 - 0:45",
    timeRange: "Minute 1 (Intro & Brand Identity)",
    title: "Warm Greeting, Client Framing & Hero Welcome",
    screenAction:
      "Start at top of homepage on Desktop view. Show the clean header with Dr. Maya Reynolds’ credentials and the soothing warm Sage & Sand color palette.",
    script:
      "“Hello Dr. Maya, welcome! I am so excited to walk you through the first draft of your brand-new website. When designing this platform, our primary mission was to create an online sanctuary that mirrors the exact feeling of walking into your Santa Monica practice: grounded, calming, warm, and deeply trustworthy.\n\nLooking at the top of the page, we immediately feature your name, credentials as a Licensed Clinical Psychologist, and a prominent badge highlighting your in-person Santa Monica sessions alongside secure California telehealth. For high-achieving professionals and thoughtful adults who visit your site feeling overwhelmed, this hero section provides instant clarity and reassurance. Notice our headline: ‘Quiet the internal noise, heal from within, and finally begin to thrive.’ It speaks directly to the internal reality of your clients without pathologizing them.”",
    keyBenefits: [
      "Instantly validates high-achieving clients feeling overwhelmed",
      "Prominently establishes Dr. Maya’s credentials (PsyD) and Santa Monica location",
      "Fosters calm nervous system regulation with soft sage and sand tones",
    ],
  },
  {
    timestamp: "0:45 - 1:45",
    timeRange: "Minute 2 (Empathy, Hope & Audience)",
    title: "The ‘Holding Onto Hope’ Section & Targeted Audience Cards",
    screenAction:
      "Scroll smoothly to Section 3 (Hope & Relief) and Section 4 (Who We Help 3-column cards).",
    script:
      "“As we scroll down, we come to your story and philosophy section: ‘You’re holding onto hope that life can feel lighter and more grounded than it does right now.’ Many therapists make the mistake of talking only about their degrees. Here, we immediately speak to the human being on the other side of the screen. We explicitly mention how your clients are thoughtful, self-aware individuals who often appear completely functional on the outside while quietly struggling with worry, physical tension, and sleep difficulties.\n\nJust below that, we’ve created three distinct pathways in the ‘Who We Help’ section: Adults dealing with anxiety and panic, survivors seeking trauma recovery, and high-achieving executives or creatives battling burnout. Each card has a tailored, reassuring message so prospective clients immediately identify themselves and think, ‘She understands exactly what I’m going through.’”",
    keyBenefits: [
      "Separates audience into 3 distinct, relatable pillars",
      "Highlights lived experience of clients feeling 'functional yet exhausted'",
      "Visual balance with warm, human imagery and rounded arch geometry",
    ],
  },
  {
    timestamp: "1:45 - 2:45",
    timeRange: "Minute 3 (Clinical Depth & Specialties)",
    title: "Philosophy Banner, Areas of Expertise & Core Services",
    screenAction:
      "Scroll past the Quote Banner into Clinical Expertise pills and the 4 Core Specialties cards.",
    script:
      "“Next, we feature this striking quote banner: ‘You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.’ This is framed with a soft coastal haze that evokes the peaceful Pacific atmosphere of Santa Monica.\n\nDirectly below, we present your clinical modalities in clean, accessible badges—featuring CBT, EMDR, Somatics, and nervous system regulation. When clients reach your Specialties section, we break down your core offerings: Anxiety & Panic, Trauma Recovery with EMDR, Burnout & Perfectionism, and Somatic Grounding. Instead of overwhelming clinical jargon, we explain these therapies in practical terms: how EMDR safely reworks painful memories, and how somatic practices help regulate the body's natural fight-or-flight response.”",
    keyBenefits: [
      "Translates clinical terminology (EMDR, CBT, Somatics) into tangible client outcomes",
      "Clearly articulates pacing, stabilization, and physical safety",
      "Interactive pill badges showcase breadth of expertise at a glance",
    ],
  },
  {
    timestamp: "2:45 - 3:45",
    timeRange: "Minute 4 (The Custom 'Our Office' Section)",
    title: "Our Office: Santa Monica Sanctuary Showcase",
    screenAction:
      "Scroll into the custom 'Our Office' section. Highlight the actual photos from her Google Drive (office1.jpeg & office2.jpeg) and the 3 pillar features.",
    script:
      "“Now, Dr. Maya, I want to highlight a brand-new custom section we built specifically for you: ‘Our Office: A Calm, Grounding Space for Healing.’ Because you offer both in-person and telehealth options, we wanted prospective clients to visualize what arriving at your physical practice at 123th Street 45 W in Santa Monica feels like.\n\nWe showcased your actual office photographs—highlighting the expansive natural light, comfortable seating, and uncluttered environment. We also paired this with three reassuring pillars: Natural Light & Grounding, Privacy & Discretion with acoustic sound isolation, and In-Person/Hybrid Flexibility. This demystifies the first appointment, eliminates social anxiety, and proves to clients that your practice is an intentional sanctuary where they will feel completely safe.”",
    keyBenefits: [
      "Custom section fulfilling Part 3 of the assignment",
      "Features real photos from Dr. Maya's profile folder",
      "Directly addresses client apprehension about visiting a therapy office",
    ],
  },
  {
    timestamp: "3:45 - 5:00",
    timeRange: "Minute 5 (Mobile Responsiveness, FAQs & Booking)",
    title: "Mobile Walkthrough, Interactive FAQs & Consultation Booking",
    screenAction:
      "Demonstrate switching to Mobile View (or resize screen). Scroll through mobile layout showing hamburger menu, FAQ accordion, and trigger the Contact Modal.",
    script:
      "“Finally, over 65% of therapy clients search for support on their smartphones during moments of vulnerability or late at night. Let’s look at how your website performs on mobile. Notice how effortlessly the layout stacks: your portrait remains beautifully framed, typography scales fluidly, and our mobile menu allows instant one-tap navigation.\n\nAt the bottom of the page, we included an interactive FAQ section answering the most common questions: how EMDR works, what in-person vs. telehealth looks like, and what to expect in the first session. And whenever a client feels ready, clicking ‘Book an Appointment’ opens a confidential, HIPAA-compliant inquiry form where they can choose between in-person Santa Monica or California telehealth. Dr. Maya, this draft gives you a powerful, compassionate digital home that will attract the exact clients you love working with. Thank you, and I look forward to your thoughts!”",
    keyBenefits: [
      "Demonstrates 100% fluid mobile responsiveness across all sections",
      "Reduces administrative friction with self-service FAQ answers",
      "Confidential, HIPAA-compliant consultation request modal",
    ],
  },
];

export default function WalkthroughPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyFullScript = () => {
    const fullText = scriptData
      .map(
        (s) =>
          `[${s.timestamp}] ${s.title}\nSCREEN ACTION: ${s.screenAction}\n\nSPOKEN SCRIPT:\n${s.script}\n\n`
      )
      .join("---\n\n");
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#232624]">
      <TopbarBanner />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E5DDD3]">
            <div className="space-y-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3D5A4C] hover:text-[#2D4539] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Dr. Maya Reynolds Website</span>
              </Link>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFEA] text-[#3D5A4C] text-xs font-semibold tracking-wider uppercase">
                <Video className="w-3.5 h-3.5 text-[#C27453]" />
                <span>Assignment Part 4 Deliverable</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E2421]">
                5-Minute Loom Video Walkthrough Script
              </h1>

              <p className="text-sm sm:text-base text-[#666B66] max-w-3xl leading-relaxed">
                A complete, non-technical, client-centered video presentation prepared for Dr. Maya Reynolds, PsyD. This guide includes timing, screen actions, speaking script, design rationale, and desktop/mobile demonstration steps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={copyFullScript}
                className="px-5 py-3 rounded-full bg-white border border-[#D5CCC1] hover:bg-[#FAF7F2] text-[#232624] text-xs sm:text-sm font-semibold shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <Copy className="w-4 h-4 text-[#3D5A4C]" />
                <span>{copied ? "Copied Script to Clipboard!" : "Copy Full 5-Min Script"}</span>
              </button>

              <Link
                href="/"
                className="px-6 py-3 rounded-full bg-[#3D5A4C] hover:bg-[#2D4539] text-white text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Monitor className="w-4 h-4 text-[#D48464]" />
                <span>Open Live Website to Demo</span>
              </Link>
            </div>
          </div>

          {/* Key Evaluation Highlights Card */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#E5DDD3] shadow-soft">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C27453] uppercase mb-1">
                <Clock className="w-4 h-4" />
                <span>Target Length</span>
              </div>
              <div className="font-serif text-2xl font-medium text-[#1E2421]">
                5:00 Minutes
              </div>
              <div className="text-xs text-[#7A827C] mt-1">
                Paced cleanly into 1-minute key focal chapters.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E5DDD3] shadow-soft">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#3D5A4C] uppercase mb-1">
                <Target className="w-4 h-4" />
                <span>Tone & Framing</span>
              </div>
              <div className="font-serif text-2xl font-medium text-[#1E2421]">
                Client Demo
              </div>
              <div className="text-xs text-[#7A827C] mt-1">
                Warm, non-technical, benefit-driven presentation.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E5DDD3] shadow-soft">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C27453] uppercase mb-1">
                <Palette className="w-4 h-4" />
                <span>Color System</span>
              </div>
              <div className="font-serif text-2xl font-medium text-[#1E2421]">
                Sage & Terracotta
              </div>
              <div className="text-xs text-[#7A827C] mt-1">
                Calming coastal sand and grounded healing palette.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E5DDD3] shadow-soft">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#3D5A4C] uppercase mb-1">
                <Building className="w-4 h-4" />
                <span>Custom Section</span>
              </div>
              <div className="font-serif text-2xl font-medium text-[#1E2421]">
                Our Office
              </div>
              <div className="text-xs text-[#7A827C] mt-1">
                Featuring real photos & Santa Monica details.
              </div>
            </div>
          </div>

          {/* Interactive Script Tabs & Presentation Player */}
          <div className="bg-white rounded-3xl border border-[#E5DDD3] shadow-xl overflow-hidden">
            {/* Minute Navigation Tabs */}
            <div className="bg-[#F4ECE6] border-b border-[#E9DFD8] p-3 flex overflow-x-auto gap-2">
              {scriptData.map((sec, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === idx
                      ? "bg-[#3D5A4C] text-white shadow-md"
                      : "bg-white/80 text-[#555B57] hover:bg-white"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span>{sec.timestamp}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-10 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F4ECE6]">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#C27453]">
                    {scriptData[activeTab].timeRange}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E2421] mt-1">
                    {scriptData[activeTab].title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 bg-[#E8EFEA] text-[#3D5A4C] px-3.5 py-1.5 rounded-full text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Time: {scriptData[activeTab].timestamp}</span>
                </div>
              </div>

              {/* Screen Action Guidance */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD3] space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#3D5A4C] flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  <span>What to show on your screen during this minute:</span>
                </div>
                <p className="text-sm text-[#474D49] font-medium leading-relaxed">
                  {scriptData[activeTab].screenAction}
                </p>
              </div>

              {/* Spoken Script */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C27453] flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  <span>Exact Word-For-Word Spoken Script:</span>
                </div>
                <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD3] font-serif text-base sm:text-lg leading-relaxed text-[#232624] whitespace-pre-line shadow-inner">
                  {scriptData[activeTab].script}
                </div>
              </div>

              {/* Key Client Benefits Covered */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#727974]">
                  Key Strategic Benefits Explained:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {scriptData[activeTab].keyBenefits.map((b, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white border border-[#E5DDD3] text-xs text-[#555B57] flex items-start gap-2 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3D5A4C] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next / Previous Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-[#F4ECE6]">
                <button
                  disabled={activeTab === 0}
                  onClick={() => setActiveTab(activeTab - 1)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold ${
                    activeTab === 0
                      ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400"
                      : "bg-[#F4ECE6] hover:bg-[#E9DFD8] text-[#473C38]"
                  }`}
                >
                  Previous Chapter
                </button>

                <span className="text-xs text-[#7A827C]">
                  Chapter {activeTab + 1} of {scriptData.length}
                </span>

                <button
                  disabled={activeTab === scriptData.length - 1}
                  onClick={() => setActiveTab(activeTab + 1)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold ${
                    activeTab === scriptData.length - 1
                      ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400"
                      : "bg-[#3D5A4C] hover:bg-[#2D4539] text-white"
                  }`}
                >
                  Next Chapter
                </button>
              </div>
            </div>
          </div>

          {/* Design Rationale & SEO Evaluation Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5DDD3] shadow-soft space-y-4">
              <h3 className="font-serif text-2xl font-medium text-[#1E2421]">
                Design & Color Psychology Rationale
              </h3>
              <p className="text-sm text-[#5F6662] leading-relaxed">
                When redesigning the original Conejo Valley Counseling template, we replaced the dusty rose palette with a specialized coastal Santa Monica aesthetic:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#474D49]">
                <li className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#3D5A4C] shrink-0 mt-1" />
                  <span>
                    <strong>Primary (Deep Coastal Sage - #3D5A4C):</strong> Evokes psychological safety, organic grounding, and nervous system down-regulation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F4EFEA] shrink-0 mt-1 border border-[#D5CCC1]" />
                  <span>
                    <strong>Secondary (Warm Sand & Oatmeal - #F4EFEA):</strong> High-contrast, gentle background that reduces eye strain for anxious visitors.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#C27453] shrink-0 mt-1" />
                  <span>
                    <strong>Accent (Muted Terracotta - #C27453):</strong> Warm human warmth that draws intuitive attention to consultation call-to-actions.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5DDD3] shadow-soft space-y-4">
              <h3 className="font-serif text-2xl font-medium text-[#1E2421]">
                Local SEO & Copywriting Alignment
              </h3>
              <p className="text-sm text-[#5F6662] leading-relaxed">
                All headlines, subheadings, and service descriptions were directly synthesized from Dr. Maya Reynolds’ official profile:
              </p>
              <div className="space-y-2.5 text-xs sm:text-sm text-[#474D49]">
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DDD3]">
                  <strong>Primary SEO Targets:</strong> Licensed Clinical Psychologist Santa Monica, Anxiety & Panic Therapy Santa Monica, EMDR Therapy California.
                </div>
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DDD3]">
                  <strong>Physical Office Keyword Integration:</strong> 123th Street 45 W, Santa Monica, CA 90401 with mention of hybrid and statewide California telehealth.
                </div>
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DDD3]">
                  <strong>Target Demographics:</strong> High-achieving adults, perfectionists, entrepreneurs, and creatives balancing chronic stress.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenBooking={() => {}} />
    </div>
  );
}
