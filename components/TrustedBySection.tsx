"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useTranslations } from 'next-intl';

export default function TrustedBySection() {
    const t = useTranslations('TrustedBy');
    const autoplay = useRef(Autoplay({ delay: 1000, stopOnInteraction: false }))

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
        },
        [autoplay.current],
    )

    const logos = [
        { name: "Patreon", src: "/trust/trust-1.svg" },
        { name: "Airbnb", src: "/trust/trust-2.svg" },
        { name: "Fiberplane", src: "/trust/trust-3.svg" },
        { name: "Coinbase", src: "/trust/trust-4.svg" },
        { name: "Griffin", src: "/trust/trust-5.svg" }
    ]

    return (
        <section className="w-full py-16 px-4 flex flex-col gap-4 items-center justify-center bg-white">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800">
                {t('title')}
            </h2>

            <div className="w-full max-w-7xl mx-auto">
                <Carousel
                    ref={emblaRef}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[autoplay.current]}
                >
                    <CarouselContent className="-ml-4">
                        {logos.map((logo, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                                <div className="flex items-center justify-center h-20 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <Image
                                        src={logo.src || "/placeholder.svg"}
                                        alt={logo.name}
                                        width={120}
                                        height={40}
                                        className="h-8 md:h-10 w-auto"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <Button className="bg-amber-400 hover:bg-amber-500 text-gray-800 rounded-full px-6 py-2 flex items-center gap-2">
                {t('our_customers')}
                <ArrowRight className="h-4 w-4" />
            </Button>
        </section>
    )
}
