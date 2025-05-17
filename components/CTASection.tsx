'use client';

import Image from "next/image"
import { useTranslations } from 'next-intl';

export function CTASection() {
    const t = useTranslations('CTA');

    return (
        <div className="bg-[#f5c349] pt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#212b36] mb-4">{t('title')}</h2>
                <p className="text-[#212b36] text-lg mb-8 max-w-3xl mx-auto">
                    {t('description')}
                </p>
                <button className="bg-[#212b36] hover:bg-[#303236] text-white font-medium py-3 px-8 rounded-full">
                    {t('button')}
                </button>
            </div>

            {/* Interface Preview */}
            <div className="max-w-7xl mx-auto mt-12 px-4">
                <Image src="/cta/cta-banner.png" alt="Interface Preview" width={1000} height={1000} className="w-full" />
            </div>
        </div>
    )
} 