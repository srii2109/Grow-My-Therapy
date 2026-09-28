"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is your approach to therapy and what should I expect in our work together?",
    answer:
      "I take a warm, collaborative, and grounded approach. Sessions are structured enough to provide genuine clarity and practical coping tools, while still leaving space for deep emotional reflection. Rather than a one-size-fits-all method, I integrate evidence-based therapies including Cognitive Behavioral Therapy (CBT), EMDR, mindfulness, and somatic body-oriented practices to address both the cognitive and physiological sides of stress and anxiety.",
  },
  {
    question: "Do you offer in-person sessions, virtual therapy, or both?",
    answer:
      "Both! I provide in-person therapy at my private, tranquil office located at 123th Street 45 W, Santa Monica, CA 90401. For clients residing elsewhere in California or those who prefer virtual sessions, I provide secure, HIPAA-compliant telehealth video appointments.",
  },
  {
    question: "How does EMDR trauma therapy work and is it right for me?",
    answer:
      "Trauma work is a cornerstone of my practice. Eye Movement Desensitization and Reprocessing (EMDR) helps your brain reprocess unresolved painful memories and stressful experiences so they no longer trigger an overwhelming fight-or-flight response. I work with both single-incident trauma and complex developmental or relationship patterns. Our work is paced carefully, always prioritizing stabilization and physical safety before deeper processing.",
  },
  {
    question: "Who are your typical clients?",
    answer:
      "I primarily work with thoughtful, high-achieving adults, professionals, entrepreneurs, and creatives who appear composed on the outside but quietly struggle with chronic anxiety, panic, exhaustion, or emotional disconnect. If you tend to overthink, hold high internal expectations, or carry the weight of past experiences, therapy can provide the space to slow down and rebuild genuine balance.",
  },
  {
    question: "What is the Santa Monica office environment like?",
    answer:
      "My Santa Monica office is an intentional sanctuary: quiet, filled with natural light, and furnished with comfortable, uncluttered seating. Clients frequently note that simply walking into the space allows their nervous system to relax and feel safe.",
  },
  {
    question: "How do I take the first step to get started?",
    answer:
      "You can click any 'Book an Appointment' button on this page to submit a consultation request. We will schedule a brief, free phone consultation to discuss what you're seeking, answer any initial questions, and ensure we're a great mutual fit.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#3D5A4C] bg-white shadow-soft"
                : "border-[#E5DDD3] bg-white/70 hover:border-[#3D5A4C]/40"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl font-medium text-[#1E2421]">
                {faq.question}
              </span>
              <span
                className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                  isOpen
                    ? "rotate-180 bg-[#E8EFEA] text-[#3D5A4C]"
                    : "bg-[#F4EFEA] text-[#666B66]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#555B57] leading-relaxed border-t border-[#F4EFEA] animate-fadeIn font-sans">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
