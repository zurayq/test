import { ProjectForm } from "@/components/admin/project-form";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function EditProjectPage({ params }: Props) {
    const { id } = await params;
    const project = getProject(id);

    if (!project) {
        notFound();
    }

    return (
        <div className="container py-10 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Edit Project</h1>
                <p className="text-muted-foreground">Update project details.</p>
            </div>
            <ProjectForm initialData={project} isEditing />
        </div>
    );
}
