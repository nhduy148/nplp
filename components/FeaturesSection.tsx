'use client';

import { useTranslations } from 'next-intl';

export default function FeaturesSection() {
    const t = useTranslations('Features');

    return (
        <div id="features" className="max-w-7xl mx-auto px-4 py-6 md:py-16">
            <div className="flex flex-col items-center mb-8 md:mb-12">
                <div className="bg-[#F5C34929] text-[#F5C349] px-4 py-1 rounded-full text-lg font-medium mb-4">
                    {t('feature_badge')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#212b36]">
                    {t('title')}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {t.raw('features').map((feature: any, index: number) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border"
                        style={{
                            background: 'var(--Action-hover, rgba(138, 160, 173, 0.1))'
                        }}
                    >
                        <div className="mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                    fill="#f2bd00"
                                    stroke="#f2bd00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
} 