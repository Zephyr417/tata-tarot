"use client";

import type { PointerEvent } from "react";
import { useRef, useState } from "react";
import { cards } from "@/data/cards";

const swipeThreshold = 42;

function getChosenCard(index: number) {
  const card = cards[index];
  const reading = card.upright;

  return {
    id: card.id,
    name: card.name,
    chinese: card.chinese,
    image: card.image,
    reversed: false,
    message: reading.message,
    wifeMessage: reading.wifeMessage,
  };
}

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(10);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [card, setCard] = useState(() => getChosenCard(10));
  const suppressClickRef = useRef(false);

  const handleDraw = () => {
    if (flipped) return;

    setCard(getChosenCard(selectedIndex));
    setFlipped(true);

    setTimeout(() => {
      setRevealed(true);
    }, 1000);
  };

  const reset = () => {
    setFlipped(false);
    setRevealed(false);
  };

  const moveSelection = (direction: -1 | 1) => {
    setSelectedIndex((current) => {
      const nextIndex = current + direction;

      if (nextIndex < 0 || nextIndex >= cards.length) {
        return current;
      }

      return nextIndex;
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (flipped) return;

    setDragStartX(event.clientX);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null || flipped) return;

    const nextOffset = event.clientX - dragStartX;
    setDragOffset(Math.max(-86, Math.min(86, nextOffset)));
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null || flipped) return;

    const finalOffset = event.clientX - dragStartX;
    setDragStartX(null);
    setDragOffset(0);

    if (finalOffset <= -swipeThreshold) {
      suppressClickRef.current = true;
      moveSelection(1);
      return;
    }

    if (finalOffset >= swipeThreshold) {
      suppressClickRef.current = true;
      moveSelection(-1);
    }
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
        {!flipped ? (
          <div
            aria-label="Choose a tarot card"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              setDragStartX(null);
              setDragOffset(0);
            }}
            className="
              relative
              h-80
              w-[min(100vw-48px,360px)]
              touch-pan-y
              select-none
              overflow-visible
            "
          >
            {cards.map((choice, index) => {
              const distance = index - selectedIndex;
              const visible = Math.abs(distance) <= 2;
              const x = distance * 54 + dragOffset;
              const scale = distance === 0 ? 1 : 0.86 - Math.min(Math.abs(distance), 2) * 0.06;
              const rotate = distance * -7;

              return (
                <button
                  key={choice.id}
                  type="button"
                  aria-label={`Choose card ${index + 1}`}
                  onClick={() => {
                    if (suppressClickRef.current) {
                      suppressClickRef.current = false;
                      return;
                    }

                    if (index === selectedIndex) {
                      handleDraw();
                      return;
                    }

                    setSelectedIndex(index);
                  }}
                  className={`
                    absolute
                    left-1/2
                    top-0
                    h-80
                    w-52
                    -translate-x-1/2
                    rounded-2xl
                    outline-none
                    ${dragStartX === null ? "transition-[transform,opacity,filter] duration-300 ease-out" : "transition-[opacity,filter] duration-150"}
                    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
                    ${index === selectedIndex ? "z-30" : "z-10 brightness-75"}
                  `}
                  style={{
                    transform: `translateX(calc(-50% + ${x}px)) scale(${scale}) rotate(${rotate}deg)`,
                  }}
                >
                  <span className="block h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                    <img
                      src="/cards/back.png"
                      alt=""
                      className="h-full w-full object-cover pointer-events-none"
                    />
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div
            className="
              h-80
              w-52
              relative
              z-50
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
        )}
      </div>

      {/* HINT */}
      <p
        className={`
          mt-2 text-sm text-gray-400 transition-all duration-500
          ${revealed ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        Swipe to choose. Tap the center card to reveal.
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
