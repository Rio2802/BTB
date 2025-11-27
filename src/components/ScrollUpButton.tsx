'use client';

import { useEffect, useRef, useState } from 'react';

type CandleConfig = {
  height: number;
  bullish: boolean;
};

export default function ScrollUpButton() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [readyPlayed, setReadyPlayed] = useState(false);
  const [candles, setCandles] = useState<CandleConfig[]>([
    { height: 12, bullish: true },
    { height: 18, bullish: false },
    { height: 20, bullish: true },
  ]);

  const readySoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  const lastScrollRef = useRef(0);

  // Load sounds
  useEffect(() => {
    if (typeof window === 'undefined') return;
    readySoundRef.current = new Audio('/sounds/up-ready.mp3');
    clickSoundRef.current = new Audio('/sounds/up-click.mp3');
  }, []);

  // Helper to generate new candles based on scroll direction
  const generateCandles = (scrollingDown: boolean, scrolledPct: number): CandleConfig[] => {
    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const biasBullish = scrollingDown;

    const baseCandle = (): CandleConfig => ({
      height: rand(8, 22),
      bullish: Math.random() < (biasBullish ? 0.65 : 0.35),
    });

    const c1 = baseCandle();
    const c2 = baseCandle();

    const mainHeight = 10 + (scrolledPct / 100) * 20 + rand(-3, 3);
    const mainBullish = biasBullish;

    const c3: CandleConfig = {
      height: mainHeight,
      bullish: mainBullish,
    };

    return [c1, c2, c3];
  };

  // Scroll progress + candle updates
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const scrollingDown = scrollTop > lastScrollRef.current;
      lastScrollRef.current = scrollTop;

      setProgress(scrolled);

      const atBottom = scrolled >= 96;
      setIsReady(atBottom);

      if (Math.abs(scrollTop - lastScrollRef.current) > 3 || !candles.length) {
        setCandles(generateCandles(scrollingDown, scrolled));
      }

      if (atBottom && !readyPlayed) {
        readySoundRef.current?.play().catch(() => {});
        setReadyPlayed(true);
      }
      if (!atBottom && readyPlayed) {
        setReadyPlayed(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyPlayed]);

  const scrollToTop = () => {
    clickSoundRef.current?.play().catch(() => {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hide when near top
  if (progress < 5) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`
        fixed bottom-6 right-5 z-50
        h-12 w-12
        rounded-full
        border border-slate-700/80
        bg-slate-950/95
        flex flex-col items-center justify-center
        backdrop-blur-md
        transition-transform duration-200
        hover:scale-110
        ${isReady ? 'up-pulse-ready' : 'shadow-[0_0_22px_rgba(15,23,42,0.9)]'}
      `}
    >
      {/* mini candlestick chart */}
      <div className="relative flex items-end justify-center gap-[2.5px] h-6 mb-0.5">
        {candles.map((c, idx) => (
          <Candle
            key={idx}
            height={c.height * 0.8}
            bullish={isReady ? true : c.bullish}
            isMain={idx === 2}
          />
        ))}
      </div>

      {/* Main label only */}
      <div className="flex items-center justify-center">
        <span
          className={`
            text-[10px] font-extrabold tracking-[0.18em] uppercase
            transition-all duration-200
            ${isReady ? 'text-emerald-300 scale-110' : 'text-cyan-200 scale-100'}
          `}
        >
          {isReady ? 'TP' : 'UP'}
        </span>
      </div>
    </button>
  );
}

/* === Single candle === */
function Candle({
  height,
  bullish,
  isMain,
}: {
  height: number;
  bullish: boolean;
  isMain?: boolean;
}) {
  const safeHeight = Math.max(4, Math.min(22, height));
  const bodyColor = bullish ? '#22c55e' : '#ef4444';

  return (
    <div className="relative flex flex-col items-center">
      {/* Wick */}
      <div className="w-[1px] h-6 bg-slate-600/80" />
      {/* Body */}
      <div
        className={`
          absolute bottom-0
          rounded-[2px]
          ${isMain ? 'w-[5.5px]' : 'w-[4.5px]'}
        `}
        style={{
          height: `${safeHeight}px`,
          background: isMain
            ? `linear-gradient(to top, ${bodyColor}, #e5f9ff)`
            : bodyColor,
        }}
      />
    </div>
  );
}
