'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
    const t = useTranslations('Header')

    const scrollToFeatures = (e: React.MouseEvent) => {
        e.preventDefault();
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 text-center mb-10">
                <header className="w-full py-4 px-[15%] flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.png" alt="NEXPOS" width={100} height={100} />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={scrollToFeatures}
                            className="text-gray-600 hover:text-gray-900 cursor-pointer"
                        >
                            {t('features')}
                        </button>
                        <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                            {t('pricing')}
                        </Link>
                        <Link href="/faqs" className="text-gray-600 hover:text-gray-900">
                            {t('faqs')}
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        <Button className="bg-amber-400 hover:bg-amber-500 text-gray-800 rounded-full px-6 py-2">{t('try_it_free')}</Button>
                    </div>
                </header>
            </div>
        </>
    )
} 