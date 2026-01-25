
import { RESUME_DATA } from "@/data/resume";
import { Mail, Calendar } from "lucide-react";

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
                    I'm currently open to collaborative projects and opportunities in software development.
                    Feel free to reach out!
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
                        <h3 className="font-semibold text-foreground">Email Me</h3>
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
                            <p className="text-muted-foreground">Check out my {social.name}</p>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-secondary/30 border border-secondary">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Availability
                </h3>
                <p className="text-sm text-muted-foreground">
                    Currently studying at {RESUME_DATA.education[0].school}.
                    Most responsive via email.
                </p>
            </div>
        </div>
    );
}
