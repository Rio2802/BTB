import React from 'react';

export default function Footer() {
    return (
        <>
            {/* Small thin decorative container */}
            <div className="w-full flex justify-center py-8 bg-[#020617]">
                <div className="w-full max-w-md h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-full"></div>
            </div>

            {/* Invisible spacer container */}
            <div className="w-full h-18 bg-[#020617]"></div>



            {/* ================= FULL WIDTH NEXT STEP CTA ================= */}
            <section className="relative w-full bg-[#020617]">

                <div className="w-full px-6 md:px-16 py-10 md:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

                    {/* LEFT CONTENT */}
                    <div className="max-w-3xl space-y-2">
                        <p className="text-[11px] tracking-[0.35em] text-cyan-400 uppercase mb-1">
                            Next Step
                        </p>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                            Ready to build a disciplined, systematic trading framework?
                        </h2>

                        <p className="text-sm text-slate-300 max-w-2xl">
                            Join BlackStar Trading Bureau and follow a structured path from
                            foundations to live execution — with risk, psychology and data
                            at the core.
                        </p>

                        <p className="text-xs text-slate-500">
                            No sales spam. Just clarity on whether BTB is right for you.
                        </p>
                    </div>

                    {/* RIGHT BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full lg:w-auto">

                        <a
                            href="/join"
                            className="
                                inline-flex items-center justify-center
                                rounded-full
                                bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600
                                px-6 py-3
                                text-sm font-semibold text-black
                                shadow-[0_12px_45px_rgba(56,189,248,0.6)]
                                hover:scale-105 transition
                                w-full sm:w-auto
                            "
                        >
                            Join the academy →
                        </a>

                        <a
                            href="/contact"
                            className="
                                inline-flex items-center justify-center
                                rounded-full border border-white/30
                                bg-transparent
                                px-6 py-3
                                text-sm font-semibold text-white
                                hover:border-cyan-400 hover:text-cyan-300
                                transition
                                w-full sm:w-auto
                            "
                        >
                            Talk to the team
                        </a>
                    </div>

                </div>
            </section>

            {/* Small invisible spacer container */}
            <div className="w-full h-4 bg-[#020617]"></div>

            {/* ================= FOOTER ================= */}
            <footer className="border-t border-slate-800 bg-[#020617] px-6 md:px-16 py-10 md:py-12">
                <div className="w-full space-y-10">
                    {/* Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-14">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-[16px] font-bold text-slate-950 shadow-lg">
                                    ★
                                </div>
                                <div>
                                    <p className="text-[11px] tracking-[0.3em] uppercase text-cyan-400">
                                        Blackstar
                                    </p>
                                    <p className="text-[11px] tracking-[0.3em] uppercase text-slate-400">
                                        Trading Bureau
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-300 mb-8 max-w-md">
                                A professional trading academy focused on discipline, structure,
                                psychology and institution-level execution. Built for serious
                                traders who want consistency — not shortcuts.
                            </p>

                            {/* Socials */}
                            <div className="flex flex-wrap gap-2">
                                <a href="#" className="h-9 w-9 rounded-full border border-slate-700 bg-slate-900/80 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-900 transition">
                                    <svg className="w-4 h-4 fill-slate-200" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="#" className="h-9 w-9 rounded-full border border-slate-700 bg-slate-900/80 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-900 transition">
                                    <svg className="w-4 h-4 fill-slate-200" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="#" className="h-9 w-9 rounded-full border border-slate-700 bg-slate-900/80 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-900 transition">
                                    <svg className="w-4 h-4 fill-slate-200" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                <a href="#" className="h-9 w-9 rounded-full border border-slate-700 bg-slate-900/80 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-900 transition">
                                    <svg className="w-4 h-4 fill-slate-200" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="#" className="h-9 w-9 rounded-full border border-slate-700 bg-slate-900/80 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-900 transition">
                                    <svg className="w-4 h-4 fill-slate-200" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div>
                            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400 uppercase mb-4">
                                Quick links
                            </p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li><a href="/" className="hover:text-cyan-400">Home</a></li>
                                <li><a href="/modules" className="hover:text-cyan-400">Modules</a></li>
                                <li><a href="/live" className="hover:text-cyan-400">Live Trading</a></li>
                                <li><a href="/courses" className="hover:text-cyan-400">Pro Courses</a></li>
                                <li><a href="/junior" className="hover:text-cyan-400">Junior Track</a></li>
                                <li><a href="/contact" className="hover:text-cyan-400">Contact</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400 uppercase mb-4">
                                Legal / Info
                            </p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li><a href="/blog" className="hover:text-cyan-400">Blog</a></li>
                                <li><a href="/faqs" className="hover:text-cyan-400">FAQs</a></li>
                                <li><a href="/privacy" className="hover:text-cyan-400">Privacy Policy</a></li>
                                <li><a href="/terms" className="hover:text-cyan-400">Terms &amp; Conditions</a></li>
                                <li><a href="/disclaimer" className="hover:text-cyan-400">Risk Disclaimer</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="flex items-center justify-center gap-3 border-t border-slate-800 pt-4 text-[11px] text-slate-500">
                        <p>
                            © {new Date().getFullYear()} BlackStar Trading Bureau. All rights reserved.
                        </p>
                        <span className="text-slate-700">|</span>
                        <p>
                            Designed by <span className="text-cyan-400 font-semibold">RIO</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
