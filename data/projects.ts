import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "Portfolio",
        description:
            "A portfolio website built using Next.js and Tailwind CSS.",
        tech: ["Next.js", "Tailwind CSS"],
        highlight: "A portfolio website built using Next.js and Tailwind CSS.",
        github: "https://github.com/dipexplorer/portfolio",
    },
    {
        title: "LegalHub",
        description: "AI-powered legal platform with smart search",
        tech: ["Node.js", "MongoDB", "Socket.io"],
        highlight: "Reduced DB load by 60%",
        github: "https://github.com/dipexplorer/legal-hub",
    },
    {
        title: "VideTube",
        description: "Scalable video streaming backend",
        tech: ["Node.js", "Redis", "MongoDB"],
        highlight: "Optimized API performance with caching",
    },
];
