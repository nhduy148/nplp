'use client';

import Image from "next/image"
import { useTranslations } from 'next-intl';

export function SolutionsSection() {
    const t = useTranslations('SolutionsSection');

    return (
        <div id="solutions" className="bg-[#f2bd00] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-10">
                    <div className="bg-[#fff] text-black px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        {t('feature_badge')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#212b36] mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-[#212b36] text-2xl max-w-4xl">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Feature Card 1 */}
                    <div className="bg-[#212b36] flex flex-col justify-between h-[520px] rounded-xl overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">{t('smart_order_management')}</h3>
                            <p className="text-gray-300 text-base mb-6">{t('smart_order_management_description')}</p>
                        </div>
                        <Image
                            src="/benefit/benefit-1.png"
                            alt="Product management interface"
                            width={320}
                            height={200}
                            className="w-full"
                            objectFit="contain"
                        />
                    </div>

                    {/* Feature Card 2 */}
                    <div className="bg-[#212b36] flex flex-col justify-between h-[520px] rounded-xl overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">{t('optimize_for_operations')}</h3>
                            <p className="text-gray-300 mb-6">{t('optimize_for_operations_description')}</p>
                        </div>
                        <Image
                            src="/benefit/benefit-2.png"
                            alt="Inventory tracking interface"
                            width={320}
                            height={200}
                            className="w-full"
                            objectFit="contain"
                        />
                    </div>

                    {/* Feature Card 3 */}
                    <div className="bg-[#212b36] flex flex-col justify-between h-[520px] rounded-xl overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">{t('flexible_menu_management')}</h3>
                            <p className="text-gray-300 mb-6">{t('flexible_menu_management_description')}</p>
                        </div>
                        <Image
                            src="/benefit/benefit-3.png"
                            alt="Sales report interface"
                            width={320}
                            height={200}
                            className="w-full"
                            objectFit="contain"
                        />
                    </div>

                    {/* Feature Card 4 */}
                    <div className="bg-[#212b36] flex flex-col justify-between h-[520px] rounded-xl overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">{t('stock_management')}</h3>
                            <p className="text-gray-300 mb-6">{t('stock_management_description')}</p>
                        </div>
                        <Image
                            src="/benefit/benefit-4.png"
                            alt="Multi-device synchronization"
                            width={320}
                            height={200}
                            className="w-full"
                            objectFit="contain"
                        />
                    </div>

                    {/* Feature Card 5 */}
                    <div className="bg-[#212b36] flex flex-col justify-between h-[520px] rounded-xl overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">{t('centralize_reporting')}</h3>
                            <p className="text-gray-300 mb-6">{t('centralize_reporting_description')}</p>
                        </div>
                        <Image
                            src="/benefit/benefit-5.png"
                            alt="Multi-device synchronization"
                            width={320}
                            height={200}
                            className="w-full"
                            objectFit="contain"
                        />
                    </div>

                    {/* Feature Card 6 */}
                    <div className="bg-[#212b36] flex flex-col justify-between h-[520px] rounded-xl overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">{t('integrations')}</h3>
                            <p className="text-gray-300 text-base mb-6">{t('integrations_description')}</p>
                        </div>
                        <Image
                            src="/benefit/benefit-6.png"
                            alt="Multi-device synchronization"
                            width={320}
                            height={200}
                            className="w-full"
                            objectFit="contain"
                        />
                    </div>

                    {/* Feature Card 5 */}
                    <div className="rounded-xl overflow-hidden md:col-span-2 lg:col-span-3">
                        <Image src="/benefit/banner.png" alt="POS Preview" className="w-full rounded-lg h-full" width={1000} height={520} />
                    </div>
                </div>
            </div>
        </div>
    )
} 