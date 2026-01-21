import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="max-w-3xl py-12 md:py-24 mx-auto space-y-16">
            <section className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Engineer first, developer second.
                </h1>
                <div className="prose prose-lg prose-gray dark:prose-invert">
                    <p className="leading-relaxed text-muted-foreground">
                        I am a computer engineering student driven by curiosity and the need to understand how things work under the hood.
                        My focus isn't just on writing code that runs, but on building systems that last—prioritizing performance, scalability, and clean architecture.
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                        I treat every project as an engineering problem. Whether it's designing a database schema, optimizing a frontend for interactivity,
                        or writing low-level firmware, I approach it with the same level of precision and intent.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Core Competencies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h3 className="font-medium text-foreground">Web Technologies</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Proficient in modern web stacks including TypeScript, React/Next.js for the frontend, and Node.js for backend services.
                            Experienced with styling engines like Tailwind CSS and animation libraries like Framer Motion to create polished user experiences.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-medium text-foreground">Systems & Languages</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Strong foundation in C++ and C# for systems programming. Comfortable working with Linux environments and version control (Git).
                            Understanding of data structures, algorithms, and database design.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Learning Process</h2>
                <p className="text-muted-foreground leading-relaxed">
                    I learn by doing. I believe the best way to master a concept is to build something with it.
                    My portfolio reflects this philosophy—each project is a milestone in my understanding of a new technology or domain.
                </p>
            </section>

            <div className="pt-8">
                <p className="text-lg font-medium mb-4">Interested in working together?</p>
                <div className="flex gap-4">
                    <Button asChild size="lg">
                        <Link href="/contact">
                            Get in Touch
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                            GitHub Profile <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
