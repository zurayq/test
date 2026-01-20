
import { Card, CardFooter, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

interface ProjectGridProps {
    projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <Card key={project.id} className="flex flex-col h-full hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2 mt-2">
                            {project.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                        {project.link && (
                            <Button variant="outline" size="sm" asChild className="w-full">
                                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Globe className="mr-2 h-4 w-4" /> Demo
                                </Link>
                            </Button>
                        )}
                        {project.github && (
                            <Button variant="outline" size="sm" asChild className="w-full">
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> Code
                                </Link>
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
