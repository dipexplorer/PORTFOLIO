import Projects from "@/sections/Projects";
import Navbar from "@/sections/NavBar";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Navbar />
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-5xl font-bold text-center text-zinc-900 dark:text-white">
                        Hi, I'm{" "}
                        <span className="text-blue-900 dark:text-blue-300">
                            DIPJYOTI DAS
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-center text-zinc-300 dark:text-zinc-400">
                        I'm a Full Stack Developer
                    </p>
                </div>
                <hr />
                {/* <Projects /> */}
            </main>
        </div>
    );
}
