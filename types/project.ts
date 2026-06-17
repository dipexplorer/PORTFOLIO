export interface Project {
    title: string;
    description: string;
    tech: string[];
    highlight: string;
    github?: string;
    liveUrl?: string;
    image?: string; // keeping image for backward compatibility
    images?: string[]; // new property for multiple images
    features?: string[];
}
