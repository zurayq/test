"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Project } from "@/lib/projects";
import { Loader2 } from "lucide-react";

interface ProjectFormProps {
    initialData?: Project;
    isEditing?: boolean;
}

export function ProjectForm({ initialData, isEditing = false }: ProjectFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        techStack: initialData?.techStack?.join(", ") || "",
        link: initialData?.link || "",
        github: initialData?.github || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            // Tech stack split by comma and trimmed
            techStack: formData.techStack.split(",").map((t) => t.trim()).filter(Boolean),
        };

        try {
            if (isEditing && initialData?.id) {
                await fetch(`/api/projects/${initialData.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
            } else {
                await fetch("/api/projects", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
            }
            router.push("/admin");
            router.refresh();
        } catch (error) {
            console.error("Failed to save project", error);
            alert("Failed to save project");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            <div className="space-y-2">
                <Label htmlFor="title">Project Title</Label>
                <Input
                    id="title"
                    name="title"
                    placeholder="e.g. Portfolio Website"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    name="description"
                    placeholder="Brief description of the project..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="techStack">Tech Stack (comma separated)</Label>
                <Input
                    id="techStack"
                    name="techStack"
                    placeholder="Next.js, Tailwind, TypeScript"
                    value={formData.techStack}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="link">Demo Link (Optional)</Label>
                    <Input
                        id="link"
                        name="link"
                        placeholder="https://example.com"
                        value={formData.link}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="github">GitHub Link (Optional)</Label>
                    <Input
                        id="github"
                        name="github"
                        placeholder="https://github.com/..."
                        value={formData.github}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex gap-4">
                <Button type="submit" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isEditing ? "Save Changes" : "Create Project"}
                </Button>
                <Button type="button" variant="outline" onClick={() => router.back()}>
                    Cancel
                </Button>
            </div>
        </form>
    );
}
