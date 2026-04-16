"use client";

import React, { useState, useEffect } from "react";
import {
    Code2,
    Database,
    Globe,
    Server,
    Smartphone,
    Zap,
    Sparkles,
    Target,
    Rocket,
    Award,
    TrendingUp,
} from "lucide-react";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSkill, setActiveSkill] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    const skills = [
        {
            category: "Frontend Development",
            icon: <Globe className="w-6 h-6" />,
            gradient: "from-blue-500 to-cyan-500",
            technologies: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
                "JavaScript",
            ],
        },
        {
            category: "Backend Development",
            icon: <Server className="w-6 h-6" />,
            gradient: "from-purple-500 to-pink-500",
            technologies: [
                "Node.js",
                "Express",
                "Python",
                "REST APIs",
                "GraphQL",
                "Authentication",
            ],
        },
        {
            category: "Database & Storage",
            icon: <Database className="w-6 h-6" />,
            gradient: "from-green-500 to-emerald-500",
            technologies: [
                "MongoDB",
                "PostgreSQL",
                "Redis",
                "Firebase",
                "SQL",
                "Data Modeling",
            ],
        },
        {
            category: "Tools & Platforms",
            icon: <Zap className="w-6 h-6" />,
            gradient: "from-yellow-500 to-orange-500",
            technologies: [
                "Git",
                "Docker",
                "AWS",
                "Vercel",
                "CI/CD",
                "Testing",
            ],
        },
        {
            category: "Mobile Development",
            icon: <Smartphone className="w-6 h-6" />,
            gradient: "from-red-500 to-rose-500",
            technologies: [
                "React Native",
                "Mobile UI",
                "Responsive Design",
                "PWA",
                "Performance Optimization",
            ],
        },
        {
            category: "Other Skills",
            icon: <Code2 className="w-6 h-6" />,
            gradient: "from-indigo-500 to-violet-500",
            technologies: [
                "Problem Solving",
                "Team Collaboration",
                "Agile/Scrum",
                "Code Review",
                "Technical Writing",
            ],
        },
    ];

    const stats = [
        {
            icon: <Target className="w-8 h-8" />,
            value: "3+",
            label: "Years Experience",
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            value: "20+",
            label: "Projects Completed",
        },
        {
            icon: <Award className="w-8 h-8" />,
            value: "10+",
            label: "Technologies",
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            value: "100%",
            label: "Client Satisfaction",
        },
    ];

    return (
        <section
            id="about"
            className="w-full px-4 py-20 md:px-6 relative overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl relative z-10">
                {/* Introduction */}
                <div
                    className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="relative bg-linear-to-br from-white to-zinc-50 dark:from-zinc-800/50 dark:to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

                        <div className="relative max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full" />
                                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                                    Who I Am
                                </h2>
                            </div>
                            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                <p>
                                    I'm a passionate Full Stack Developer with a
                                    strong foundation in building modern web
                                    applications. My journey in technology
                                    started with curiosity and has evolved into
                                    a dedicated career focused on creating
                                    impactful digital solutions.
                                </p>
                                <p>
                                    I specialize in developing scalable
                                    applications using cutting-edge technologies
                                    like React, Next.js, and Node.js. My
                                    experience spans from frontend interfaces to
                                    backend systems, database design, and cloud
                                    deployment.
                                </p>
                                <p>
                                    I believe in writing clean, maintainable
                                    code and staying updated with the latest
                                    industry trends. When I'm not coding, you
                                    can find me exploring new technologies,
                                    contributing to open-source projects, or
                                    sharing knowledge with the developer
                                    community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
