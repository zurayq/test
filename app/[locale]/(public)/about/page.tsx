
import { RESUME_DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="max-w-3xl py-12 md:py-24 mx-auto space-y-20">
            {/* Header / Summary */}
            <section className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    About Me
                </h1>
                <div className="prose prose-lg prose-gray">
                    <p className="leading-relaxed text-muted-foreground">
                        {RESUME_DATA.about}
                    </p>
                </div>
            </section>

            {/* Experience */}
            <section className="space-y-8">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Experience</h2>
                <div className="space-y-10">
                    {RESUME_DATA.work.map((work) => (
                        <div key={work.company} className="flex flex-col gap-2">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                <h3 className="text-lg font-semibold text-foreground">{work.company}</h3>
                                <span className="text-sm text-muted-foreground whitespace-nowrap">{work.start} – {work.end}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-medium text-foreground">{work.title}</span>
                                    {work.badges.map((badge) => (
                                        <Badge variant="secondary" key={badge} className="text-xs">{badge}</Badge>
                                    ))}
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="space-y-8">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Education</h2>
                <div className="space-y-6">
                    {RESUME_DATA.education.map((edu) => (
                        <div key={edu.school} className="flex flex-col gap-1">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-semibold text-foreground">{edu.school}</h3>
                                <span className="text-sm text-muted-foreground">{edu.start} – {edu.end}</span>
                            </div>
                            <p className="text-muted-foreground">{edu.degree}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="space-y-8">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Technical Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm py-1">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </section>

            {/* Languages */}
            <section className="space-y-8">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Languages</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {RESUME_DATA.languages.map((lang) => (
                        <div key={lang.name} className="flex flex-col p-3 rounded-lg border bg-card text-card-foreground">
                            <span className="font-semibold">{lang.name}</span>
                            <span className="text-sm text-muted-foreground">{lang.level}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className="pt-8">
                <p className="text-lg font-medium mb-4">Interested in working together?</p>
                <div className="flex gap-4">
                    <Button asChild size="lg">
                        <Link href="/contact">
                            Get in Touch
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a href={RESUME_DATA.contact.social[0].url} target="_blank" rel="noopener noreferrer">
                            GitHub Profile <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
