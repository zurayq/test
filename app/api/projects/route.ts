
import { NextResponse } from "next/server";
import { getProjects, createProject } from "@/lib/projects";
import { cookies } from "next/headers";

export async function GET() {
    const projects = getProjects();
    return NextResponse.json(projects);
}

export async function POST(req: Request) {
    // Check auth
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        // Basic validation
        if (!body.title || !body.description) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const newProject = createProject({
            title: body.title,
            description: body.description,
            content: body.content || "",
            techStack: body.techStack || [],
            link: body.link || "",
            github: body.github || "",
            images: body.images || [],
            type: body.type || 'personal',
            status: body.status || 'in-progress',
            isVisible: body.isVisible ?? false,
            featured: body.featured ?? false,
            order: body.order ?? 0,
        });

        return NextResponse.json(newProject);
    } catch {
        return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
    }
}
