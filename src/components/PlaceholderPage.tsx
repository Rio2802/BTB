// src/components/PlaceholderPage.tsx
'use client';

type PlaceholderPageProps = {
    label: string;          // e.g. "Modules"
    tag?: string;           // small badge e.g. "Coming soon"
    description?: string;   // short body text
};

export default function PlaceholderPage({
    label,
    tag = 'Coming soon',
    description = 'This page is being built. The full BTB experience for this section will be available shortly.',
}: PlaceholderPageProps) {
    return (
        <section className="relative min-h-[calc(100vh-56px)] px-4 md:px-8 lg:px-16 py-16 flex items-center justify-center overflow-hidden">
            {/* Background glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="absolute right-[-40px] bottom-[-80px] h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
            </div>

            {/* Content card */}
            <div className="relative w-full max-w-2xl">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 shadow-[0_24px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl px-7 py-9 md:px-9 md:py-11">
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-3 py-1 mb-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] tracking-[0.25em] uppercase text-cyan-200">
                            {tag}
                        </span>
                    </div>

                    {/* Title + text */}
                    <h1 className="text-2xl md:text-3xl font-semibold mb-3">
                        {label}{' '}
                        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            page
                        </span>{' '}
                        is in progress.
                    </h1>

                    <p className="text-sm md:text-[15px] text-slate-300 mb-6">
                        {description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 text-[13px] text-slate-300 mb-7">
                        <li>• Layout & content are being finalised by the BTB team.</li>
                        <li>• You can still explore other sections of the academy.</li>
                        <li>• If you&apos;re serious about joining, use the buttons below.</li>
                    </ul>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="/join"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_44px_rgba(34,211,238,0.6)] hover:scale-[1.03] transition"
                        >
                            Join the academy →
                        </a>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-950/80 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
                        >
                            Back to home
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
