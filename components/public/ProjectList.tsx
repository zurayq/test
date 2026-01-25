"use client";

import { useState } from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProjectList({ initialProjects }: { initialProjects: Project[] }) {
    const [filter, setFilter] = useState<'all' | 'personal' | 'school' | 'experiment'>('all');

    const filtered = initialProjects.filter(p => filter === 'all' || p.type === filter);

    return (
        <div className="space-y-12">
            {/* Filter Tabs */}
            <div className="flex justify-center">
                <div className="inline-flex rounded-full bg-gray-100 p-1">
                    {['all', 'personal', 'school', 'experiment'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type as any)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${filter === type
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {filtered.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        key={project.id}
                        className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors"
                    >
                        {/* Image Placeholder or Actual Image */}
                        <div className="aspect-video w-full bg-gray-100 flex items-center justify-center text-gray-400">
                            {/* In real app, render image here if project.images[0] exists */}
                            <div className="text-3xl font-mono opacity-20">{project.title.substring(0, 2)}</div>
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
                                    {project.type}
                                </span>
                                {project.status === 'in-progress' && (
                                    <span className="flex h-2 w-2 rounded-full bg-amber-400" title="In Progress" />
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                <Link href={`/projects/${project.id}`} className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {project.title}
                                </Link>
                            </h3>

                            <p className="mt-2 flex-1 text-sm text-gray-500 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.techStack.slice(0, 3).map((stack) => (
                                    <span key={stack} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                                        {stack}
                                    </span>
                                ))}
                                {project.techStack.length > 3 && (
                                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-500">
                                        +{project.techStack.length - 3}
                                    </span>
                                )}
                            </div>

                            <div className="mt-4 flex justify-end">
                                <ArrowUpRight className="h-5 w-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {filtered.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No projects found for this category.
                </div>
            )}
        </div>
    );
}
