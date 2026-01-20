"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-start gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                        Available for hire
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Building software with <br className="hidden md:inline" />
                        <span className="text-primary">purpose and precision.</span>
                    </h1>
                    <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                        I&apos;m a computer engineering student passionate about scalable web applications,
                        embedded systems, and clean architecture. I turn complex problems into elegant solutions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4"
                >
                    <Button asChild size="lg">
                        <Link href="/projects">
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/about">
                            About Me
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
