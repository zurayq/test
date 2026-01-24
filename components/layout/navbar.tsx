
"use client";

import { Link, usePathname } from "@/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar() {
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: t('home'), href: "/" },
        { name: t('projects'), href: "/projects" },
        { name: t('about'), href: "/about" },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between mx-auto px-4 md:px-8">
                <Link href="/" className=" me-6 flex items-center space-x-2">
                    <span className="font-bold text-lg tracking-tight">ABDU.DEV</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/contact" className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/contact" ? "text-foreground" : "text-foreground/60"
                    )}>{t('contact')}</Link>
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/admin">{t('admin')}</Link>
                    </Button>
                    <LanguageSwitcher />
                </div>

                {/* Mobile Nav Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <LanguageSwitcher />
                    <Button
                        variant="ghost"
                        className="h-8 w-8 px-0 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b bg-background"
                    >
                        <div className="container px-4 py-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-2 py-1 text-lg font-medium transition-colors hover:text-foreground/80",
                                        pathname === item.href ? "text-foreground" : "text-foreground/60"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-2 py-1 text-lg font-medium text-foreground/60 hover:text-foreground/80"
                            >
                                {t('contact')}
                            </Link>
                            <Link
                                href="/admin"
                                onClick={() => setIsOpen(false)}
                                className="block px-2 py-1 text-lg font-medium text-foreground/60 hover:text-foreground/80"
                            >
                                {t('admin')}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
