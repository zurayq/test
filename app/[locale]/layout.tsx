import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const robotoMono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Abdulwahid Zurayq | Portfolio",
    description: "Computer Engineering Student & Developer",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;
    if (!['en', 'ar', 'tr', 'it'].includes(locale)) notFound();

    const messages = await getMessages();
    const isRtl = locale === 'ar';

    return (
        // FIX: Removed 'className="dark"'
        <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
            <body className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen bg-background text-foreground`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
