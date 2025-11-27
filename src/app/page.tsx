'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import { motion, Variants } from 'framer-motion';
import {
  fadeInUp,
  fadeInScale,
  staggerContainer,
  staggerChild,
  defaultViewport,
} from '@/utils/animations';
import ScrollUpButton from '@/components/ScrollUpButton';

// Load Spline only on client
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

// 1️⃣ FIRST SECTION SPLINE (Hero)
const HERO_SCENE =
  'https://prod.spline.design/ADljPcmQFB-Ya58J/scene.splinecode';





export default function Home() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* =============== LIVE MARKET TICKER (NEW) =============== */}
      <MarketTicker />

      {/* ================= ALL OTHER SECTIONS ================= */}
      <div className="relative bg-[#020617]">

        {/* ================= SECTION 2 — ACADEMY OVERVIEW + LEARNING PATHS ================= */}
        {/* Full-width layout with big gap after ticker */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="relative w-full px-6 md:px-12 lg:px-24 xl:px-40 mt-24 md:mt-32 py-24 md:py-32 bg-gradient-to-b from-slate-950/80 via-black to-slate-950"
        >
          <div className="w-full space-y-16">
            {/* === Centered headline === */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInScale}
              className="flex items-center justify-center text-center"
            >
              <div className="space-y-4 max-w-3xl">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                  Inside the academy
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Become a{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 text-transparent bg-clip-text">
                    disciplined
                  </span>
                  ,{' '}
                  <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 text-transparent bg-clip-text">
                    systematic
                  </span>{' '}
                  trader.
                </h2>

                <p className="text-sm md:text-base text-slate-300">
                  BlackStar is built for traders who want to turn structure, risk and
                  psychology into a repeatable edge — not chase the next signal.
                </p>
                {/* Spacer Container */}
                <div className="w-full h-8"></div>
              </div>
            </motion.div>

            {/* === Two-column: value props + mastery card === */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-10 items-stretch">
              {/* LEFT: value stack */}
              <div className="flex flex-col gap-4">
                {/* Card 1 */}
                <div className="group relative flex items-start gap-4 rounded-3xl border border-slate-700/70 bg-slate-950/90 px-5 py-5 shadow-[0_18px_35px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/35 via-blue-500/40 to-slate-900">
                    <span className="text-xl">🎯</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-100 leading-relaxed">
                    BlackStar is a{' '}
                    <span className="text-cyan-300 font-semibold">
                      professional trading academy
                    </span>{' '}
                    focused on building consistency, discipline and long-term results.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group relative flex items-start gap-4 rounded-3xl border border-slate-700/70 bg-slate-950/90 px-5 py-5 shadow-[0_18px_35px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:border-blue-400/70 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400/35 via-purple-500/40 to-slate-900">
                    <span className="text-xl">🚀</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-100 leading-relaxed">
                    Move beyond signals with a{' '}
                    <span className="text-blue-300 font-semibold">
                      complete transformation system
                    </span>{' '}
                    combining strategy, execution, psychology and mindset training.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group relative flex items-start gap-4 rounded-3xl border border-slate-700/70 bg-slate-950/90 px-5 py-5 shadow-[0_18px_35px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:border-purple-400/70 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400/35 via-pink-500/40 to-slate-900">
                    <span className="text-xl">📈</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-100 leading-relaxed">
                    Follow a{' '}
                    <span className="text-purple-300 font-semibold">
                      structured, step-by-step path
                    </span>{' '}
                    from beginner to confident, rule-based live execution.
                  </p>
                </div>
              </div>

              {/* RIGHT: “What you master” premium card */}
              <div className="flex">
                <div
                  className="
                    relative w-full rounded-[28px] overflow-hidden
                    border border-cyan-400/60
                    bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900
                    px-7 md:px-9 py-8 md:py-9
                    shadow-[0_0_55px_rgba(34,211,238,0.22)]
                  "
                >
                  {/* subtle glow at bottom-right */}
                  <div className="pointer-events-none absolute -right-20 -bottom-20 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl" />
                  <h3 className="text-xl md:text-2xl font-semibold text-cyan-50 mb-3">
                    What you master inside BlackStar
                  </h3>

                  <p className="text-[12px] md:text-sm text-slate-300 mb-5 max-w-xl">
                    A complete toolkit to trade with structure, confidence and
                    professional-grade risk management.
                  </p>

                  <ul className="space-y-3 text-[13px] md:text-sm text-slate-100 pb-1">
                    <li className="flex items-start gap-3">
                      <span className="mt-[2px] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-slate-950">
                        ✔
                      </span>
                      <span>Smart Money Concepts &amp; institutional order flow.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-[2px] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-slate-950">
                        ✔
                      </span>
                      <span>
                        Trade psychology, emotional control and decision discipline.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-[2px] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-slate-950">
                        ✔
                      </span>
                      <span>Precision entry &amp; exit systems tailored to your style.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-[2px] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-slate-950">
                        ✔
                      </span>
                      <span>
                        Pro-level risk models, drawdown rules and capital protection.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-[2px] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-slate-950">
                        ✔
                      </span>
                      <span>
                        Journaling, data review and performance-tracking workflows.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ---------- Bottom: Learning paths + stats ---------- */}
            <div className="w-full mt-16 flex flex-col items-center">
              {/* Spacer Container Above */}
              <div className="w-full h-16"></div>

              {/* Heading + subtitle */}
              {/* Spacer Container */}
              <div className="w-full h-12"></div>

              <div className="flex flex-col items-center justify-center text-center gap-4 max-w-2xl mx-auto px-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Your learning paths
                </h3>

                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  Institutional-level education. Real market execution. Choose the track
                  that matches where you are in your trading journey.
                </p>
              </div>

              {/* Card grid – full width with side padding */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={staggerContainer}
                className="mt-12 flex justify-center w-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl w-full mx-auto">
                  <motion.div variants={staggerChild}>
                    <AcademyCard
                      title="Modules"
                      desc="Structured learning system."
                      glow="cyan"
                      link="/modules"
                      imageSrc="/learning-paths/modules.png"
                    />
                  </motion.div>
                  <motion.div variants={staggerChild}>
                    <AcademyCard
                      title="Live Trading"
                      desc="Weekly market sessions."
                      glow="pink"
                      link="/live"
                      imageSrc="/learning-paths/live-trading.png"
                    />
                  </motion.div>
                  <motion.div variants={staggerChild}>
                    <AcademyCard
                      title="Video Vault"
                      desc="On-demand replays."
                      glow="amber"
                      link="/videos"
                      imageSrc="/learning-paths/video-vault.png"
                    />
                  </motion.div>
                  <motion.div variants={staggerChild}>
                    <AcademyCard
                      title="Pro Courses"
                      desc="Advanced mentorship."
                      glow="purple"
                      link="/courses"
                      imageSrc="/learning-paths/pro-courses.png"
                    />
                  </motion.div>
                  <motion.div variants={staggerChild}>
                    <AcademyCard
                      title="Junior Track"
                      desc="Beginner-friendly path."
                      glow="green"
                      link="/junior"
                      imageSrc="/learning-paths/junior-track.png"
                    />
                  </motion.div>
                  <motion.div variants={staggerChild}>
                    <AcademyCard
                      title="Certification"
                      desc="Performance-based."
                      glow="blue"
                      link="/certified"
                      imageSrc="/learning-paths/certification.png"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Small thin container above stats */}
              <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mt-16 mb-8"></div>

              {/* Stats – line across full width */}
              <div className="mt-12 pt-8 border-t border-cyan-500/15 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center w-full">
                <BigStat number="14+" label="Core modules" />
                <BigStat number="52+" label="Live sessions / year" />
                <BigStat number="500+" label="Active students" />
                <BigStat number="Lifetime" label="Access to content" />
              </div>
            </div>
          </div>
        </motion.section>



        <section className="w-full mt-32 md:mt-48 py-24 md:py-32 bg-slate-950 border-t border-slate-900/70">
          <div className="w-full">
            {/* Spacer Container */}
            <div className="w-full h-12"></div>

            {/* Heading */}
            <div className="w-full text-center mb-16 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet the traders who make BTB
              </h2>
              <p className="text-gray-400">
                Professional trading programs designed for different experience levels and goals.
              </p>
              {/* Spacer Container */}
              <div className="w-full h-8"></div>
            </div>

            {/* Premium Cards Grid - Flex Side by Side */}
            <div className="flex flex-row justify-center gap-3 w-full px-4">
              {/* Card 1 - Alex R. */}
              <TraderProfileCard
                image="/programs/placeholder.jpg"
                name="ALEX R."
                role="Head Mentor"
                rating="4.9"
                students="1500+"
                description="Former institutional trader with 8 years of experience. Specializes in order flow and supply/demand zones."
              />

              {/* Card 2 - Sarah K. */}
              <TraderProfileCard
                image="/programs/placeholder.jpg"
                name="SARAH K."
                role="Swing Specialist"
                rating="4.8"
                students="2800+"
                description="Master of market structure and psychology. Helps traders build patience and discipline for long-term growth."
              />

              {/* Card 3 - Michael T. */}
              <TraderProfileCard
                image="/programs/placeholder.jpg"
                name="MICHAEL T."
                role="Scalping Expert"
                rating="4.9"
                students="100+"
                description="Precision-based scalper focusing on lower timeframes. Teaches the 'Advanced TFL' system for rapid account compounding."
              />
            </div>
          </div>
        </section>


        {/* ================= SECTION — YOUR BLACKSTAR JOURNEY ================= */}
        <section className="btb-section">
          {/* Small spacer container above */}
          <div className="w-full h-16"></div>

          {/* Centered subtitle - full page width */}
          <div className="w-full flex justify-center mb-12 px-4">
            <div className="max-w-3xl text-center">
              <span className="btb-divider" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Your BlackStar Journey
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                From mastering foundational market principles to executing advanced institutional strategies — follow our proven framework to transform from reactive trading to disciplined, systematic execution. Build unshakeable confidence through structured learning, real-time mentorship, and data-driven performance refinement.
              </p>
            </div>
          </div>

          {/* Centered 1×4 grid of square cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="flex justify-center px-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10">
              <motion.div variants={staggerChild}>
                <JourneyCard
                  step="1"
                  colorClass="from-cyan-400 to-blue-500"
                  title="Build Your Foundation"
                  text="Master the essentials of FX market dynamics, candlestick psychology, and risk management to build an unbreakable trading base."
                />
              </motion.div>
              <motion.div variants={staggerChild}>
                <JourneyCard
                  step="2"
                  colorClass="from-blue-400 to-indigo-500"
                  title="Master Market Logic"
                  text="Decode institutional order flow. Learn to identify liquidity, structure shifts (BOS/CHoCH), and high-probability order blocks."
                />
              </motion.div>
              <motion.div variants={staggerChild}>
                <JourneyCard
                  step="3"
                  colorClass="from-indigo-400 to-violet-500"
                  title="Engineer Your Strategy"
                  text="Develop a mechanical edge. Synthesize bias, confirmations, and precise entry models into a repeatable, rule-based system."
                />
              </motion.div>
              <motion.div variants={staggerChild}>
                <JourneyCard
                  step="4"
                  colorClass="from-emerald-400 to-teal-500"
                  title="Execute & Refine"
                  text="Bridge the gap between theory and live execution. Trade with mentors, review performance data, and scale your capital."
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 5 — TESTIMONIALS ================= */}
        <section className="btb-section w-full pt-40 md:pt-48 pb-24 md:pb-32 bg-slate-950 border-t border-slate-900/70 mb-24 md:mb-32">
          <div className="w-full">
            {/* Trading-themed Decorative Element */}
            <div className="w-full flex items-center justify-center mb-16 gap-4 opacity-90">
              {/* Left Line (Red/Bearish side) */}
              <div className="h-1.5 w-24 md:w-40 bg-gradient-to-r from-transparent via-red-900/40 to-red-500/40 rounded-full"></div>

              {/* Center: Red & Green Candlesticks */}
              <div className="flex items-end gap-1 pb-2">
                {/* Bearish Candle */}
                <div className="w-1.5 h-4 bg-red-500 rounded-sm shadow-[0_0_10px_rgba(239,68,68,0.3)]"></div>
                {/* Bullish Candle */}
                <div className="w-1.5 h-3 bg-emerald-600 rounded-sm"></div>
                {/* Breakout Candle */}
                <div className="relative w-2 h-8 bg-emerald-400 rounded-sm shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[1px] h-11 bg-emerald-200/50"></div>
                </div>
              </div>

              {/* Right Line (Green/Bullish side) */}
              <div className="h-1.5 w-24 md:w-40 bg-gradient-to-l from-transparent via-emerald-900/40 to-emerald-500/40 rounded-full"></div>
            </div>

            <div className="w-full text-center mb-16 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Students Say
              </h2>
              <p className="text-gray-400">
                Real results from traders who committed to the process.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-10 w-full px-4"
            >
              {/* Card 1 */}
              <motion.div variants={staggerChild} className="w-full sm:w-80">
                <div className="group relative bg-slate-900 rounded-2xl border border-slate-800/70 shadow-lg aspect-square overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300">
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src="/avatars/student-avatar.jpg"
                      alt="Trader"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Glassy Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent backdrop-blur-[2px]"></div>
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-center">
                    <p className="text-slate-200 text-sm italic mb-4 drop-shadow-md">
                      "The structured approach to liquidity concepts completely changed how I view the charts. Finally profitable after 2 years of struggle."
                    </p>
                    <h4 className="text-white font-bold text-lg drop-shadow-md">Michael T.</h4>
                    <span className="text-cyan-400 text-xs font-semibold tracking-wide uppercase">Funded Trader</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={staggerChild} className="w-full sm:w-80">
                <div className="group relative w-full sm:w-80 bg-slate-900 rounded-2xl border border-slate-800/70 shadow-lg aspect-square overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300">
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src="/avatars/student-avatar.jpg"
                      alt="Trader"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Glassy Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent backdrop-blur-[2px]"></div>
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-center">
                    <p className="text-slate-200 text-sm italic mb-4 drop-shadow-md">
                      "I used to overtrade and blow accounts. The risk management module alone is worth the price of admission."
                    </p>
                    <h4 className="text-white font-bold text-lg drop-shadow-md">Sarah J.</h4>
                    <span className="text-cyan-400 text-xs font-semibold tracking-wide uppercase">Junior Trader</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={staggerChild} className="w-full sm:w-80">
                <div className="group relative w-full sm:w-80 bg-slate-900 rounded-2xl border border-slate-800/70 shadow-lg aspect-square overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300">
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src="/avatars/student-avatar.jpg"
                      alt="Trader"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Glassy Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent backdrop-blur-[2px]"></div>
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-center">
                    <p className="text-slate-200 text-sm italic mb-4 drop-shadow-md">
                      "The mentorship is next level. Having a pro review my trades weekly helped me spot mistakes I didn't know I was making."
                    </p>
                    <h4 className="text-white font-bold text-lg drop-shadow-md">David K.</h4>
                    <span className="text-cyan-400 text-xs font-semibold tracking-wide uppercase">Pro Member</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div variants={staggerChild} className="w-full sm:w-80">
                <div className="group relative w-full sm:w-80 bg-slate-900 rounded-2xl border border-slate-800/70 shadow-lg aspect-square overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300">
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src="/avatars/student-avatar.jpg"
                      alt="Trader"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Glassy Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent backdrop-blur-[2px]"></div>
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-center">
                    <p className="text-slate-200 text-sm italic mb-4 drop-shadow-md">
                      "The mentorship calls are gold. Being able to ask questions and get real-time feedback on my analysis has been invaluable."
                    </p>
                    <h4 className="text-white font-bold text-lg drop-shadow-md">James L.</h4>
                    <span className="text-cyan-400 text-xs font-semibold tracking-wide uppercase">Crypto Trader</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div >
      <ScrollUpButton />
    </main >
  );
}

/* ---------- Helper components ---------- */

function AcademyCard({
  title,
  desc,
  link,
  imageSrc,
  glow,
}: {
  title: string;
  desc: string;
  link: string;
  imageSrc: string;
  glow: 'cyan' | 'pink' | 'amber' | 'purple' | 'green' | 'blue';
}) {
  const glowMap: Record<string, string> = {
    cyan: 'hover:border-cyan-400/70 hover:shadow-[0_24px_50px_rgba(34,211,238,0.35)]',
    pink: 'hover:border-pink-400/70 hover:shadow-[0_24px_50px_rgba(236,72,153,0.35)]',
    amber: 'hover:border-amber-400/70 hover:shadow-[0_24px_50px_rgba(251,191,36,0.35)]',
    purple:
      'hover:border-purple-400/70 hover:shadow-[0_24px_50px_rgba(168,85,247,0.35)]',
    green:
      'hover:border-emerald-400/70 hover:shadow-[0_24px_50px_rgba(52,211,153,0.35)]',
    blue: 'hover:border-blue-400/70 hover:shadow-[0_24px_50px_rgba(59,130,246,0.35)]',
  };

  return (
    <a
      href={link}
      className="group flex flex-col items-center gap-3 text-center"
    >
      <div
        className={`
          relative w-full max-w-[260px] mx-auto aspect-square
          rounded-[32px] overflow-hidden
          bg-slate-950/80 border border-slate-800/70
          shadow-[0_18px_40px_rgba(0,0,0,0.75)]
          backdrop-blur-xl
          transition-all duration-400
          group-hover:-translate-y-2 group-hover:scale-[1.02]
          ${glowMap[glow]}
        `}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain contrast-110 brightness-95"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[32px] shadow-inner shadow-black/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-black/25 opacity-70 group-hover:opacity-90 transition-opacity duration-400" />
      </div>

      <div className="space-y-1">
        <h4 className="text-sm md:text-[15px] font-semibold text-white">
          {title}
        </h4>
        <p className="text-[11px] md:text-xs text-slate-400">{desc}</p>
      </div>
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

function JourneyCard({
  step,
  colorClass,
  title,
  text,
}: {
  step: string;
  colorClass: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className={`
        group relative w-full max-w-[260px] aspect-square
        rounded-[32px] border border-slate-800/80 bg-slate-900/70
        shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl
        flex flex-col items-center text-center px-6 py-8
        transition-all duration-300
        hover:-translate-y-2 hover:border-cyan-400/70
        hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
      `}
    >
      {/* soft glow behind card */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/5 via-transparent to-cyan-500/5 opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* content layer */}
      <div className="relative flex flex-col items-center justify-center h-full">
        {/* step badge */}
        <div
          className={`
            mb-6 flex h-14 w-14 items-center justify-center rounded-full
            bg-gradient-to-br ${colorClass}
            shadow-[0_0_25px_rgba(59,130,246,0.45)]
          `}
        >
          <span className="text-lg font-semibold text-white">{step}</span>
        </div>

        {/* text */}
        <div className="space-y-3">
          <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

type TraderStripCardProps = {
  index: number;
  label: string;
  quote: string;
  name: string;
  avatar: string;
  showLeftDot?: boolean;
};

function TraderStripCard({
  index,
  label,
  quote,
  name,
  avatar,
  showLeftDot = false,
}: TraderStripCardProps) {
  return (
    <div className="relative flex flex-col justify-between px-7 md:px-9 py-10 min-h-[260px]">
      {/* Connector dot on the left (for middle & last card) */}
      {showLeftDot && (
        <div className="hidden md:block absolute top-1/2 -left-px -translate-x-1/2 -translate-y-1/2">
          <div className="h-4 w-4 rounded-full bg-black border border-slate-600" />
        </div>
      )}

      {/* Big gold number */}
      <div className="absolute top-6 right-7 text-5xl md:text-6xl font-extrabold text-amber-500/90">
        {index}
      </div>

      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full mb-4 border-2 border-amber-400/30"
      />

      {/* Content */}
      <div>
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-3">
          {label}
        </p>
        <p className="text-sm md:text-[15px] leading-relaxed text-slate-100">
          "{quote}"
        </p>
      </div>

      {/* Name / tag */}
      <div className="mt-6 text-xs md:text-sm font-semibold text-amber-300">
        {name}
      </div>
    </div>
  );
}

function TraderProfileCard({
  image,
  name,
  role,
  rating,
  students,
  description,
}: {
  image: string;
  name: string;
  role: string;
  rating: string;
  students: string;
  description: string;
}) {
  return (
    <div className="w-full max-w-[360px] relative rounded-2xl overflow-hidden shadow-lg group hover:scale-[1.02] transition-all duration-300">
      {/* Background Image - Full Card */}
      <div className="relative h-[550px] w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/95"></div>
        <div className="absolute inset-0 bg-slate-900/20"></div>

        {/* Border */}
        <div className="absolute inset-0 border-2 border-slate-800/50 group-hover:border-cyan-500/50 transition-colors duration-300 rounded-2xl"></div>

        {/* Content Overlaid on Image */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-center">

          {/* Top: Name & Role */}
          <div className="pt-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide drop-shadow-lg mb-1">
              {name}
            </h3>
            <p className="text-cyan-400 font-bold text-sm tracking-[0.2em] uppercase">
              {role}
            </p>
          </div>

          {/* Bottom: Bio, Stats, Button */}
          <div className="space-y-4">
            {/* Bio */}
            <p className="text-white text-sm leading-relaxed font-medium drop-shadow-md">
              {description}
            </p>

            {/* Stats Row */}
            <div className="flex items-center justify-center gap-8 border-t border-white/20 pt-4">
              {/* Rating */}
              <div className="flex flex-col gap-1 items-center">
                <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">Rating</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold">{rating}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 fill-cyan-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Students */}
              <div className="flex flex-col gap-1 items-center">
                <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">Mentored</span>
                <span className="text-white font-bold">{students}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full px-6 py-3 rounded-lg bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/60 text-cyan-300 font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300 text-xs tracking-widest uppercase shadow-lg">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- LIVE MARKET TICKER (USES /api/market-ticker) ---------- */

type MarketItem = {
  code: string;
  name: string;
  price: number;
  change: number;
  changePct: number;
  pillClass: string;
  symbol?: string;
};

function MarketTicker() {
  const [items, setItems] = useState<MarketItem[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      const res = await fetch('/api/send/market-ticker', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setItems(data.items || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
    const id = setInterval(loadData, 30000);
    return () => clearInterval(id);
  }, []);

  if (!items.length && loading) return null;

  const loopItems = [...items, ...items];

  return (
    <div className="relative z-10 border-y border-white/5 bg-black/60">
      <div className="ticker-mask w-full px-4 py-2">
        <div className="ticker-strip">
          {loopItems.map((item, idx) => {
            const positive = item.change >= 0;
            return (
              <a
                key={idx}
                href={`https://www.tradingview.com/chart/?symbol=${item.symbol}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-shrink-0 items-center gap-3 text-xs text-slate-100 hover:bg-white/5 p-1 rounded transition-colors"
              >
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white ${item.pillClass}`}
                >
                  {item.code}
                </div>

                <div className="flex flex-col leading-tight">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-[11px] text-slate-300">
                    {(item.price || 0).toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <span
                  className={`text-[11px] font-semibold ${positive ? 'text-emerald-400' : 'text-red-400'
                    }`}
                >
                  {item.change.toFixed(2)} ({item.changePct.toFixed(2)}%)
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
