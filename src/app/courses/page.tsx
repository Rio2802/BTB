// src/app/courses/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function CoursesPage() {
    return (
        <main className="bg-[#020617] text-white min-h-screen">
            <Navbar />
            <PlaceholderPage
                label="Pro Courses"
                tag="Advanced"
                description="This will showcase advanced mentorship programs, pricing, timelines and cohort details."
            />
        </main>
    );
}
