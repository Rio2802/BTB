// src/app/junior/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function JuniorPage() {
    return (
        <main className="bg-[#020617] text-white min-h-screen">
            <Navbar />
            <PlaceholderPage
                label="Junior Track"
                tag="Beginner path"
                description="A beginner-friendly roadmap for traders still mastering foundations, risk and structure before scaling."
            />
        </main>
    );
}
