'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import MegaMenu from './MegaMenu';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="relative top-0 left-0 border-b border-transparent flex items-center justify-between w-full px-[10%] py-3.5 z-30">
            <div className="logo">
                <Image
                    src="/img/LOGO_HIGHCOM.png"
                    alt="Highcom Logo"
                    width={120}
                    height={40}
                    priority
                />
            </div>

            <nav className={`navlist md:flex ${mobileMenuOpen ? 'open' : ''}`}>
                <Link
                    href="/#home"
                    className="nav-link"
                    style={{ '--i': 1 } as React.CSSProperties}
                >
                    Inicio
                </Link>
                <Link
                    href="/#about"
                    className="nav-link"
                    style={{ '--i': 2 } as React.CSSProperties}
                >
                    Nosotros
                </Link>
                <Link
                    href="/#contact"
                    className="nav-link"
                    style={{ '--i': 3 } as React.CSSProperties}
                >
                    Contáctenos
                </Link>
            </nav>

            <LanguageSwitcher />

            <button
                className="md:hidden text-2xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </header>
    );
}
