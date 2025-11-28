'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Radio, Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/modules', label: 'Modules' },
    { href: '/videos', label: 'Videos' },
    { href: '/certified', label: 'Certified' },
    { href: '/junior', label: 'Junior' },
    { href: '/blog', label: 'Blog' },
    { href: '/live', label: 'Live', icon: Radio },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHoveringTop, setIsHoveringTop] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY < 100) {
                setIsHoveringTop(true);
                setIsVisible(true);
            } else {
                setIsHoveringTop(false);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lastScrollY]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`
                    fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-in-out
                    ${isVisible || isHoveringTop ? 'translate-y-0' : '-translate-y-full'}
                `}
            >
                <div className="border-b border-white/5 bg-[#050817]/95 backdrop-blur-xl shadow-lg">
                    <div className="mx-auto w-full px-4 md:px-6 lg:px-8">
                        <nav className="relative flex h-16 items-center justify-between">
                            {/* LEFT: LOGO */}
                            <div className="flex-shrink-0 z-10">
                                <Link href="/" className="flex items-center group">
                                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-slate-800/30 border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300">
                                        <Image
                                            src="/blackstar-logo.png"
                                            alt="BlackStar Trading Academy"
                                            width={48}
                                            height={48}
                                            className="object-contain p-1"
                                            priority
                                        />
                                    </div>
                                </Link>
                            </div>

                            {/* CENTER: NAVIGATION LINKS - Desktop Only */}
                            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 lg:gap-8">
                                {navLinks.map(({ href, label, icon: Icon }) => {
                                    const isActive =
                                        href === '/'
                                            ? pathname === '/'
                                            : pathname.startsWith(href);

                                    return (
                                        <Link
                                            key={href}
                                            href={href}
                                            className={[
                                                'flex items-center gap-1.5 transition-all duration-300 font-medium text-sm relative group whitespace-nowrap',
                                                isActive
                                                    ? 'text-cyan-300'
                                                    : 'text-slate-300 hover:text-white',
                                            ].join(' ')}
                                        >
                                            {Icon && <Icon className="h-3.5 w-3.5" />}
                                            <span>{label}</span>
                                            {isActive && (
                                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></span>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* RIGHT: JOIN BUTTON (Desktop) & HAMBURGER (Mobile) */}
                            <div className="flex items-center gap-3 z-10">
                                {/* Join Button - Hidden on very small screens */}
                                <Link
                                    href="/join"
                                    className="join-button hidden sm:inline-flex group relative items-center justify-center gap-2 px-4 md:px-7 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-xs md:text-sm font-bold text-white overflow-hidden border-2 border-cyan-400/40 hover:border-cyan-300/60 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                                >
                                    <span className="progress-bar absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                                    <span className="absolute inset-0 rounded-full blur-xl bg-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="font-bold tracking-wide">Join</span>
                                        <svg
                                            className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </Link>

                                {/* Mobile Hamburger Button */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/50 transition-colors"
                                    aria-label="Toggle menu"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="w-5 h-5 text-cyan-400" />
                                    ) : (
                                        <Menu className="w-5 h-5 text-slate-300" />
                                    )}
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>

                <style jsx global>{`
                    @keyframes elastic-progress {
                        0% {
                            transform: scaleX(0);
                            transform-origin: left;
                        }
                        50% {
                            transform: scaleX(1.05);
                            transform-origin: left;
                        }
                        100% {
                            transform: scaleX(1);
                            transform-origin: left;
                        }
                    }
                    
                    .join-button:hover .progress-bar {
                        animation: elastic-progress 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    }
                    
                    .join-button {
                        box-shadow: 0 10px 40px -10px rgba(6, 182, 212, 0.4);
                    }
                    
                    .join-button:hover {
                        box-shadow: 0 15px 50px -5px rgba(6, 182, 212, 0.7);
                    }
                `}</style>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`
                    fixed top-16 right-0 bottom-0 w-72 bg-[#050817]/98 backdrop-blur-xl
                    border-l border-white/5 shadow-2xl z-40 md:hidden
                    transform transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Mobile Navigation Links */}
                    <nav className="flex flex-col gap-2">
                        {navLinks.map(({ href, label, icon: Icon }) => {
                            const isActive =
                                href === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(href);

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-lg
                                        transition-all duration-200 font-medium
                                        ${isActive
                                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                                            : 'text-slate-300 hover:bg-slate-800/50 hover:text-white border border-transparent'
                                        }
                                    `}
                                >
                                    {Icon && <Icon className="h-4 w-4" />}
                                    <span>{label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Join Button */}
                    <div className="mt-6 pt-6 border-t border-white/5">
                        <Link
                            href="/join"
                            className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform"
                        >
                            <span>Join Academy</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>

                    {/* Social Links or Additional Info */}
                    <div className="mt-auto pt-6 border-t border-white/5">
                        <p className="text-xs text-slate-400 text-center">
                            BlackStar Trading Bureau
                        </p>
                        <p className="text-xs text-slate-500 text-center mt-1">
                            Professional Trading Academy
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
