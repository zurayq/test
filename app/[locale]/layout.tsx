import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/navigation';

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const robotoMono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Abdulwahid Zurayq | Portfolio",
    description: "Computer Engineering Student & Developer",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!routing.locales.includes(locale as any)) notFound();
    setRequestLocale(locale);

    const messages = await getMessages();
    const isRtl = locale === 'ar';

    return (
        <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
            <body className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen bg-background text-foreground`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
