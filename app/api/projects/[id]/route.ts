
import { NextResponse } from "next/server";
import { updateProject, deleteProject, getProject } from "@/lib/projects";
import { cookies } from "next/headers";

type Props = {
    params: Promise<{ id: string }>
}

export async function PUT(req: Request, { params }: Props) {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();

    const updated = updateProject(id, body);
    if (!updated) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: Props) {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const success = deleteProject(id);
    if (!success) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
}

export async function GET(_req: Request, { params }: Props) {
    const { id } = await params;
    const project = getProject(id);

    if (!project) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project);
}
