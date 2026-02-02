"use client";

import { useTranslations } from "next-intl";
import { ProjectList } from "@/components/public/ProjectList";
import { Project } from "@/lib/projects";

export function ProjectsClientWrapper({ projects }: { projects: Project[] }) {
    const t = useTranslations('Projects');

    return (
        <div className="py-12 md:py-24">
            <div className="mb-12 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">{t('title')}</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    {t('subtitle')}
                </p>
            </div>

            <ProjectList
                initialProjects={projects}
                labels={{
                    all: t('filterAll'),
                    personal: t('filterPersonal'),
                    school: t('filterSchool'),
                    experiment: t('filterExperiment'),
                    noResults: t('noResults'),
                    inProgress: t('inProgress')
                }}
            />
        </div>
    );
}
