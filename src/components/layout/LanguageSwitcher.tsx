'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LanguageSwitcher() {
    const [currentLang, setCurrentLang] = useState('es');

    const switchLanguage = (lang: string) => {
        setCurrentLang(lang);
        // TODO: Integrate with next-intl or i18n solution
        console.log(`Switching to ${lang}`);
    };

    return (
        <div className="language flex items-center gap-2 w-[70px] justify-between">
            <button
                className="language-item block cursor-pointer"
                onClick={() => switchLanguage('es')}
                aria-label="Español"
            >
                <Image
                    src="/img/bandera_es.png"
                    alt="Español"
                    width={25}
                    height={17}
                />
            </button>
            <button
                className="language-item block cursor-pointer"
                onClick={() => switchLanguage('en')}
                aria-label="English"
            >
                <Image
                    src="/img/bandera_en.png"
                    alt="English"
                    width={25}
                    height={17}
                />
            </button>
        </div>
    );
}
