// src/app/blog/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function BlogPage() {
    return (
        <main className="bg-[#020617] text-white min-h-screen">
            <Navbar />
            <PlaceholderPage
                label="BTB Blog"
                tag="Insights"
                description="Soon this will host institutional-style breakdowns, risk frameworks and trading psychology articles."
            />
        </main>
    );
}
