import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

export function generateStaticParams() {
    return routing.locales.map((locale: string) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    // Ensure that the incoming `locale` is valid
    const locale = await Promise.resolve(params.locale);
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
} 