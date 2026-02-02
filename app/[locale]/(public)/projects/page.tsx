import { getProjects } from "@/lib/projects";
import { ProjectsClientWrapper } from "@/components/public/ProjectsClientWrapper";

export default function ProjectsPage() {
    const projects = getProjects().filter(p => p.isVisible !== false);

    return <ProjectsClientWrapper projects={projects} />;
}
