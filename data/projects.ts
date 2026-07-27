import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "SahiDawa – Medicine Verification Platform",
        description:
            "SahiDawa is an open-source platform that helps citizens verify medicines, find trusted pharmacies, and report suspicious drugs — designed for low-bandwidth environments and multilingual access across India.",
        tech: [
            "Next.js",
            "TypeScript",
            "IPFS",
            "MongoDB",
            "Tailwind CSS",
            "PWA",
        ],
        highlight:
            "GSSoC'26 · 62 ⭐ — Healthcare platform serving rural India with offline-first PWA medicine verification.",
        github: "https://github.com/RatLoopz/sahidawa-india",
        liveUrl: "https://sahidawa-india-web.vercel.app",
        image: "/projects/sahidawa_ui_ss/sahidawa_stickman_infographic.png",
        images: [
            "/projects/sahidawa_ui_ss/sahidawa_stickman_infographic.png",
            "/projects/sahidawa_ui_ss/sahidawa-india-web.vercel.app_en_home.png",
            "/projects/sahidawa_ui_ss/sahidawa-india-web.vercel.app_en.png",
            "/projects/sahidawa_ui_ss/sahidawa-india-web.vercel.app_en (1).png"
        ],
        features: [
            "Offline-first PWA for rural access",
            "IPFS decentralised storage integration",
            "Multi-lingual accessibility support"
        ]
    },
    {
        title: "GridMind – Smart Grid Reliability Platform",
        description:
            "GridMind is an adaptive intelligence platform developed during my APDCL internship to transition distribution transformer maintenance from reactive break-fix to predictive, data-driven planning. It ingests time-series load telemetry, scores health using survival analysis and anomaly detection, and provides interactive risk overlays on a WebGL GIS map.",
        tech: [
            "FastAPI",
            "Next.js",
            "PostgreSQL",
            "PostGIS",
            "TimescaleDB",
            "Celery",
            "Redis",
            "Docker",
            "Deck.gl"
        ],
        highlight:
            "Completed for APDCL · Predictive intelligence dashboard mapping transformer failure risks using Survival Analysis & anomaly detection.",
        github: "https://github.com/dipexplorer/gridmind",
        liveUrl: "https://gridmind-beta.vercel.app",
        image: "/projects/gridmind_ui_ss/gridmind_stickman_infographic.png",
        images: [
            "/projects/gridmind_ui_ss/gridmind_stickman_infographic.png"
        ],
        features: [
            "Predictive Health Scoring (Cox Survival PH + Isolation Forest)",
            "TimescaleDB & Redis async ingestion pipeline",
            "WebGL accelerated mapping using Deck.gl rendering 10k+ points"
        ]
    },
    {
        title: "AADSS – Attendance Decision System",
        description:
            "Academic Attendance Decision Support System (AADSS) with advanced analytics. Built predictive eligibility analytics to help students simulate attendance scenarios, calculate minimum class thresholds, and avoid failing due to attendance shortfalls.",
        tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        highlight:
            "Ongoing production system with predictive eligibility analytics and real-time attendance policy simulation.",
        github: "https://github.com/dipexplorer/AADSS",
        liveUrl: "https://aadss-ygag.vercel.app/",
        image: "/projects/aadss_ui_ss/aadss_stickman_infographic.png",
        images: [
            "/projects/aadss_ui_ss/aadss_stickman_infographic.png",
            "/projects/aadss_ui_ss/aadss.png",
            "/projects/aadss_ui_ss/aadss-ygag.vercel.app_calendar-dashboard.png",
            "/projects/aadss_ui_ss/aadss-ygag.vercel.app_calendar-dashboard (1).png",
            "/projects/aadss_ui_ss/aadss-ygag.vercel.app_calendar-dashboard (2).png"
        ],
        features: [
            "Predictive simulation engine for attendance forecasting",
            "Anti-proxy system using GPS geofencing verification",
            "Supabase real-time database state sync"
        ]
    },
    {
        title: "LegalHub – AI Legal Platform",
        description:
            "LegalHub (GSSoC'25) is a comprehensive platform designed to simplify legal concepts, provide essential legal documents, and educate users about their rights. Architected AI-powered query resolution with Mistral AI and real-time WebSocket communication.",
        tech: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mistral AI",
            "Socket.io",
            "EJS",
        ],
        highlight:
            "GSSoC'25 · 18 ⭐ — AI-powered legal platform integrating Mistral AI and semantic search for intelligent query resolution.",
        github: "https://github.com/dipexplorer/LegalHuB",
        liveUrl: "https://legalhub-zwk9.onrender.com",
        image: "/projects/legalhub_ui_ss/legalhub_stickman_infographic.png",
        images: [
            "/projects/legalhub_ui_ss/legalhub_stickman_infographic.png",
            "/projects/legalhub_ui_ss/legalhub_live.png",
            "/projects/legalhub_ui_ss/legalhub-zwk9.onrender.com_rights.png",
            "/projects/legalhub_ui_ss/legalhub-zwk9.onrender.com_api_articles_689263fb40b8c577b897c643.png"
        ],
    },
    {
        title: "LearnSight – Adaptive Learning Platform",
        description:
            "LearnSight — Adaptive learning system with diagnostic testing and personalized practice generation, built using Next.js, Firebase, and data-driven logic. Uses dynamic scoring algorithms to adjust difficulty in real time.",
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
        liveUrl: "https://lea-edi0.onrender.com/",
        image: "/projects/learnsight_ui_ss/learnsight_stickman_infographic.png",
        images: [
            "/projects/learnsight_ui_ss/learnsight_stickman_infographic.png",
            "/projects/learnsight_ui_ss/learnsight_live.png",
            "/projects/learnsight_ui_ss/lea-edi0.onrender.com_student_diagnostic.png",
            "/projects/learnsight_ui_ss/lea-edi0.onrender.com_student_diagnostic (1).png",
            "/projects/learnsight_ui_ss/lea-edi0.onrender.com_student_diagnostic (2).png",
            "/projects/learnsight_ui_ss/lea-edi0.onrender.com_student_diagnostic (3).png",
            "/projects/learnsight_ui_ss/lea-edi0.onrender.com_student_diagnostic (4).png",
            "/projects/learnsight_ui_ss/lea-edi0.onrender.com_student_diagnostic (5).png"
        ],
        features: [
            "Real-time diagnostic testing",
            "Adaptive difficulty scoring engine",
            "Firestore real-time state sync"
        ]
    },
    {
        title: "AI Support Triage System",
        description:
            "A high-performance support triage system that classifies, routes, and generates grounded responses across multiple domains without relying on LLM hallucination. Uses RAG pipelines with domain-specific vector stores.",
        tech: ["Python", "RAG", "Vector DB", "LLM", "FastAPI"],
        highlight:
            "Zero-hallucination AI triage engine using retrieval-augmented generation across multiple enterprise domains.",
        github: "https://github.com/dipexplorer/AI-Support-Triage-System",
        image: "/projects/ai_trainge_support_ui_ss/ai_triage_stickman_infographic.png",
        images: [
            "/projects/ai_trainge_support_ui_ss/ai_triage_stickman_infographic.png",
            "/projects/ai_trainge_support_ui_ss/ai_triage_live.png",
            "/projects/ai_trainge_support_ui_ss/localhost_8765_.png",
            "/projects/ai_trainge_support_ui_ss/localhost_8765_ (1).png"
        ]
    },
    {
        title: "VideTube – Video Streaming Backend",
        description:
            "Backend system for a video platform with JWT access/refresh flow, media uploads, and modular API architecture using Node.js, Express, and MongoDB. Optimized using Redis caching and aggregation pipelines.",
        tech: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redis",
            "JWT",
            "Cloudinary",
        ],
        highlight:
            "Redis caching + MongoDB aggregation reduced database load and significantly improved API response times.",
        github: "https://github.com/dipexplorer/VideTube",
        image: "/projects/videtube_stickman_infographic.png",
        images: [
            "/projects/videtube_stickman_infographic.png"
        ],
        features: [
            "JWT Access & Refresh token rotation",
            "Redis caching layer optimization",
            "Complex MongoDB aggregation pipelines"
        ]
    },
    {
        title: "Stealth Protocol",
        description:
            "I'm always experimenting with new architectures and building new systems. Check out my GitHub profile to see my latest commits, active repositories, and ongoing open-source contributions.",
        tech: ["TypeScript", "Rust", "Go", "Docker"],
        highlight:
            "Currently brewing something new...",
        github: "https://github.com/dipexplorer",
        image: "",
        images: [],
        features: [
            "Continuous deployment pipelines",
            "Exploring web3 and decentralized systems",
            "Building scalable microservices"
        ]
    }
];
