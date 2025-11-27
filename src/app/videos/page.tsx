// src/app/videos/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function VideosPage() {
    return (
        <main className="bg-[#020617] text-white min-h-screen">
            <Navbar />
            <PlaceholderPage
                label="Video Vault"
                tag="Library"
                description="This will contain all on-demand replays, playbook sessions and psychology calls in one organised library."
            />
        </main>
    );
}
