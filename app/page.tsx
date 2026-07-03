"use client";

import { useState } from "react";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleDraw = () => {
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
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6">

      {/* ================= HEADER ================= */}
      <div
        className={`
          text-center
          mt-15
          transition-all duration-700
          ${revealed ? "opacity-0 -translate-y-4" : "opacity-100"}
        `}
      >
        <div className="text-6xl">✨</div>

        <h1 className="mt-4 text-6xl font-bold text-white">
          Tata's Tarot
        </h1>

        <p className="mt-4 text-xl text-white">
          What's the otter's little surprise today？
        </p>
      </div>

      {/* ================= CARD CENTER AREA ================= */}
      <div className="flex items-center justify-center flex-1 w-full -translate-y-14">

        {/* 卡牌：真正居中 */}
        <div className="flex items-center justify-center w-full">
          <div
            onClick={!flipped ? handleDraw : undefined}
            className={`
              h-96
              w-60
              relative
              cursor-pointer
              transition-all
              duration-1000
              [transform-style:preserve-3d]
              ${revealed ? "-translate-x-70 -translate-y-14 scale-150" : ""}
            `}
            style={{
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* BACK */}
            <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/cards/back.png"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FRONT */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white flex items-center justify-center shadow-2xl">
              <div className="text-center text-black">
                <div className="text-4xl">🌙</div>
                <div className="mt-2 font-bold text-xl">The Moon</div>
                <div className="text-sm text-gray-500">Reversed</div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RESULT OVERLAY ================= */}
        <div
          className={`
            absolute right-10 top-1/2 -translate-y-70
            text-white max-w-md
            transition-all duration-1000
            ${revealed ? "opacity-100 -translate-x-50" : "opacity-0 translate-x-10"}
          `}
        >
          <div className="text-6xl">🌙</div>

          <h1 className="mt-4 text-5xl font-bold">
            The Moon
          </h1>

          <p className="mt-2 text-xl text-gray-400">
            Reversed
          </p>

          <p className="mt-8 text-lg leading-relaxed">
            Don't let fear stop you from moving forward.
            Trust your intuition and inner voice.
          </p>

          <p className="mt-8 text-pink-300">
            ❤️ Message for you today
          </p>

          <button
            onClick={reset}
            className="
              mt-30
              px-6
              py-3
              rounded-full
              bg-white
              text-black
              font-medium
              hover:scale-105
              active:scale-95
              transition
            "
          >
            Draw Again
          </button>
        </div>

      </div>
    </main>
  );
}