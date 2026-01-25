import { getProjects, getProject } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    const projects = getProjects();
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetailPage({ params }: Props) {
    const { id } = await params;
    const project = getProject(id);

    if (!project || project.isVisible === false) {
        notFound();
    }

    return (
        <div className="py-12 md:py-24 max-w-4xl mx-auto">
            <Link
                href="/projects"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>

            <header className="mb-12">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                                {project.title}
                            </h1>
                            {project.status === 'in-progress' && (
                                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                                    In Progress
                                </span>
                            )}
                        </div>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {project.link && (
                            <Button asChild size="sm">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Globe className="mr-2 h-4 w-4" />
                                    Live Demo
                                </a>
                            </Button>
                        )}
                        {project.github && (
                            <Button variant="outline" size="sm" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Source Code
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-sm font-medium text-secondary-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose prose-gray max-w-none">
                {/* Content Rendering */}
                {/* Simple mapping for now since we don't have a markdown renderer installed */}
                {project.content ? (
                    <div className="whitespace-pre-wrap font-sans text-lg leading-relaxed">
                        {project.content}
                    </div>
                ) : (
                    <p className="text-muted-foreground italic">No detailed content available for this project.</p>
                )}
            </div>

            <div className="mt-16 border-t pt-8">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                        Last updated: {new Date(project.updatedAt).toLocaleDateString()}
                    </span>
                    <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        {project.type} Project
                    </span>
                </div>
            </div>
        </div>
    );
}
