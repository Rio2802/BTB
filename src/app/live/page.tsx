// src/app/live/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function LivePage() {
    return (
        <main className="bg-[#020617] text-white min-h-screen">
            <Navbar />
            <PlaceholderPage
                label="Live Trading"
                tag="Sessions"
                description="This page will show the weekly live trading schedule, session replays and how to access the live rooms."
            />
        </main>
    );
}
