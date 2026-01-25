import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const { locale } = params;

    return {
        title: {
            default: "Computer Engineering Student & Builder",
            template: "%s | Portfolio"
        },
        description: "Computer Engineering student building scalable web systems, clean architecture, and practical engineering solutions.",
        keywords: ["Computer Engineering", "Software Development", "Web Development", "Portfolio", "Projects"],
        authors: [{ name: "Your Name" }], // Update with your name
        creator: "Your Name", // Update with your name
        openGraph: {
            type: "website",
            locale: locale,
            url: "https://your-domain.com", // Update with your domain
            siteName: "Portfolio",
            title: "Computer Engineering Student & Builder",
            description: "Computer Engineering student building scalable web systems, clean architecture, and practical engineering solutions.",
            images: [
                {
                    url: "/og-image.jpg", // Add your OG image
                    width: 1200,
                    height: 630,
                    alt: "Portfolio",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Computer Engineering Student & Builder",
            description: "Computer Engineering student building scalable web systems, clean architecture, and practical engineering solutions.",
            images: ["/og-image.jpg"], // Add your Twitter image
        },
        robots: {
            index: true,
            follow: true,
        },
        icons: {
            icon: "/favicon.ico",
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    // Ensure that the incoming `locale` is valid
    if (!['en', 'ar', 'tr', 'it'].includes(locale)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    const isRtl = locale === 'ar';

    return (
        <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
            <body
                className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen bg-background text-foreground`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
