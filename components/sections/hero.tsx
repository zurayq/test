"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-start gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        Computer Engineering <br className="hidden md:inline" />
                        <span className="text-muted-foreground">Student & Builder.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-[600px] space-y-4"
                >
                    <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
                        I build software that works. Focusing on scalable web systems, clean architecture, and practical engineering solutions.
                        Currently refining this portfolio and exploring distributed systems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4 pt-4"
                >
                    <Button asChild size="lg" className="rounded-full">
                        <Link href="/projects">
                            View Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="ghost" size="lg" asChild className="rounded-full">
                        <Link href="/contact">
                            Contact Me
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
