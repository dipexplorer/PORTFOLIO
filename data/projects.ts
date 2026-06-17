import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "SahiDawa – Medicine Verification Platform",
        description:
            "GSSoC'26 open-source platform helping citizens verify medicines, find trusted Jan Aushadhi pharmacies, and report suspicious drugs — built for low-bandwidth environments across India. Features IPFS-based prescription uploads, offline ServiceWorker caching, and generic drug search optimized for rural access.",
        tech: [
            "Next.js",
            "TypeScript",
            "IPFS",
            "MongoDB",
            "Tailwind CSS",
            "PWA",
        ],
        highlight:
            "GSSoC'26 · 62 ⭐ · 285 forks — Healthcare platform serving rural India with offline-first PWA medicine verification.",
        github: "https://github.com/RatLoopz/sahidawa-india",
    },
    {
        title: "LegalHub – AI Legal Platform",
        description:
            "GSSoC'25 open-source platform simplifying legal concepts, providing essential legal documents, and educating users about their rights. Architected AI-powered query resolution with Mistral AI, real-time WebSocket communication, OAuth authentication, and Jest CI pipelines. 18 stars · 56 forks.",
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
            "GSSoC'25 · 18 ⭐ · 56 forks — AI-powered legal platform integrating Mistral AI and semantic search for intelligent query resolution.",
        github: "https://github.com/dipexplorer/LegalHuB",
    },
    {
        title: "AADSS – Attendance Decision System",
        description:
            "Academic Attendance Decision Support System with advanced analytics and policy simulation engine. Built predictive eligibility analytics to help students simulate attendance scenarios, calculate minimum class thresholds, and avoid failing due to attendance shortfalls.",
        tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        highlight:
            "Ongoing production system with predictive eligibility analytics and real-time attendance policy simulation.",
        github: "https://github.com/dipexplorer/AADSS",
    },
    {
        title: "AI Support Triage System",
        description:
            "High-performance multi-domain support triage system that classifies, routes, and generates grounded responses without LLM hallucination. Uses RAG pipelines with domain-specific vector stores to ensure factually accurate, source-grounded answers across multiple enterprise domains.",
        tech: ["Python", "RAG", "Vector DB", "LLM", "FastAPI"],
        highlight:
            "Zero-hallucination AI triage engine using retrieval-augmented generation across multiple enterprise domains.",
        github: "https://github.com/dipexplorer/AI-Support-Triage-System",
    },
    {
        title: "VideTube – Video Streaming Backend",
        description:
            "Scalable video backend with JWT access/refresh token flow, Cloudinary media uploads, and modular REST APIs for videos, comments, likes, and subscriptions. Optimized using Redis caching and MongoDB aggregation pipelines, reducing database load by 60% and improving API response times significantly.",
        tech: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redis",
            "JWT",
            "Cloudinary",
        ],
        highlight:
            "Redis caching + MongoDB aggregation reduced database load by 60% and significantly improved API response times.",
        github: "https://github.com/dipexplorer/VideTube",
    },
    {
        title: "LearnSight – Adaptive Learning Platform",
        description:
            "Adaptive learning engine with diagnostic testing and personalized practice generation. Uses dynamic scoring algorithms to adjust difficulty in real time based on user performance across multiple cognitive dimensions, with Firebase Firestore for persistent multi-device sync.",
        tech: [
            "Next.js",
            "TypeScript",
            "Firebase",
            "Firestore",
            "Tailwind CSS",
        ],
        highlight:
            "Dynamic difficulty scoring engine adapts quiz content in real time based on cognitive performance metrics.",
        github: "https://github.com/dipexplorer/learnsight",
    },
    {
        title: "Acadence – Intelligent Attendance System",
        description:
            "Role-based attendance management system with Supabase-backed server logic and RLS access control. Built predictive analytics module to simulate attendance scenarios and calculate eligibility thresholds, with a clean mobile-responsive dashboard UI.",
        tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
        highlight:
            "Row Level Security + predictive analytics help students track and simulate eligibility across all courses.",
        github: "https://github.com/dipexplorer/Acadence",
    },
    {
        title: "SidebarSync – LinkedIn AI Engagement",
        description:
            "Open-source Chrome extension that automates authentic LinkedIn engagement by analyzing posts and generating context-aware comments in any tone with a single click. Fully configurable tone settings (professional, casual, insightful) with flexible prompt engineering for personalized output.",
        tech: ["JavaScript", "Chrome Extension API", "AI", "Prompt Engineering"],
        highlight:
            "Open-source LinkedIn AI engagement tool — context-aware comment generation with configurable tone and style.",
        github: "https://github.com/RatLoopz/SidebarSync",
    },
    {
        title: "Airbnb Clone – Full Stack Booking App",
        description:
            "Full-stack web application inspired by Airbnb, built with Node.js, Express, and MongoDB. Features property listing workflows, image uploads, booking management, user authentication, and interactive map-based search — deployed with complete CRUD functionality and MVC architecture.",
        tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "Mapbox"],
        highlight:
            "End-to-end property listing & booking platform with map-based search, image uploads, and full CRUD workflows.",
        github: "https://github.com/dipexplorer/Airbnb-Project",
    },
];
