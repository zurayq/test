
import fs from 'fs';
import path from 'path';

export interface Project {
    id: string;
    title: string;
    description: string; // Short summary
    content?: string; // Markdown details
    techStack: string[];
    link?: string;
    github?: string;
    images?: string[]; // Array of image URLs
    type: 'school' | 'personal' | 'experiment';
    status: 'completed' | 'in-progress' | 'archived';
    isVisible: boolean;
    featured: boolean;
    order: number;
    updatedAt: string;
}

const dataDirectory = path.join(process.cwd(), 'data');
const projectsFile = path.join(dataDirectory, 'projects.json');

export function getProjects(): Project[] {
    if (!fs.existsSync(projectsFile)) {
        return [];
    }
    const fileContents = fs.readFileSync(projectsFile, 'utf8');
    try {
        const projects = JSON.parse(fileContents);
        // Sort by order (asc) then updatedAt (desc)
        return projects.sort((a: Project, b: Project) => {
            if (a.order !== b.order) return a.order - b.order;
            return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });
    } catch (e) {
        console.error("Error parsing projects.json", e);
        return [];
    }
}

export function saveProjects(projects: Project[]): void {
    // Ensure directory exists
    if (!fs.existsSync(dataDirectory)) {
        fs.mkdirSync(dataDirectory, { recursive: true });
    }
    fs.writeFileSync(projectsFile, JSON.stringify(projects, null, 2), 'utf8');
}

export function getProject(id: string): Project | undefined {
    const projects = getProjects();
    return projects.find((p) => p.id === id);
}

export function createProject(project: Omit<Project, 'id' | 'updatedAt'>): Project {
    const projects = getProjects();
    const newProject: Project = { 
        ...project, 
        id: Date.now().toString(),
        updatedAt: new Date().toISOString()
    };
    projects.push(newProject);
    saveProjects(projects);
    return newProject;
}

export function updateProject(id: string, updates: Partial<Omit<Project, 'id'>>): Project | null {
    const projects = getProjects();
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) return null;

    projects[index] = { 
        ...projects[index], 
        ...updates,
        updatedAt: new Date().toISOString()
    };
    saveProjects(projects);
    return projects[index];
}

export function deleteProject(id: string): boolean {
    const projects = getProjects();
    const filteredProjects = projects.filter((p) => p.id !== id);
    if (projects.length === filteredProjects.length) return false;

    saveProjects(filteredProjects);
    return true;
}
