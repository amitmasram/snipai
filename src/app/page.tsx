"use client";

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="px-8 md:px-16 lg:px-32 py-8 flex justify-between items-center">
        <div className="text-3xl font-bold flex items-center">
          <span className="text-gray-400">Snip</span>
          <span className="text-pink-500 ml-1">AI</span>
        </div>
        <Link
          href="https://tally.so/r/m6QkDO"
          className="bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          Join Waitlist
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        {/* Main Headline with Animation */}
        <h1 className="text-animated mb-6">
          The AI Message Agent
        </h1>

        {/* Subheadline with Delayed Fade-In Animation */}
        <p className="subheadline text-lg md:text-xl font-light text-grat-300 tracking-wide max-w-2xl leading-relaxed opacity-0">
        Automate responses across Email, WhatsApp, Telegram, SMS, social media DMs, and more.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-3">
        <p>&copy; 2024 SnipAI.</p>
        <p>
          Contact us at{' '}
          <a href="mailto:founders@trysnipai.co" className="text-pink-500 hover:underline">founders@trysnipai.co</a>{' '}
          or{' '}
          <a href="mailto:hello@trysnipai.co" className="text-pink-500 hover:underline">hello@trysnipai.co</a>
        </p>
      </footer>

      <style jsx>{`
        .text-animated {
          font-size: 4xl;
          animation: reveal 3000ms ease-in-out forwards 200ms,
                     glow 2500ms linear infinite 2000ms;
        }
        
        .subheadline {
          animation: fadeIn 1s ease-in-out forwards 3.4s;
        }

        @keyframes reveal {
          80% {
            letter-spacing: 8px;
          }
          100% {
            background-size: 300% 300%;
          }
        }

        @keyframes glow {
          40% {
            text-shadow: 0 0 8px #fff;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
