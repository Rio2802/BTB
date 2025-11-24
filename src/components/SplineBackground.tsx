'use client';

import dynamic from 'next/dynamic';

// Prevents SSR crash (VERY IMPORTANT)
const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

export default function SplineBackground() {
    return (
        <div
            className="fixed inset-0 -z-10"
            style={{ pointerEvents: 'none' }}
        >
            <Spline
                scene="https://prod.spline.design/mBuQ9fMtdQiCxFW9/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
            />

            {/* Overlay so text/UI is visible */}
            <div className="absolute inset-0 bg-black/60" />
        </div>
    );
}
