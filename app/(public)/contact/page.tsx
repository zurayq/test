import { Mail, Github, Linkedin, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Contact | Portfolio",
    description: "Get in touch for collaborations or opportunities.",
};

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto py-12 md:py-24">
            <div className="space-y-6 mb-12">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Get in Touch</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    I'm currently open to internships and collaborative projects.
                    If you're building something interesting, I'd love to hear about it.
                </p>
            </div>

            <div className="grid gap-6">
                <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-blue-500"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Email Me</h3>
                        <p className="text-muted-foreground">hello@example.com</p>
                    </div>
                </a>

                <a
                    href="https://github.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-gray-600"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                        <Github className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">GitHub</h3>
                        <p className="text-muted-foreground">Check out my code</p>
                    </div>
                </a>

                <a
                    href="https://linkedin.com/in/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-700 hover:shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-blue-700"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-500">
                        <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">LinkedIn</h3>
                        <p className="text-muted-foreground">Connect professionally</p>
                    </div>
                </a>
            </div>

            <div className="mt-12 p-6 rounded-xl bg-secondary/30 dark:bg-secondary/10 border border-secondary">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Availability
                </h3>
                <p className="text-sm text-muted-foreground">
                    Currently balancing university coursework with personal projects.
                    Most responsive via email during weekdays.
                </p>
            </div>
        </div>
    );
}
