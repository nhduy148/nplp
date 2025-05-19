import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { WhoIsNexPOSForSection } from '@/components/WhoisNexPOSForSection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { CTASection } from '@/components/CTASection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { Footer } from '@/components/Footer';
import TrustedBySection from '@/components/TrustedBySection';
import FeaturesSection from '@/components/FeaturesSection';
import { HeroBanner } from '@/components/HeroBanner';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AnimatedSection } from '@/components/AnimatedSection';
import FAQSection from '@/components/FAQSection';

export default async function Home({ params }: { params: { locale: string } }) {
    const locale = await Promise.resolve(params.locale);
    setRequestLocale(locale);

    return (
        <div className="min-h-screen bg-[#f9f9fb] overflow-x-hidden">
            {/* Header Section */}
            <div className="sticky top-0 z-50">
                <Header />
            </div>

            {/* Hero Banner Section with Parallax */}
            <HeroBanner />

            {/* Content sections with increased vertical spacing for better parallax effect */}
            <div>
                {/* Trusted By Section */}
                <AnimatedSection delay={0.1}>
                    <TrustedBySection />
                </AnimatedSection>

                {/* Features Section */}
                <AnimatedSection delay={0.1}>
                    <div className="mt-24">
                        <FeaturesSection />
                    </div>
                </AnimatedSection>

                {/* System Interface Section */}
                <AnimatedSection delay={0.1}>
                    <div className="mt-24">
                        <WhoIsNexPOSForSection />
                    </div>
                </AnimatedSection>

                {/* Seller App Benefits Section */}
                <AnimatedSection delay={0.1}>
                    <div className="mt-24">
                        <SolutionsSection />
                    </div>
                </AnimatedSection>

                {/* Testimonials Section */}
                <AnimatedSection delay={0.1}>
                    <div className="mt-24">
                        <TestimonialsSection />
                    </div>
                </AnimatedSection>

                {/* Benefits Section */}
                <AnimatedSection delay={0.1}>
                    <div className="mt-24">
                        <BenefitsSection />
                    </div>
                </AnimatedSection>

                {/* FAQ Section */}
                <AnimatedSection delay={0.1}>
                    <div className="mt-24">
                        <FAQSection />
                    </div>
                </AnimatedSection>

                {/* CTA Section */}
                <AnimatedSection delay={0.1}>
                    <div className="mt-24">
                        <CTASection />
                    </div>
                </AnimatedSection>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
