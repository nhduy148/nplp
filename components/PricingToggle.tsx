"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslations } from 'next-intl';

type PeriodOption = "month" | "year"

interface PricingToggleProps {
    onChange?: (period: PeriodOption) => void
    defaultValue?: PeriodOption
    className?: string
}

export function PricingToggle({ onChange, defaultValue = "month", className }: PricingToggleProps) {
    const t = useTranslations('PricingToggle');
    const [period, setPeriod] = useState<PeriodOption>(defaultValue)

    const handleChange = (newPeriod: PeriodOption) => {
        setPeriod(newPeriod)
        onChange?.(newPeriod)
    }

    return (
        <div className={cn("inline-flex items-center rounded-full border border-gray-200 p-1 bg-white", className)}>
            <button
                onClick={() => handleChange("month")}
                className={cn(
                    "px-6 py-2 text-sm font-medium rounded-full transition-colors",
                    period === "month" ? "bg-[#f5c349] text-[#212b36]" : "bg-transparent text-[#637381] hover:bg-gray-100",
                )}
            >
                {t('month')}
            </button>
            <button
                onClick={() => handleChange("year")}
                className={cn(
                    "px-6 py-2 text-sm font-medium rounded-full transition-colors",
                    period === "year" ? "bg-[#f5c349] text-[#212b36]" : "bg-transparent text-[#637381] hover:bg-gray-100",
                )}
            >
                {t('year')}
            </button>
        </div>
    )
}
