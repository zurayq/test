
import ProjectForm from "@/components/admin/ProjectForm";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ id: string }>
}

export default async function EditProjectPage({ params }: Props) {
    const { id } = await params;
    const project = getProject(id);

    if (!project) {
        notFound();
    }

    return <ProjectForm initialData={project} isEditing />;
}
