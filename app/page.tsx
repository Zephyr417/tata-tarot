"use client";

import { useState } from "react";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleDraw = () => {
    if (flipped) return;

    setFlipped(true);

    setTimeout(() => {
      setRevealed(true);
    }, 1000);
  };

  const reset = () => {
    setFlipped(false);
    setRevealed(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-10 overflow-hidden text-white">
      {/* HEADER */}
      <div
        className={`
          text-center
          transition-all duration-700
          ${revealed ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100"}
        `}
      >
        <div className="text-5xl">✨</div>

        <h1 className="mt-4 text-5xl font-bold">
          Tata&apos;s Tarot
        </h1>

        <p className="mt-4 text-lg leading-relaxed">
          What&apos;s the otter&apos;s
          <br />
          little surprise today?
        </p>
      </div>

      {/* CARD */}
      <div
        className={`
          mt-12
          transition-all duration-1000
          ${revealed ? "-translate-y-10 scale-95" : ""}
        `}
      >
        <div
          role="button"
          tabIndex={0}
          onPointerUp={handleDraw}
          className="
            h-96
            w-60
            relative
            z-50
            cursor-pointer
            touch-manipulation
            select-none
            transition-transform
            duration-1000
            [transform-style:preserve-3d]
          "
          style={{
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* BACK */}
          <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl pointer-events-none">
            <img
              src="/cards/back.png"
              alt="tarot card back"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>

          {/* FRONT */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white flex items-center justify-center shadow-2xl pointer-events-none">
            <div className="text-center text-black pointer-events-none">
              <div className="text-4xl">🌙</div>
              <div className="mt-2 font-bold text-xl">The Moon</div>
              <div className="text-sm text-gray-500">Reversed</div>
            </div>
          </div>
        </div>
      </div>

      {/* HINT */}
      <p
        className={`
          mt-6 text-sm text-gray-400 transition-all duration-500
          ${revealed ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        Tap the magic card to reveal today&apos;s tarot
      </p>

      {/* RESULT */}
      <div
        className={`
          mt-8
          w-full
          max-w-sm
          text-center
          transition-all
          duration-1000
          ${revealed ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"}
        `}
      >
        <div className="text-5xl">🌙</div>

        <h2 className="mt-4 text-4xl font-bold">
          The Moon
        </h2>

        <p className="mt-2 text-lg text-gray-400">
          Reversed
        </p>

        <p className="mt-6 text-base leading-relaxed text-gray-100">
          Don&apos;t let fear stop you from moving forward.
          Trust your intuition and inner voice.
        </p>

        <p className="mt-6 text-pink-300 leading-relaxed">
          ❤️ Message for you today
        </p>

        <button
          onClick={reset}
          className="
            mt-8
            px-6
            py-3
            rounded-full
            bg-white
            text-black
            font-medium
            active:scale-95
            transition
          "
        >
          Draw Again
        </button>
      </div>
    </main>
  );
}