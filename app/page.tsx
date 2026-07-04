"use client";

import { useState } from "react";
import { getTodayCard } from "@/lib/getTodayCard";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [card] = useState(() => getTodayCard());

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
    <main className="h-[100dvh] overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <div className="mx-auto flex h-full w-full max-w-[430px] flex-col items-center px-6 pb-[max(24px,env(safe-area-inset-bottom))] pt-[max(40px,env(safe-area-inset-top))]">
      {/* HEADER */}
      <div
        className={`
          text-center
          transition-all duration-700 ease-out
          ${revealed ? "h-0 opacity-0 -translate-y-4 pointer-events-none" : "h-[238px] opacity-100"}
        `}
      >
        <div className="pt-15 text-4xl">✨</div>

        <h1 className="mt-4 text-5xl font-bold">
          Tata&apos;s Tarot
        </h1>

        <p className="mt-4 text-lg leading-relaxed">
          What&apos;s the otter&apos;s little surprise today?
        </p>
      </div>

      {/* CARD */}
      <div
        className={`
          transition-all duration-1000 ease-out
          ${revealed ? "mt-2 -translate-y-2 scale-[0.92]" : "mt-12"}
        `}
      >
        <div
          role="button"
          tabIndex={0}
          onPointerUp={handleDraw}
          className="
            h-80
            w-52
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
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl pointer-events-none">
            <img
              src={card.image}
              alt={card.name}
              className={`w-full h-full object-cover ${card.reversed ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* HINT */}
      <p
        className={`
          mt-2 text-sm text-gray-400 transition-all duration-500
          ${revealed ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        Tap the magic card to reveal today&apos;s tarot
      </p>

      {/* RESULT */}
      <div
        className={`
          mt-2
          w-full
          max-w-sm
          text-center
          transition-all
          duration-1000
          ease-out
          ${revealed ? "opacity-100 -translate-y-4 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"}
        `}
      >
        <h2 className="mt-2 text-4xl font-bold">
          {card.name}
        </h2>

        <p className="mt-2 text-lg text-gray-400">
          {card.reversed ? "Reversed" : "Upright"} · {card.reversed ? "逆位" : "正位"}
        </p>

        <p className="mt-2 text-base leading-relaxed text-gray-100">
          {card.message}
        </p>

        <p className="mt-6 text-pink-300 leading-relaxed">
          ❤️ {card.wifeMessage}
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
      </div>
    </main>
  );
}
