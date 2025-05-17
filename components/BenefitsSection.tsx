'use client';

import Image from "next/image"
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const CheckIcon = () => {
    return (
        <div className="w-6 h-6 rounded-full bg-[#f5c349] flex-shrink-0 flex items-center justify-center mr-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 text-[#212b36]"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
    )
}

export function BenefitsSection() {
    const t = useTranslations('Benefits');

    return (
        <div
            className="pt-0 pb-16 relative"
            style={{
                backgroundImage: 'url(/section-bg.png)',
                backgroundSize: '100% auto', // Scale to full width while maintaining aspect ratio
                backgroundPosition: 'center top', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent tiling
                backgroundColor: '#f5f5f5', // Match the background color to the image's edge (light beige/gray)
            }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="bg-[#F5C34929] text-[#F5C349] px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                            {t('benefits_badge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#212b36] mb-4">
                            {t('title')}
                        </h2>
                        <p className="text-[#637381] text-lg mb-8">
                            {t('description')}
                        </p>

                        <div className="space-y-4">
                            {t.raw('benefits').map((benefit: string, index: number) => (
                                <div key={index} className="flex items-start">
                                    <CheckIcon />
                                    <p className="text-[#212b36] font-medium">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    <motion.button
                        className="bg-[#f2bd00] hover:bg-[#dead00] text-[#212b36] font-medium py-3 px-8 rounded-full mt-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('cta')}
                    </motion.button>

                        {/* <div className="flex gap-4 mt-8">
                            <a href="#" className="block">
                                <Image
                                    src="/benefit/button-ios.svg"
                                    alt="Download on App Store"
                                    width={170}
                                    height={50}
                                    className="h-12 w-auto"
                                />
                            </a>
                            <a href="#" className="block">
                                <Image
                                    src="/benefit/button-ios.svg"
                                    alt="Get it on Google Play"
                                    width={170}
                                    height={50}
                                    className="h-12 w-auto"
                                />
                            </a>
                        </div> */}
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        <div className="relative z-10">
                            <Image
                                src="/benefit/banner-side.svg"
                                alt="NexPos Seller App Interface"
                                width={400}
                                height={600}
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}