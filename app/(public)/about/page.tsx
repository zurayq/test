import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="max-w-[800px] py-12 md:py-24 mx-auto space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">About Me</h1>
                <p className="text-xl text-muted-foreground">
                    Computer Engineering Student & Builder
                </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
                <p>
                    I am a student passionate about building real-world solutions.
                    My journey sits at the intersection of software engineering, system architecture, and
                    good design.
                </p>
                <p>
                    I don&apos;t just write code; I design systems that are scalable, maintainable, and
                    efficient. I believe in &quot;planning ahead&quot; and &quot;building properly&quot; — avoiding technical
                    debt before it even starts.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Technical Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-card border">
                        <h3 className="font-semibold mb-2">Languages</h3>
                        <p className="text-sm text-muted-foreground">C#, JavaScript/TypeScript, Python, C++</p>
                    </div>
                    <div className="p-4 rounded-lg bg-card border">
                        <h3 className="font-semibold mb-2">Frontend</h3>
                        <p className="text-sm text-muted-foreground">React, Next.js, Tailwind CSS</p>
                    </div>
                    <div className="p-4 rounded-lg bg-card border">
                        <h3 className="font-semibold mb-2">Backend & Tools</h3>
                        <p className="text-sm text-muted-foreground">Node.js, Git, Linux</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <Button asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="mailto:hello@example.com">
                        Contact Me
                    </a>
                </Button>
            </div>
        </div>
    );
}
