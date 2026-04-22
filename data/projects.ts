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
        title: "LegalHub – AI-Powered Legal Platform",
        description:
            "Architected AI-powered legal platform integrating Mistral AI and semantic search for intelligent query resolution across legal datasets. Designed modular MVC architecture and implemented real-time communication (WebSockets), secure authentication (OAuth), automated testing (Jest), and CI/CD pipelines for production deployment.",
        tech: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mistral AI",
            "Socket.io",
            "Passport.js",
            "EJS",
        ],
        highlight:
            "Architected AI-powered legal platform integrating Mistral AI and semantic search for intelligent query resolution across legal datasets.",
        github: "https://github.com/dipexplorer/LegalHub",
    },
    {
        title: "LearnSight – Adaptive Learning Platform",
        description:
            "Developed adaptive learning engine using dynamic scoring algorithms to adjust difficulty in in real time based on user performance across multiple cognitive dimensions.",
        tech: [
            "Next.js",
            "TypeScript",
            "Firebase",
            "Firestore",
            "Tailwind CSS",
        ],
        highlight:
            "Developed adaptive learning engine using dynamic scoring algorithms to adjust difficulty in in real time based on user performance across multiple cognitive dimensions.",
        github: "https://github.com/dipexplorer/LearnSight",
    },
    {
        title: "Acadence – Intelligent Attendance System",
        description:
            "Developed role-based attendance system with Supabase-backed server logic and access control. Built predictive analytics module to simulate attendance scenarios and calculate eligibility thresholds.",
        tech: ["Next.js", "Supabase", "Tailwind CSS"],
        highlight:
            "Developed role-based attendance system with Supabase-backed server logic and access control.",
        github: "https://github.com/dipexplorer/Acadence",
    },
    {
        title: "VideTube – Video Streaming Backend",
        description:
            "Designed scalable video backend with JWT authentication, media handling, and core APIs (videos, comments, subscriptions). Optimized performance using Redis caching and MongoDB aggregation, reducing database load by 60% and significantly improving API response times.",
        tech: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redis",
            "JWT",
            "Cloudinary",
        ],
        highlight:
            "Optimized performance using Redis caching and MongoDB aggregation, reducing database load by 60% and significantly improving API response times.",
        github: "https://github.com/dipexplorer/VideTube",
    },
];
