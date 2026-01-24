"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation"; // <--- MUST import from here
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTransition } from "react";

export function LanguageSwitcher() {
    const t = useTranslations('Navbar'); // Optional: if you want to translate "Language" label
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleValueChange = (newLocale: string) => {
        startTransition(() => {
            // This correctly swaps /en/about to /ar/about
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <Select value={locale} onValueChange={handleValueChange} disabled={isPending}>
            <SelectTrigger className="w-[100px] h-8 text-xs">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="tr">Türkçe</SelectItem>
                <SelectItem value="it">Italiano</SelectItem>
            </SelectContent>
        </Select>
    );
}
