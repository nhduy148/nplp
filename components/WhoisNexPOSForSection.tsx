'use client';

import { cn } from "@/lib/utils";
import Image from "next/image"
import { useState } from "react"
import { useTranslations } from 'next-intl';

export function WhoIsNexPOSForSection() {
    const t = useTranslations('WhoIsNexPOSFor');
    const [selectedSection, setSelectedSection] = useState(1)

    const images = [
        "/feature/feature-1.png",
        "/feature/feature-2.png",
        "/feature/feature-3.png",
        "/feature/feature-4.png",
    ]

    return (
        <div className="bg-[#f3f5f6] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <div className="bg-[#f5c349]/20 text-[#212b36] px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        {t('interface_badge')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#212b36] mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-[#637381] text-lg max-w-4xl">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        {/* Regular cards */}
                        {[0, 1, 2, 3].map((index) => (
                            <div key={index} className={cn("bg-white cursor-pointer p-4 rounded-xl flex", index === selectedSection && "border-l-4 border-[#f2bd00]")} onClick={() => setSelectedSection(index)}>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#212b36] mb-2">{t(`types.${index}.title`)}</h3>
                                    <p className="text-[#637381]">{t(`types.${index}.description`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - could be an image or additional content */}
                    <div className="bg-white rounded-xl p-6 flex items-center justify-center">
                        {images[selectedSection] && (
                            <Image
                                src={images[selectedSection]}
                                alt="System interface preview"
                                width={500}
                                height={400}
                                className="max-w-full rounded-lg"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 