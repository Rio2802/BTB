// src/app/join/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function JoinPage() {
    return (
        <main className="bg-[#020617] text-white min-h-screen">
            <Navbar />
            <PlaceholderPage
                label="Join BlackStar"
                tag="Application"
                description="This will become the main application and onboarding page for new BTB students."
            />
        </main>
    );
}
