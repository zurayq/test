import { getProjects } from "@/lib/projects";
import { ProjectList } from "@/components/public/ProjectList";

export const metadata = {
    title: "Projects | Portfolio",
    description: "A showcase of my technical projects and experiments.",
};

export default function ProjectsPage() {
    const projects = getProjects().filter(p => p.isVisible !== false); // Default to visible if undefined, or explicit true

    return (
        <div className="py-12 md:py-24">
            <div className="mb-12 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">Selected Work</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    A collection of projects exploring web systems, hardware, and design.
                </p>
            </div>

            <ProjectList initialProjects={projects} />
        </div>
    );
}
