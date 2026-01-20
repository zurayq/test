import { ProjectForm } from "@/components/admin/project-form";

export default function NewProjectPage() {
    return (
        <div className="container py-10 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Add New Project</h1>
                <p className="text-muted-foreground">Add a new project to your portfolio.</p>
            </div>
            <ProjectForm />
        </div>
    );
}
