"use client";

import { Navbar } from "@/components/layout/navbar";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const BackgroundCanvas = dynamic(
    () => import("@/components/ui/BackgroundCanvas").then((mod) => mod.BackgroundCanvas),
    { ssr: false }
);

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    const t = useTranslations('Footer');

    return (
        <div className="relative flex min-h-screen flex-col">
            <BackgroundCanvas />
            <Navbar />
            <main className="flex-1 pt-14 container mx-auto px-4 md:px-8">
                {children}
            </main>
            <footer className="border-t py-6 md:px-8 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        {t('builtBy', { name: 'Abdul' })}{' '}
                        {t('sourceCode', { github: '' })}{' '}
                        <a href="https://github.com/zurayq" className="font-medium underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                            {t('github')}
                        </a>.
                    </p>
                </div>
            </footer>
        </div>
    );
}
