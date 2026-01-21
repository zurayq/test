"use client";

import { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ProjectList({ projects }: { projects: Project[] }) {
    const router = useRouter();

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;

        const res = await fetch(`/api/projects/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            router.refresh();
        } else {
            alert("Failed to delete project");
        }
    };

    if (projects.length === 0) {
        return <p className="text-muted-foreground py-8 text-center">No projects found. Create one!</p>;
    }

    return (
        <div className="space-y-4">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card"
                >
                    <div>
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href={`/admin/edit/${project.id}`}>
                                <Edit className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => handleDelete(project.id)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
