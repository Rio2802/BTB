'use client';

import { motion } from 'framer-motion';

export default function ScrollDownIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-auto cursor-pointer"
            onClick={() => {
                const nextSection = document.getElementById('market-ticker');
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Fallback if ticker not found, scroll by window height
                    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }
            }}
        >
            {/* Glassy Pill Container */}
            <div className="relative w-[30px] h-[50px] rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex justify-center p-2 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors duration-300">
                {/* Animated Dot */}
                <motion.div
                    animate={{
                        y: [0, 24, 0],
                        opacity: [1, 0.6, 1],
                        scale: [1, 2, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                />
            </div>

            {/* Text */}
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400/80 font-medium">
                Scroll
            </span>
        </motion.div>
    );
}
