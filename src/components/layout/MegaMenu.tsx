'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
    title: string;
    href: string;
    description?: string;
    icon?: string;
}

interface MegaMenuProps {
    title: string;
    sections: {
        title: string;
        items: MenuItem[];
    }[];
}

export default function MegaMenu({ title, sections }: MegaMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="mega-menu relative inline-table h-[55px] w-[250px] top-[70px] transition-all duration-300"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="btn-mega flex items-center gap-2 text-base px-3.5 py-2 transition-all duration-300 w-max h-16 leading-[65px] relative z-[98] cursor-pointer hover:font-bold">
                <span></span>
                {title}
                <ChevronDown className="w-4 h-4" />
            </button>

            {isOpen && (
                <div className="menu absolute top-[-1px] bg-[#292e33] border border-[#1f2327] rounded-lg opacity-100 visible h-auto w-full transition-all duration-300 z-[90]">
                    {sections.map((section, idx) => (
                        <div key={idx} className="border-b border-black last:border-b-0">
                            <div className="p-6">
                                <h3 className="text-sm font-medium text-gray-400 mb-3">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <Link
                                                href={item.href}
                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1f2327] transition-colors group"
                                            >
                                                {item.icon && (
                                                    <span className="text-2xl text-gray-400 group-hover:text-[#0097FC]">
                                                        {item.icon}
                                                    </span>
                                                )}
                                                <div>
                                                    <div className="font-bold text-white group-hover:text-[#0097FC]">
                                                        {item.title}
                                                    </div>
                                                    {item.description && (
                                                        <div className="text-sm text-gray-400">
                                                            {item.description}
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
