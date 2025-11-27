// Animation variants for scroll-triggered animations
import { Variants } from 'framer-motion';

// Fade In Up - Most common section reveal
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
        },
    },
};

// Fade In Down - Sections that drop from above
export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Fade In Left
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Fade In Right
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Fade + Scale (Zoom In) - For hero callouts and important cards
export const fadeInScale: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Fade + Blur - Text that comes into clarity
export const fadeInBlur: Variants = {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Staggered Container - For grids of cards
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // 100ms delay between each child
            delayChildren: 0.2, // Wait 200ms before starting
        },
    },
};

// Staggered Child - Individual cards in a grid
export const staggerChild: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Quick Fade - For subtle elements
export const quickFade: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
};

// Default viewport settings for whileInView
export const defaultViewport = {
    once: true, // Animation triggers only once
    margin: '-50px', // Trigger when element is 50px into viewport
    amount: 0.2, // Trigger when 20% of element is visible
};
