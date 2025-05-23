'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-1">
            <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-1.5 px-2 ${locale === 'en' ? 'bg-[#f5c349]/20' : 'hover:bg-gray-100'}`}
                onClick={() => switchLocale('en')}
            >
                <ReactCountryFlag
                    countryCode="GB"
                    svg
                    style={{
                        width: '1em',
                        height: '1em',
                    }}
                    title="English"
                />
                <span className="text-sm font-medium">ENG</span>
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-1.5 px-2 ${locale === 'vi' ? 'bg-[#f5c349]/20' : 'hover:bg-gray-100'}`}
                onClick={() => switchLocale('vi')}
            >
                <ReactCountryFlag
                    countryCode="VN"
                    svg
                    style={{
                        width: '1em',
                        height: '1em',
                    }}
                    title="Vietnamese"
                />
                <span className="text-sm font-medium">VIE</span>
            </Button>
        </div>
    );
} 