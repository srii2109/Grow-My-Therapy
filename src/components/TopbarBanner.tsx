"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Copy, Video, CheckCircle2, ArrowRight } from "lucide-react";

export default function TopbarBanner() {
  const pathname = usePathname();
  const isOriginal = pathname.startsWith("/original-clone");
  const isWalkthrough = pathname.startsWith("/walkthrough");

  return (
    <div className="bg-[#1E2421] text-white text-xs sm:text-sm py-2.5 px-4 sticky top-0 z-50 shadow-md border-b border-[#33423A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#4A6B5D] text-white">
            <Sparkles className="w-3 h-3 text-[#D98860]" />
            Internship Evaluation Mode
          </span>
          <span className="text-[#C5D0C9] hidden sm:inline">
            Grow My Therapy Stage 2 Practical Assignment
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Link
            href="/"
            className={`px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1.5 ${
              !isOriginal && !isWalkthrough
                ? "bg-[#D98860] text-white shadow-sm"
                : "bg-[#2D3631] text-[#D8E0DC] hover:bg-[#39453F]"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Dr. Maya Redesign</span>
          </Link>

          <Link
            href="/original-clone"
            className={`px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1.5 ${
              isOriginal
                ? "bg-[#9C6258] text-white shadow-sm"
                : "bg-[#2D3631] text-[#D8E0DC] hover:bg-[#39453F]"
            }`}
          >
            <Copy className="w-3.5 h-3.5" />
            <span>1:1 Original Clone</span>
          </Link>

          <Link
            href="/walkthrough"
            className={`px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1.5 ${
              isWalkthrough
                ? "bg-[#4A6B5D] text-white shadow-sm"
                : "bg-[#2D3631] text-[#D8E0DC] hover:bg-[#39453F]"
            }`}
          >
            <Video className="w-3.5 h-3.5 text-[#D98860]" />
            <span>Video Walkthrough (5-Min Demo)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
