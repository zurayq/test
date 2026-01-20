
import { getProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Plus } from "lucide-react";
import { ProjectList } from "./project-list";

export default function AdminDashboard() {
    const projects = getProjects();

    return (
        <div className="container py-10 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">Manage your portfolio projects.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/new">
                        <Plus className="mr-2 h-4 w-4" /> Add Project
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Projects</CardTitle>
                    <CardDescription>
                        You have {projects.length} project{projects.length === 1 ? "" : "s"}.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ProjectList projects={projects} />
                </CardContent>
            </Card>

            <div className="flex justify-start">
                <Button variant="outline" asChild>
                    <Link href="/">Back to Website</Link>
                </Button>
            </div>
        </div>
    );
}
