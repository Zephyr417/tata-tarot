"use client";

import type { PointerEvent } from "react";
import { useEffect, useState } from "react";
import { cards } from "@/data/cards";

const cardStep = 38;
const tapThreshold = 8;
const selectedCardScale = 1.12;

type DrawBehavior = {
  selectedIndex: number;
};

type WeatherSummary = {
  temperature: number;
  label: string;
};

function getWeatherLabel(code: number) {
  if (code === 0) return "Clear";
  if ([1, 2, 3].includes(code)) return "Cloudy";
  if ([45, 48].includes(code)) return "Fog";
  if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "Rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snow";
  if ([95, 96, 99].includes(code)) return "Storm";

  return "Weather";
}

function formatDublinDate() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-IE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    timeZone: "Europe/Dublin",
  }).formatToParts(now);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${value("year")}.${value("month")}.${value("day")}, ${value("weekday")}`;
}

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

function getCardTitleClass(title: string) {
  if (title.length >= 28) {
    return "text-[1.35rem]";
  }

  if (title.length >= 24) {
    return "text-[1.5rem]";
  }

  if (title.length >= 20) {
    return "text-[1.7rem]";
  }

  return "text-[2.15rem]";
}

function HomeStatusBar({ hidden }: { hidden: boolean }) {
  const [dateLabel] = useState(() => formatDublinDate());
  const [weather, setWeather] = useState<WeatherSummary | null>(null);
  const [weatherFailed, setWeatherFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=53.3498&longitude=-6.2603&current=temperature_2m,weather_code&timezone=Europe%2FDublin",
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Weather request failed");
        }

        const data = (await response.json()) as {
          current?: {
            temperature_2m?: number;
            weather_code?: number;
          };
        };
        const temperature = data.current?.temperature_2m;
        const weatherCode = data.current?.weather_code;

        if (typeof temperature !== "number" || typeof weatherCode !== "number") {
          throw new Error("Weather response missing current conditions");
        }

        setWeather({
          temperature: Math.round(temperature),
          label: getWeatherLabel(weatherCode),
        });
      } catch {
        if (!controller.signal.aborted) {
          setWeatherFailed(true);
        }
      }
    }

    loadWeather();

    return () => controller.abort();
  }, []);

  return (
    <div
      className={`
        absolute left-1/2 top-[max(12px,env(safe-area-inset-top))]
        z-20 grid w-[calc(100%-48px)] max-w-sm -translate-x-1/2
        grid-cols-[1fr_auto_1fr] items-center rounded-full border border-white/10
        bg-white/[0.07] px-4 py-2 text-xs text-white/75
        shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md
        transition-all duration-700 ease-out
        ${hidden ? "opacity-0 -translate-y-3 pointer-events-none" : "opacity-100"}
      `}
    >
      <span className="justify-self-start">{dateLabel || "Today"}</span>
      <span className="justify-self-center text-white/45">Dublin</span>
      <span className="justify-self-end text-right">
        {weather
          ? `${weather.label} · ${weather.temperature}°C`
          : weatherFailed
            ? "Weather unavailable"
            : "Loading weather"}
      </span>
    </div>
  );
}

function MysticHomeDecor({ revealed }: { revealed: boolean }) {
  const stars = [
    { left: "10%", top: "18%", size: "text-[10px]", delay: "delay-0" },
    { left: "18%", top: "34%", size: "text-xs", delay: "delay-150" },
    { left: "82%", top: "20%", size: "text-[10px]", delay: "delay-300" },
    { left: "88%", top: "42%", size: "text-xs", delay: "delay-0" },
    { left: "14%", top: "70%", size: "text-[9px]", delay: "delay-300" },
    { left: "78%", top: "74%", size: "text-[9px]", delay: "delay-150" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`
          absolute inset-x-0 top-0 h-48
          bg-[radial-gradient(circle_at_50%_0%,rgba(244,214,151,0.16),transparent_58%)]
          transition-all duration-1000 ease-out
          ${revealed ? "opacity-40 -translate-y-3" : "opacity-100"}
        `}
      />

      <div
        className={`
          absolute left-[13%] top-0 flex flex-col items-center text-amber-100/60
          transition-all duration-1000 ease-out
          ${revealed ? "opacity-0 -translate-y-3" : "opacity-100"}
        `}
      >
        <div className="mystic-pendant flex flex-col items-center">
          <div className="h-24 w-px bg-gradient-to-b from-amber-100/0 via-amber-100/40 to-amber-100/0" />
          <div className="grid h-10 w-10 place-items-center rounded-full border border-amber-100/30 bg-slate-950/20 text-lg shadow-[0_0_22px_rgba(251,191,36,0.16)]">
            🌙
          </div>
          <div className="mt-2 h-7 w-px bg-gradient-to-b from-amber-100/30 to-amber-100/0" />
        </div>
      </div>

      <div
        className={`
          absolute right-[12%] top-6 flex flex-col items-center text-indigo-100/60
          transition-all duration-1000 ease-out
          ${revealed ? "opacity-0 -translate-y-3" : "opacity-100"}
        `}
      >
        <div className="mystic-pendant flex flex-col items-center [animation-delay:-2.1s]">
          <div className="h-20 w-px bg-gradient-to-b from-indigo-100/0 via-indigo-100/40 to-indigo-100/0" />
          <div className="grid h-9 w-9 place-items-center rounded-full border border-indigo-100/30 bg-slate-950/20 text-lg shadow-[0_0_22px_rgba(165,180,252,0.14)]">
            ☀️
          </div>
        </div>
      </div>

      <div
        className={`
          absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center text-amber-50/70
          transition-all duration-1000 ease-out
          ${revealed ? "opacity-0 -translate-y-3" : "opacity-100"}
        `}
      >
        <div className="mystic-pendant flex flex-col items-center [animation-delay:-3.4s]">
          <div className="h-16 w-px bg-gradient-to-b from-amber-100/0 via-amber-100/35 to-amber-100/0" />
          <div className="grid h-11 w-11 place-items-center rounded-full border border-amber-100/25 bg-slate-950/20 text-xl shadow-[0_0_24px_rgba(253,230,138,0.16)]">
            ✨
          </div>
          <div className="mt-2 h-5 w-px bg-gradient-to-b from-amber-100/25 to-amber-100/0" />
        </div>
      </div>

      <div
        className={`
          absolute left-1/2 top-[21%] h-16 w-44 -translate-x-1/2
          transition-all duration-1000 ease-out
          ${revealed ? "opacity-0 -translate-y-3" : "opacity-45"}
        `}
      >
        <div className="absolute left-4 top-8 h-px w-36 rotate-[-8deg] bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <div className="absolute left-10 top-4 h-px w-24 rotate-[22deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <span className="absolute left-3 top-7 h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.55)]" />
        <span className="absolute left-16 top-2 h-1 w-1 rounded-full bg-white/60" />
        <span className="absolute right-9 top-10 h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
        <span className="absolute right-3 top-5 h-1 w-1 rounded-full bg-white/50" />
      </div>


      {stars.map((star) => (
        <span
          key={`${star.left}-${star.top}`}
          className={`
            absolute ${star.size} ${star.delay} animate-pulse
            transition-colors duration-1000
            ${revealed ? "text-amber-100/35" : "text-amber-100/45"}
          `}
          style={{ left: star.left, top: star.top }}
        >
          ✦
        </span>
      ))}
    </div>
  );
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
    <main className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <MysticHomeDecor revealed={revealed} />
      <HomeStatusBar hidden={drawing || flipped || revealed} />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[430px] flex-col items-center px-6 pb-[max(24px,env(safe-area-inset-bottom))] pt-[max(40px,env(safe-area-inset-top))]">
      {/* HEADER */}
      <div
        className={`
          text-center
          transition-all duration-700 ease-out
          ${revealed ? "h-0 opacity-0 -translate-y-4 pointer-events-none" : "h-[238px] opacity-100"}
        `}
      >
        <h1 className="pt-24 text-5xl font-bold">
          Tata&apos;s Tarot
        </h1>

        <p className="mt-4 text-lg leading-relaxed">
          What&apos;s on the otter&apos;s mind now?
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
        Think of the question. Choose your magic card.
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
          ease-out
          ${revealed ? "opacity-100 -translate-y-4 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"}
        `}
      >
        <h2
          className={`-mt-6 max-w-full whitespace-nowrap px-1 text-center font-bold leading-tight ${getCardTitleClass(
            `${card.name} · ${card.chinese}`,
          )}`}
        >
          {card.name} · {card.chinese}
        </h2>

        <p className="mt-4 text-base text-gray-400">
          {card.reversed ? "Reversed" : "Upright"} · {card.reversed ? "逆位" : "正位"}
        </p>

        <p className="mt-4 text-sm leading-snug text-gray-100">
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
