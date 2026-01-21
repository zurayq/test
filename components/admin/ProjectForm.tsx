"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/projects";

interface ProjectFormProps {
    initialData?: Project;
    isEditing?: boolean;
}

export default function ProjectForm({ initialData, isEditing = false }: ProjectFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Project>>(
        initialData || {
            title: "",
            description: "",
            content: "",
            techStack: [],
            link: "",
            github: "",
            type: "personal",
            status: "in-progress",
            isVisible: true,
            featured: false,
            order: 0,
            images: [],
        }
    );

    const [techInput, setTechInput] = useState(initialData?.techStack.join(", ") || "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else if (name === "order") {
            setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const projectData = {
            ...formData,
            techStack: techInput.split(",").map((t) => t.trim()).filter(Boolean),
        };

        try {
            const url = isEditing && initialData ? `/api/projects/${initialData.id}` : "/api/projects";
            const method = isEditing ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(projectData),
            });

            if (res.ok) {
                router.push("/admin");
                router.refresh();
            } else {
                alert("Failed to save project");
            }
        } catch (error) {
            console.error("Error saving project:", error);
            alert("Error saving project");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto pb-12">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin"
                        className="rounded-full p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {isEditing ? "Edit Project" : "New Project"}
                    </h1>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-sm"
                >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                    Save Project
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Main Info */}
                <div className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Core Details</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-100"
                                placeholder="e.g. Portfolio Website"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Short Description</label>
                            <input
                                type="text"
                                name="description"
                                required
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-100"
                                placeholder="Brief summary for list view"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-100 dark:bg-gray-900"
                            >
                                <option value="personal">Personal</option>
                                <option value="school">School</option>
                                <option value="experiment">Experiment</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-100 dark:bg-gray-900"
                            >
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Content & Tech */}
                <div className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Content & Tech</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Detailed Content (Markdown)
                        </label>
                        <p className="mb-2 text-xs text-gray-500">Supports standard markdown.</p>
                        <textarea
                            name="content"
                            rows={10}
                            value={formData.content}
                            onChange={handleChange}
                            className="block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 font-mono text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-100"
                            placeholder="# Project Details..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack</label>
                        <input
                            type="text"
                            value={techInput}
                            onChange={(e) => setTechInput(e.target.value)}
                            className="mt-1 block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-100"
                            placeholder="Next.js, TypeScript, Tailwind (comma separated)"
                        />
                    </div>
                </div>

                {/* Links & Meta */}
                <div className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Links</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Live URL</label>
                            <input
                                type="url"
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-100"
                                placeholder="https://..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">GitHub URL</label>
                            <input
                                type="url"
                                name="github"
                                value={formData.github}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-100"
                                placeholder="https://github.com/..."
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="isVisible"
                                name="isVisible"
                                checked={formData.isVisible}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"
                            />
                            <label htmlFor="isVisible" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Visible on Public Site
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="featured"
                                name="featured"
                                checked={formData.featured}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"
                            />
                            <label htmlFor="featured" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Featured Project
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sort Order</label>
                            <input
                                type="number"
                                name="order"
                                value={formData.order}
                                onChange={handleChange}
                                className="mt-1 block w-24 rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-100"
                            />
                            <p className="mt-1 text-xs text-gray-500">Lower numbers appear first.</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
