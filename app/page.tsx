export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Real-time Discord Voice Transcription
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Never Miss a Word in Your{" "}
          <span className="text-[#58a6ff]">Discord Calls</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Automatically transcribe Discord voice channels with speaker identification and searchable history. Perfect for study groups, team meetings, and gaming communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Start Transcribing — $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🎙️", title: "Real-time Transcription", desc: "Live speech-to-text as your team talks" },
            { icon: "👤", title: "Speaker Identification", desc: "Know exactly who said what, every time" },
            { icon: "🔍", title: "Searchable History", desc: "Find any moment from past voice sessions" }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Pro Plan</h3>
          <div className="text-5xl font-bold text-white mb-1">
            $9<span className="text-xl text-[#8b949e] font-normal">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to transcribe Discord</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited voice channel transcriptions",
              "Speaker identification for all members",
              "Searchable transcript history",
              "Discord OAuth & bot installation",
              "Export transcripts as TXT or PDF",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-center"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the Discord bot work?",
              a: "After subscribing, you authenticate with Discord OAuth and invite our bot to your server. The bot joins voice channels on demand and streams audio to our transcription engine, delivering live text to your dashboard."
            },
            {
              q: "Is my voice data stored securely?",
              a: "Audio is processed in real-time and never permanently stored. Only the text transcripts are saved, encrypted at rest, and accessible only to you."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your billing portal. You'll retain access until the end of your current billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Discord Voice Transcriber. All rights reserved.
      </footer>
    </main>
  );
}
