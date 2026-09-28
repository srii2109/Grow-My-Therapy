import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://growmytherapy-dr-maya-reynolds.vercel.app"),
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
  description: "Evidence-based therapy for anxiety, panic, trauma recovery (EMDR), and professional burnout in Santa Monica, California and statewide telehealth.",
  keywords: [
    "Dr. Maya Reynolds PsyD",
    "Psychologist Santa Monica",
    "Therapy Santa Monica CA",
    "Anxiety therapist Santa Monica",
    "EMDR therapy California",
    "Burnout counseling for professionals",
    "Trauma therapy Santa Monica",
    "Online therapy California",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Clinical Psychologist",
    description: "Therapy for high-achieving adults, anxiety, trauma recovery, and burnout in Santa Monica, CA & statewide telehealth.",
    url: "https://growmytherapy-dr-maya-reynolds.vercel.app",
    siteName: "Dr. Maya Reynolds Therapy",
    images: [
      {
        url: "/images/maya/maya_reynolds.png",
        width: 800,
        height: 800,
        alt: "Dr. Maya Reynolds, PsyD",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#FAF7F2] text-[#232624] min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
