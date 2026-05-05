import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RxRemind – Prescription Refill Reminder Tracker",
  description: "Track prescription refills, get automated reminders, and monitor medication adherence. Built for patients with chronic conditions and their caregivers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f891ef17-b823-42fb-8c03-8545d1ceaf42"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
