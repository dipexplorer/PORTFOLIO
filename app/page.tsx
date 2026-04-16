import Projects from "@/sections/Projects";
import Navbar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
            <Navbar />
            <main className="w-full flex-1 bg-white dark:bg-black">
                <Hero />
                <About />
                {/* <Projects /> */}
            </main>
        </div>
    );
}
