
import fs from 'fs';
import path from 'path';

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    github?: string;
    imageUrl?: string;
}

const dataDirectory = path.join(process.cwd(), 'data');
const projectsFile = path.join(dataDirectory, 'projects.json');

export function getProjects(): Project[] {
    if (!fs.existsSync(projectsFile)) {
        return [];
    }
    const fileContents = fs.readFileSync(projectsFile, 'utf8');
    return JSON.parse(fileContents);
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

export function createProject(project: Omit<Project, 'id'>): Project {
    const projects = getProjects();
    const newProject = { ...project, id: Date.now().toString() };
    projects.push(newProject);
    saveProjects(projects);
    return newProject;
}

export function updateProject(id: string, updates: Partial<Omit<Project, 'id'>>): Project | null {
    const projects = getProjects();
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) return null;

    projects[index] = { ...projects[index], ...updates };
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
