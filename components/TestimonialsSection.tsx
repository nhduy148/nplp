"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useTranslations } from 'next-intl';

// Sample testimonial data - you can replace with your actual data
const testimonials = [
    {
        id: 1,
        name: "Nguyễn Hữu Đại",
        title: "Nguyễn Hữu Đại",
        content: "The interactive features are top-notch. It helped us boost engagement on our landing page instantly.",
        avatar: "/placeholder.svg?height=60&width=60",
    },
    {
        id: 2,
        name: "Trần Minh Tuấn",
        title: "Trần Minh Tuấn",
        content:
            "NexPOS has transformed how we manage our inventory. The system is intuitive and saves us hours every week.",
        avatar: "/placeholder.svg?height=60&width=60",
    },
    {
        id: 3,
        name: "Lê Thị Hương",
        title: "Lê Thị Hương",
        content: "The customer support team is exceptional. They helped us set up our entire system in just two days.",
        avatar: "/placeholder.svg?height=60&width=60",
    },
    {
        id: 4,
        name: "Phạm Văn Nam",
        title: "Phạm Văn Nam",
        content: "We've tried many POS systems, but NexPOS offers the best value for money with all the features we need.",
        avatar: "/placeholder.svg?height=60&width=60",
    },
    {
        id: 5,
        name: "Hoàng Thị Mai",
        title: "Hoàng Thị Mai",
        content: "The reporting features give us valuable insights into our business performance. Highly recommended!",
        avatar: "/placeholder.svg?height=60&width=60",
    },
    {
        id: 6,
        name: "Vũ Đức Anh",
        title: "Vũ Đức Anh",
        content: "NexPOS has been crucial for managing our multi-location business. The cloud sync works flawlessly.",
        avatar: "/placeholder.svg?height=60&width=60",
    },
    {
        id: 7,
        name: "Ngô Thị Lan",
        title: "Ngô Thị Lan",
        content: "The integration with our e-commerce platform was seamless. Our inventory is now always in sync.",
        avatar: "/placeholder.svg?height=60&width=60",
    },
    {
        id: 8,
        name: "Đặng Minh Quân",
        title: "Đặng Minh Quân",
        content: "We've reduced checkout times by 40% since implementing NexPOS. Our customers love the quick service.",
        avatar: "/placeholder.svg?height=60&width=60",
    },
    {
        id: 9,
        name: "Bùi Thanh Hà",
        title: "Bùi Thanh Hà",
        content: "The loyalty program feature has helped us increase repeat business by 25%. It's been a game-changer.",
        avatar: "/placeholder.svg?height=60&width=60",
    },
]

// Create three different arrays with different starting positions for each column
const column1Testimonials = [...testimonials, ...testimonials.slice(0, 3)]
const column2Testimonials = [...testimonials.slice(3, testimonials.length), ...testimonials.slice(0, 6)]
const column3Testimonials = [...testimonials.slice(6, testimonials.length), ...testimonials]

export function TestimonialsSection() {
    const t = useTranslations('Testimonials');
    const column1Ref = useRef<HTMLDivElement>(null)
    const column2Ref = useRef<HTMLDivElement>(null)
    const column3Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Different speeds for each column to create a more dynamic effect
        const scrollColumn = (columnRef: React.RefObject<HTMLDivElement | null>, speed: number, direction: 'up' | 'down') => {
            if (!columnRef.current) return

            let scrollPos = direction === 'down' ? 0 : columnRef.current.scrollHeight / 2
            const maxScroll = columnRef.current.scrollHeight / 2

            // If scrolling up, start at the bottom
            if (direction === 'up') {
                columnRef.current.scrollTop = maxScroll
            }

            const scroll = () => {
                if (!columnRef.current) return

                if (direction === 'down') {
                    scrollPos += speed
                    // Reset when we've scrolled through the first set of testimonials
                    if (scrollPos >= maxScroll) {
                        scrollPos = 0
                        columnRef.current.scrollTop = 0
                    } else {
                        columnRef.current.scrollTop = scrollPos
                    }
                } else {
                    // For scrolling up
                    scrollPos -= speed
                    // Reset when we've scrolled to the top
                    if (scrollPos <= 0) {
                        scrollPos = maxScroll
                        columnRef.current.scrollTop = maxScroll
                    } else {
                        columnRef.current.scrollTop = scrollPos
                    }
                }

                requestAnimationFrame(scroll)
            }

            requestAnimationFrame(scroll)
        }

        // Start scrolling each column at different speeds and directions
        scrollColumn(column1Ref, 0.5, 'down') // Column 1: top to bottom
        scrollColumn(column2Ref, 0.7, 'up')   // Column 2: bottom to top
        scrollColumn(column3Ref, 0.4, 'down') // Column 3: top to bottom

        // Cleanup function
        return () => {
            // No cleanup needed for requestAnimationFrame as we'll unmount the component
        }
    }, [])

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#f5c349]/20 text-[#f5c349] text-sm font-medium mb-4">
                        {t('testimonials_badge')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#212b36] mb-4">
                        {t('title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
                    {/* Column 1 - Scrolls top to bottom */}
                    <div ref={column1Ref} className="flex flex-col space-y-6 overflow-hidden h-[600px]">
                        {column1Testimonials.map((testimonial, index) => (
                            <div key={`col1-${testimonial.id}-${index}`} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#212b36]">{testimonial.name}</h4>
                                        <p className="text-sm text-[#637381]">{testimonial.title}</p>
                                    </div>
                                </div>
                                <p className="text-[#637381]">{testimonial.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Column 2 - Scrolls bottom to top */}
                    <div ref={column2Ref} className="flex flex-col space-y-6 overflow-hidden h-[600px]">
                        {column2Testimonials.map((testimonial, index) => (
                            <div key={`col2-${testimonial.id}-${index}`} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#212b36]">{testimonial.name}</h4>
                                        <p className="text-sm text-[#637381]">{testimonial.title}</p>
                                    </div>
                                </div>
                                <p className="text-[#637381]">{testimonial.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Column 3 - Scrolls top to bottom */}
                    <div ref={column3Ref} className="flex flex-col space-y-6 overflow-hidden h-[600px]">
                        {column3Testimonials.map((testimonial, index) => (
                            <div key={`col3-${testimonial.id}-${index}`} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#212b36]">{testimonial.name}</h4>
                                        <p className="text-sm text-[#637381]">{testimonial.title}</p>
                                    </div>
                                </div>
                                <p className="text-[#637381]">{testimonial.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}