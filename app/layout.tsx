import { routing } from '@/navigation';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    setRequestLocale(locale);
    return children;
}
