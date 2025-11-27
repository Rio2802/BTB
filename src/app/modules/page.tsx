// src/app/modules/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function ModulesPage() {
    return (
        <main className="bg-[#020617] text-white min-h-screen">
            <Navbar />
            <PlaceholderPage
                label="Modules"
                tag="Curriculum"
                description="This will host the full 14-module BTB curriculum with structure, outcomes and lesson breakdowns."
            />
        </main>
    );
}
