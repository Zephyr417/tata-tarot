"use client";

import type { PointerEvent } from "react";
import { useState } from "react";
import { cards } from "@/data/cards";

const cardStep = 38;
const tapThreshold = 8;
const selectedCardScale = 1.12;

type DrawBehavior = {
  selectedIndex: number;
};

function getRandomUint32() {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    return crypto.getRandomValues(new Uint32Array(1))[0];
  }

  return Math.floor(Math.random() * 2 ** 32);
}

function mixSeed(seed: number, value: number) {
  let mixed = (seed ^ value) >>> 0;

  mixed = Math.imul(mixed ^ (mixed >>> 16), 2_246_822_519);
  mixed = Math.imul(mixed ^ (mixed >>> 13), 3_266_489_917);

  return (mixed ^ (mixed >>> 16)) >>> 0;
}

function shuffleCards(seed: number) {
  const deck = [...cards];
  let nextSeed = seed;

  for (let index = deck.length - 1; index > 0; index -= 1) {
    nextSeed = mixSeed(nextSeed, index);
    const swapIndex = nextSeed % (index + 1);
    const current = deck[index];

    deck[index] = deck[swapIndex];
    deck[swapIndex] = current;
  }

  return deck.map((card, index) => {
    const reversed = mixSeed(seed, index + 100) % 2 === 1;
    const reading = reversed ? card.reversed : card.upright;

    return {
      id: card.id,
      name: card.name,
      chinese: card.chinese,
      image: card.image,
      reversed,
      message: reading.message,
      wifeMessage: reading.wifeMessage,
    };
  });
}

function getPreviewCard(index: number) {
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

function getDrawnCard(behavior: DrawBehavior, sessionDeck: ReturnType<typeof shuffleCards>) {
  return sessionDeck[behavior.selectedIndex];
}

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(10);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [card, setCard] = useState(() => getPreviewCard(10));
  const [sessionSeed] = useState(() => getRandomUint32());
  const [sessionDeck] = useState(() => shuffleCards(sessionSeed));

  const handleDraw = () => {
    if (flipped || drawing) return;

    setCard(
      getDrawnCard({
        selectedIndex,
      }, sessionDeck),
    );
    setDrawing(true);

    setTimeout(() => {
      setFlipped(true);

      setTimeout(() => {
        setRevealed(true);
      }, 1000);
    }, 180);
  };

  const reset = () => {
    setFlipped(false);
    setRevealed(false);
    setDrawing(false);
  };

  const moveSelection = (delta: number) => {
    setSelectedIndex((current) => {
      const nextIndex = current + delta;

      return Math.max(0, Math.min(cards.length - 1, nextIndex));
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
    const minOffset = (selectedIndex - (cards.length - 1)) * cardStep;
    const maxOffset = selectedIndex * cardStep;

    setDragOffset(Math.max(minOffset, Math.min(maxOffset, nextOffset)));
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null || flipped) return;

    const rawOffset = event.clientX - dragStartX;
    const minOffset = (selectedIndex - (cards.length - 1)) * cardStep;
    const maxOffset = selectedIndex * cardStep;
    const finalOffset = Math.max(minOffset, Math.min(maxOffset, rawOffset));
    setDragStartX(null);
    setDragOffset(0);

    if (Math.abs(finalOffset) > tapThreshold) {
      moveSelection(Math.round(-finalOffset / cardStep));
      return;
    }

    handleDraw();
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
          What&apos;s the otter&apos;s little surprise for now?
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
              w-screen
              max-w-[430px]
              touch-pan-y
              select-none
              overflow-visible
            "
          >
            {cards.map((choice, index) => {
              const rawDistance = index - selectedIndex + dragOffset / cardStep;
              const visible = Math.abs(rawDistance) <= 4.5;
              const x = rawDistance * cardStep;
              const absoluteDistance = Math.min(Math.abs(rawDistance), 4);
              const scale = selectedCardScale - absoluteDistance * 0.08;
              const rotate = rawDistance * 0;
              const isFocused = Math.abs(rawDistance) < 0.5;
              const pressedScale = drawing && isFocused ? scale * 0.86 : scale;

              return (
                <div
                  key={choice.id}
                  aria-label={`Choose card ${index + 1}`}
                  className={`
                    absolute
                    left-1/2
                    top-0
                    h-80
                    w-52
                    rounded-2xl
                    ${dragStartX === null ? "transition-[transform,opacity,filter] duration-300 ease-out" : "transition-[opacity,filter] duration-150"}
                    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
                    ${isFocused ? "z-30" : "z-10 brightness-75"}
                  `}
                  style={{
                    transform: `translateX(calc(-50% + ${x}px)) scale(${pressedScale}) rotate(${rotate}deg)`,
                    zIndex: Math.round(100 - Math.abs(rawDistance) * 10),
                  }}
                >
                  <span className="block h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                    <img
                      src="/cards/back.png"
                      alt=""
                      className="h-full w-full object-cover pointer-events-none"
                    />
                  </span>
                </div>
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
              transform: `scale(${selectedCardScale}) rotateY(${flipped ? 180 : 0}deg)`,
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
          mt-8 text-sm text-gray-400 transition-all duration-500
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
        <h2 className="-mt-6 whitespace-nowrap text-[clamp(1.65rem,8vw,2.25rem)] font-bold">
          {card.name} · {card.chinese}
        </h2>

        <p className="mt-1 text-base text-gray-400">
          {card.reversed ? "Reversed" : "Upright"} · {card.reversed ? "逆位" : "正位"}
        </p>

        <p className="mt-1 text-sm leading-snug text-gray-100">
          {card.message}
        </p>

        <p className="mt-4 text-sm leading-snug text-pink-300">
          ❤️水水: {card.wifeMessage}
        </p>

        <button
          onClick={reset}
          className="
            mt-5
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
