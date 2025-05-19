'use client';

import { ArrowDown, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { POSPreview } from "./POSPreview";
import { useTranslations } from 'next-intl';
import Link from "next/link";

export function HeroBanner() {
    const t = useTranslations('HeroBanner');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const scrollToFeatures = (e: React.MouseEvent) => {
        e.preventDefault();
        const featuresSection = document.getElementById('solutions');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Enhanced transform values for more pronounced parallax layers
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]); // Slow
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]); // Medium
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 350]); // Fast
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Reverse direction
    const y5 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Faster reverse

    // Scale transforms for added depth
    const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    // Rotation for some elements
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

    // Content opacity fade
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.2]);

    return (
        <div ref={ref} className="max-w-7xl mx-auto px-4 text-center relative h-screen overflow-hidden">
            {/* Enhanced Layered Parallax Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Far background layer */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ opacity: backgroundOpacity }}
                >
                    <motion.div
                        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-100 opacity-30 blur-3xl"
                        style={{ y: y1, scale: scale1 }}
                    />
                    <motion.div
                        className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-blue-100 opacity-20 blur-3xl"
                        style={{ y: y2, scale: scale2 }}
                    />
                </motion.div>

                {/* Middle layer elements */}
                <motion.div
                    className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-200 opacity-40 blur-lg"
                    style={{ y: y1, rotate: rotate1 }}
                />
                <motion.div
                    className="absolute top-40 right-20 w-48 h-48 rounded-full bg-blue-200 opacity-30 blur-lg"
                    style={{ y: y2, scale: scale1 }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full bg-purple-200 opacity-40 blur-lg"
                    style={{ y: y3, rotate: rotate2 }}
                />
                <motion.div
                    className="absolute bottom-40 right-1/4 w-24 h-24 rounded-full bg-green-200 opacity-50 blur-lg"
                    style={{ y: y4 }}
                />

            </div>

            {/* Content with parallax effect */}
            <motion.div className="relative z-10 pt-16" style={{ opacity }}>
                <motion.h1
                    className="text-[#27272a] text-2xl md:text-5xl font-bold leading-tight my-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
                >
                    {t('title')}
                </motion.h1>
                <motion.p
                    className="text-[#637381] text-base md:text-xl mb-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
                >
                    {t('description')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
                >
                    <Link href="https://portal.nexpos.io/register">
                    <motion.button
                        className="bg-[#f2bd00] hover:bg-[#dead00] text-[#212b36] py-3 px-8 rounded-full font-bold w-full md:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('cta')}
                    </motion.button>
                    </Link>                 
                    <motion.button
                        className="bg-[#e6e8ed] hover:bg-[#dfe3e8] text-[#212b36] font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToFeatures}
                    >
                        {t('download')} <ArrowDown className="h-4 w-4" />
                    </motion.button>
                </motion.div>

                {/* Platform Support */}
                <motion.p
                    className="text-[#637381] text-sm mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -20]) }}
                >
                    {t('platform_support')}
                </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            >
                <span className="text-sm text-gray-500 mb-2">Scroll down</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
            </motion.div>

            {/* POS Preview with full height */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                className="relative z-5 h-auto mt-10 flex-1 flex justify-center"
            >
                <div className="w-full max-w-6xl">
                    <POSPreview />
                </div>
            </motion.div>
        </div>
    )
}