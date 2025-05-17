'use client';

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function AnimatedSection({
    children,
    delay = 0,
    className = ""
}: AnimatedSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
} 