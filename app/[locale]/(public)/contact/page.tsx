"use client";

import { RESUME_DATA } from "@/data/resume";
import { Mail, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations('Contact');

    return (
        <div className="max-w-2xl mx-auto py-12 md:py-24">
            <div className="space-y-6 mb-12">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">{t('title')}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid gap-6">
                <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-sm transition-all"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">{t('emailMe')}</h3>
                        <p className="text-muted-foreground">{RESUME_DATA.contact.email}</p>
                    </div>
                </a>

                {RESUME_DATA.contact.social.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm transition-all"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                            <social.icon className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">{social.name}</h3>
                            <p className="text-muted-foreground">{t('checkOut', { name: social.name })}</p>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-secondary/30 border border-secondary">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {t('availability')}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {t('availabilityText')}
                </p>
            </div>
        </div>
    );
}
