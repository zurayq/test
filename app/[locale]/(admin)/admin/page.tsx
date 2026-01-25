"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, LogOut, Edit2, Trash2, Eye, EyeOff, Star, GripVertical } from "lucide-react";
import { Project } from "@/lib/projects";

export default function AdminPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/projects");
            if (res.ok) {
                const data = await res.json();
                setProjects(data);
            }
        } catch (error) {
            console.error("Failed to fetch projects", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await fetch("/api/auth", { method: "DELETE" });
        router.push("/login");
        router.refresh();
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;

        try {
            const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
            if (res.ok) {
                setProjects(projects.filter((p) => p.id !== id));
            }
        } catch (error) {
            console.error("Failed to delete project", error);
        }
    };

    const toggleFeatured = async (project: Project) => {
        // Optimistic update
        const updated = { ...project, featured: !project.featured };
        setProjects(projects.map((p) => (p.id === project.id ? updated : p)));

        try {
            await fetch(`/api/projects/${project.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ featured: updated.featured }),
            });
        } catch (error) {
            // Revert on error
            setProjects(projects.map((p) => (p.id === project.id ? project : p)));
        }
    };

    const toggleVisibility = async (project: Project) => {
        // Optimistic update
        const updated = { ...project, isVisible: !project.isVisible };
        setProjects(projects.map((p) => (p.id === project.id ? updated : p)));

        try {
            await fetch(`/api/projects/${project.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isVisible: updated.isVisible }),
            });
        } catch (error) {
            // Revert on error
            setProjects(projects.map((p) => (p.id === project.id ? project : p)));
        }
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto max-w-5xl">
                <header className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
                        <p className="text-gray-500">Manage your portfolio content</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                        >
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </button>
                        <Link
                            href="/admin/projects/new"
                            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="h-4 w-4" />
                            New Project
                        </Link>
                    </div>
                </header>

                <div className="grid gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-8 w-8 cursor-move items-center justify-center rounded text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-gray-100" title="Drag to reorder (Coming soon)">
                                    <GripVertical className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${project.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                project.status === 'in-progress' ? 'bg-amber-100 text-amber-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {project.status}
                                        </span>
                                        <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">
                                            {project.type}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500 line-clamp-1">{project.description}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                                <button
                                    onClick={() => toggleFeatured(project)}
                                    title="Toggle Featured"
                                    className={`rounded-lg p-2 transition-colors ${project.featured ? 'bg-yellow-100 text-yellow-600' : 'text-gray-400 hover:bg-gray-100'
                                        }`}
                                >
                                    <Star className={`h-4 w-4 ${project.featured ? 'fill-current' : ''}`} />
                                </button>
                                <button
                                    onClick={() => toggleVisibility(project)}
                                    title="Toggle Visibility"
                                    className={`rounded-lg p-2 transition-colors ${project.isVisible ? 'text-blue-600' : 'text-gray-400 hover:bg-gray-100'
                                        }`}
                                >
                                    {project.isVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                </button>
                                <div className="h-4 w-px bg-gray-200 mx-1"></div>
                                <Link
                                    href={`/admin/projects/${project.id}`}
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                                >
                                    <Edit2 className="h-4 w-4" />
                                </Link>
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className="rounded-lg p-2 text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}

                    {projects.length === 0 && (
                        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
                            <p className="text-gray-500">No projects found. Create your first one!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
