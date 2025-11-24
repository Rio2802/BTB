'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

// Load Spline only on client
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

// 1️⃣ FIRST SECTION SPLINE (Hero)
const HERO_SCENE =
  'https://prod.spline.design/ADljPcmQFB-Ya58J/scene.splinecode';

// 2️⃣ SPLINE FOR SECTIONS 2+
const SECOND_BACKGROUND_SCENE =
  'https://prod.spline.design/CCGDlzgKZe11VJqn/scene.splinecode';

export default function Home() {
  return (
    <main className="bg-[#020617] text-white">
      {/* NAVBAR ABOVE EVERYTHING */}
      <Navbar />

      {/* ================= HERO SECTION (SPLINE A — NON-INTERACTIVE) ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Spline A as non-interactive background */}
        <div className="absolute inset-0 pointer-events-none">
          <Spline
            scene={HERO_SCENE}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Soft overlay so navbar & any future text are readable */}
        <div className="pointer-events-none absolute inset-0 bg-black/20" />

        {/* Currently empty – just pure Spline hero */}
      </section>

      {/* ================= ALL OTHER SECTIONS (SPLINE B BACKGROUND) ================= */}
      <div className="relative bg-[#020617]">
        {/* Spline B background behind every section after hero */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Spline
            scene={SECOND_BACKGROUND_SCENE}
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-[#020617]" />
        </div>

        {/* ================= SECTION 2 — PREMIUM ACADEMY OVERVIEW ================= */}
        <section className="relative w-full px-8 md:px-16 lg:px-24 xl:px-32 py-24 md:py-28 bg-gradient-to-br from-slate-900/90 via-black to-slate-950 flex flex-col items-center gap-20">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter text-center">
            Become a <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 text-transparent bg-clip-text">disciplined</span>,<br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 text-transparent bg-clip-text">systematic</span> trader.
          </h2>

          {/* Description Cards Section */}
          <div className="w-full max-w-4xl flex flex-col items-center gap-10">
            <div className="w-full flex flex-col gap-5">
              {/* Description Card 1 */}
              <div className="group relative rounded-2xl border border-cyan-500/20 bg-slate-900/40 backdrop-blur-sm p-5 md:p-6 transition-all duration-500 hover:border-cyan-400/60 hover:bg-slate-900/70 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:-translate-y-1 hover:scale-[1.02]">
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-2xl md:text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                    🎯
                  </div>
                  <p className="flex-1 text-sm md:text-base text-gray-200 leading-relaxed pt-1 md:pt-2">
                    BlackStar is a <span className="text-cyan-300 font-semibold">professional trader academy</span> designed for those who want to master real market skills and build consistent, lasting trading success—not just chase signals.
                  </p>
                </div>
              </div>

              {/* Description Card 2 */}
              <div className="group relative rounded-2xl border border-blue-500/20 bg-slate-900/40 backdrop-blur-sm p-5 md:p-6 transition-all duration-500 hover:border-blue-400/60 hover:bg-slate-900/70 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:-translate-y-1 hover:scale-[1.02]">
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-2xl md:text-3xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                    🚀
                  </div>
                  <p className="flex-1 text-sm md:text-base text-gray-200 leading-relaxed pt-1 md:pt-2">
                    Go beyond signals: BlackStar arms you with a <span className="text-blue-300 font-semibold">complete transformation system</span> combining market knowledge, practical skill building, psychological mastery, and proven risk techniques.
                  </p>
                </div>
              </div>

              {/* Description Card 3 */}
              <div className="group relative rounded-2xl border border-purple-500/20 bg-slate-900/40 backdrop-blur-sm p-5 md:p-6 transition-all duration-500 hover:border-purple-400/60 hover:bg-slate-900/70 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:-translate-y-1 hover:scale-[1.02]">
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-purple-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl md:text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                    📈
                  </div>
                  <p className="flex-1 text-sm md:text-base text-gray-200 leading-relaxed pt-1 md:pt-2">
                    Join a <span className="text-purple-300 font-semibold">structured, step-by-step program</span> that bridges the gap between theory and live trading, supporting you from absolute beginner to skilled, independent trader.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="w-full flex flex-wrap gap-6 justify-center">
            <a href="/join" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 text-base font-bold text-white shadow-lg hover:scale-105 transition">Join the Academy →</a>
            <a href="/modules" className="rounded-xl border border-cyan-500/40 px-7 py-3 text-base font-semibold text-cyan-300 hover:bg-cyan-500/10 transition">View Curriculum</a>
          </div>

          {/* Mastery Section */}
          <div className="w-full flex justify-center mt-10 mb-10">
            <div className="w-full max-w-md rounded-3xl border border-cyan-400/25 bg-slate-900/75 backdrop-blur-2xl p-7 md:p-10 shadow-[0_0_90px_rgba(34,211,238,0.18)] transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_0_120px_rgba(34,211,238,0.3)]">
              <h4 className="text-lg font-semibold mb-4 text-cyan-300 text-center">What you master inside BlackStar</h4>
              <ul className="space-y-3 text-base text-gray-100">
                <li className="flex items-center gap-2 transition-colors duration-300 hover:text-cyan-300">
                  <span className="text-cyan-400">✔</span>
                  <span>Smart Money Concepts &amp; institutional order flow</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✔</span>
                  <span>Trade psychology and emotional control</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✔</span>
                  <span>Precision entry &amp; exit systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✔</span>
                  <span>Pro-level risk models</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✔</span>
                  <span>Journaling &amp; performance tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-12 w-full flex flex-col items-center relative overflow-visible">
            <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 rounded-full blur-sm animate-pulse"></span>
          </div>

          {/* Learning Paths Section */}
          <div className="space-y-10 w-full">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-2xl font-semibold text-white text-center w-full">
                Your learning paths
              </h3>
              <a href="/courses" className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 tracking-wide">
                Explore all programs →
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 w-full">
              <AcademyCard
                title="Modules"
                desc="Structured learning system."
                glow="cyan"
                link="/modules"
              />
              <AcademyCard
                title="Live Trading"
                desc="Weekly market sessions."
                glow="pink"
                link="/live"
              />
              <AcademyCard
                title="Video Vault"
                desc="On-demand replays."
                glow="amber"
                link="/videos"
              />
              <AcademyCard
                title="Pro Courses"
                desc="Advanced mentorship."
                glow="purple"
                link="/courses"
              />
              <AcademyCard
                title="Junior Track"
                desc="Beginner-friendly path."
                glow="green"
                link="/junior"
              />
              <AcademyCard
                title="Certification"
                desc="Performance-based."
                glow="blue"
                link="/certified"
              />
            </div>

            {/* Big Stats with equal horizontal gaps */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-center w-full">
              <BigStat number="14+" label="Core modules" />
              <BigStat number="52+" label="Live sessions / year" />
              <BigStat number="500+" label="Active students" />
              <BigStat number="Lifetime" label="Access to content" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------- Helper components for Section 2 ---------- */

function AcademyCard({
  title,
  desc,
  glow,
  link,
}: {
  title: string;
  desc: string;
  glow: 'cyan' | 'pink' | 'amber' | 'purple' | 'green' | 'blue';
  link: string;
}) {
  const glowMap: Record<string, string> = {
    cyan: 'hover:shadow-cyan-500/30 border-cyan-500/25',
    pink: 'hover:shadow-pink-500/30 border-pink-500/25',
    amber: 'hover:shadow-amber-500/30 border-amber-500/25',
    purple: 'hover:shadow-purple-500/30 border-purple-500/25',
    green: 'hover:shadow-green-500/30 border-green-500/25',
    blue: 'hover:shadow-blue-500/30 border-blue-500/25',
  };

  return (
    <a
      href={link}
      className={`relative flex flex-col items-center justify-center text-center rounded-2xl border ${glowMap[glow]} bg-slate-950/85 px-4 py-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-xl`}
    >
      <h4 className="mb-1 text-sm md:text-[15px] font-semibold text-white">
        {title}
      </h4>
      <p className="text-[11px] md:text-xs text-gray-400">{desc}</p>
    </a>
  );
}

function BigStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-1">
      <p className="text-3xl md:text-4xl font-bold text-cyan-400">
        {number}
      </p>
      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400">
        {label}
      </p>
    </div>
  );
}
