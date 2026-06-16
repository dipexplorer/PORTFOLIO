
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div>
            <div className="border p-4 rounded-xl mb-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>

                <div className="flex gap-2 mt-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="text-sm bg-gray-800 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="mt-2 text-green-400">{project.highlight}</p>
            </div>
        </div>
    );
}
