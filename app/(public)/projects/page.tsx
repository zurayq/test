import { ProjectGrid } from "@/components/sections/project-grid";
import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div className="space-y-8 py-12 md:py-24">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Projects</h1>
                <p className="text-xl text-muted-foreground">
                    A collection of my work, ranging from web applications to embedded systems.
                </p>
            </div>
            <ProjectGrid projects={projects} />
        </div>
    );
}
