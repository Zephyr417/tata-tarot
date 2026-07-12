"use client";

import { useEffect, useState } from "react";

type CounterEvent =
  | {
      kind: "since";
      title: string;
      subtitle: string;
      date: string;
      icon: string;
      accent: string;
    }
  | {
      kind: "annual";
      title: string;
      subtitle: string;
      month: number;
      day: number;
      icon: string;
      accent: string;
    }
  | {
      kind: "forever";
      title: string;
      subtitle: string;
      icon: string;
      accent: string;
    };

// 在这里修改你们真正的日期。date 使用「年-月-日T时:分:秒」。
const events: CounterEvent[] = [
  {
    kind: "since",
    title: "你送了我“大王的披风”！",
    subtitle: "大王你更强了咩 ---Xingxing” · 2020.02.14",
    date: "2020-02-14T00:00:00",
    icon: "♡",
    accent: "#ee8f9d",
  },
  {
    kind: "since",
    title: "我们结婚啦~",
    subtitle: "成为家人的那一天 · 2022.09.29",
    date: "2022-09-29T00:00:00",
    icon: "♢",
    accent: "#c99a62",
  },
  {
    kind: "annual",
    title: "距离Tata的生日",
    subtitle: "要一起好好度过哦",
    month: 7,
    day: 18,
    icon: "✦",
    accent: "#9b87c4",
  },
  {
    kind: "forever",
    title: "还想与你一起度过..",
    subtitle: "往后的每一天",
    icon: "✦",
    accent: "#9b87c4",
  },
];

type Duration = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function splitDuration(milliseconds: number): Duration {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function nextAnnualDate(now: Date, month: number, day: number) {
  let target = new Date(now.getFullYear(), month - 1, day);

  if (target.getTime() <= now.getTime()) {
    target = new Date(now.getFullYear() + 1, month - 1, day);
  }

  return target;
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="min-w-0 text-center">
      <div className="font-serif text-[clamp(1.75rem,8vw,2.6rem)] leading-none tracking-tight text-[#3f3631] tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 text-[10px] font-medium tracking-[0.22em] text-[#8e8179]">
        {label}
      </div>
    </div>
  );
}

function CounterCard({ event, now }: { event: CounterEvent; now: Date }) {
  if (event.kind === "forever") {
    return (
      <article className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/65 p-5 shadow-[0_18px_50px_rgba(100,74,65,0.10)] backdrop-blur-xl">
        <div
          className="absolute -right-8 -top-10 h-28 w-28 rounded-full opacity-15 blur-2xl"
          style={{ backgroundColor: event.accent }}
        />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9c8e85]">
              Always &amp; forever
            </p>
            <h2 className="mt-1.5 text-xl font-semibold tracking-wide text-[#403733]">
              {event.title}
            </h2>
            <p className="mt-1 text-xs text-[#95877f]">{event.subtitle}</p>
          </div>
          <span
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/80 text-xl shadow-sm"
            style={{ color: event.accent, backgroundColor: `${event.accent}18` }}
          >
            {event.icon}
          </span>
        </div>
        <div className="relative mt-7 grid place-items-center rounded-2xl bg-[#fffaf7]/80 px-3 py-3">
          <span className="font-serif text-7xl leading-none text-[#6f5d78]">∞</span>
        </div>
      </article>
    );
  }

  const target =
    event.kind === "since"
      ? new Date(event.date)
      : nextAnnualDate(now, event.month, event.day);
  const isFuture = target.getTime() > now.getTime();
  const duration = splitDuration(Math.abs(now.getTime() - target.getTime()));

  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/65 p-5 shadow-[0_18px_50px_rgba(100,74,65,0.10)] backdrop-blur-xl">
      <div
        className="absolute -right-8 -top-10 h-28 w-28 rounded-full opacity-15 blur-2xl"
        style={{ backgroundColor: event.accent }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9c8e85]">
            {isFuture ? "Counting down" : "Together for"}
          </p>
          <h2 className="mt-1.5 text-xl font-semibold tracking-wide text-[#403733]">
            {event.title}
          </h2>
          <p className="mt-1 text-xs text-[#95877f]">{event.subtitle}</p>
        </div>
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/80 text-xl shadow-sm"
          style={{ color: event.accent, backgroundColor: `${event.accent}18` }}
        >
          {event.icon}
        </span>
      </div>

      <div className="relative mt-7 grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center divide-x divide-[#dfd5cf] rounded-2xl bg-[#fffaf7]/80 px-3 py-5">
        <TimeUnit value={duration.days} label="天" />
        <TimeUnit value={duration.hours} label="时" />
        <TimeUnit value={duration.minutes} label="分" />
        <TimeUnit value={duration.seconds} label="秒" />
      </div>
    </article>
  );
}

export default function CounterPage() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-[#f7eee9] px-5 pb-[max(32px,env(safe-area-inset-bottom))] pt-[max(44px,env(safe-area-inset-top))] text-[#403733]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(255,255,255,0.95),transparent_31%),radial-gradient(circle_at_94%_34%,rgba(228,191,195,0.38),transparent_28%),radial-gradient(circle_at_20%_90%,rgba(226,205,176,0.32),transparent_28%)]" />
      <div className="pointer-events-none absolute left-[8%] top-24 text-2xl text-[#dcb7b8]/60">✦</div>
      <div className="pointer-events-none absolute right-[9%] top-48 text-sm text-[#c9a47b]/60">✦</div>

      <div className="relative mx-auto w-full max-w-md">
        <header className="mb-8 text-center">
          <h1 className="mt-3 font-serif text-4xl italic tracking-tight text-[#493d38]">
            Tata's little timeline
          </h1>
          <p className="mt-3 text-sm tracking-wide text-[#91827a]">
            May the days be gentle, and the years be kind.
          </p>
        </header>

        <section className="space-y-4" aria-live="off">
          {now
            ? events.map((event) => (
                <CounterCard key={event.title} event={event} now={now} />
              ))
            : events.map((event) => (
                <div
                  key={event.title}
                  className="h-[206px] animate-pulse rounded-[28px] bg-white/55"
                />
              ))}
        </section>

        <footer className="mt-8 text-center text-xs tracking-[0.18em] text-[#a99a91]">
          EVERY SECOND WITH YOU MATTERS ♡
        </footer>
      </div>
    </main>
  );
}
