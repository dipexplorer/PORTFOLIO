import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <section className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Projects
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-400">
                Here are some of my projects
            </p>
            <div className="flex flex-col gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}
