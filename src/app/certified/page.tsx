// src/app/certified/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function CertifiedPage() {
    return (
        <main className="bg-[#020617] text-white min-h-screen">
            <Navbar />
            <PlaceholderPage
                label="Certification"
                tag="Performance based"
                description="Here you'll see the BTB certification criteria, performance metrics and how to qualify."
            />
        </main>
    );
}
