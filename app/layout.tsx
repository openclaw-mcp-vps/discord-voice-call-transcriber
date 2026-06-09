import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Voice Transcriber – Real-time Transcription for Discord",
  description: "Transcribe Discord voice channels in real-time with speaker identification and searchable history. Perfect for study groups, gaming communities, and remote teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e9416c1f-003f-4607-87fc-f730fc403595"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
