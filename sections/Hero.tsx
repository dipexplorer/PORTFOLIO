"use client";

import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/Model";

export default function Hero() {
    return (
        <section className="w-full px-4 pb-8 pt-24 md:px-6">
            <div className="mx-auto flex max-w-7xl justify-end">
                <div className="relative h-[70vh] min-h-130 w-full overflow-hidden px-8 py-8 md:w-[56%] md:px-16 md:py-10">
                    <Canvas
                        className="w-full h-full"
                        dpr={[1, 1.25]}
                        frameloop="always"
                        gl={{
                            antialias: false,
                            powerPreference: "low-power",
                        }}
                    >
                        <PerspectiveCamera
                            makeDefault
                            position={[3.4, 1.1, 10.8]}
                        />
                        <ambientLight intensity={1.3} />
                        {/* Ye overall soft light hai, poore model ko base brightness deti hai. */}

                        <directionalLight
                            position={[6, 8, 6]}
                            intensity={1.45}
                        />
                        {/* Ye ek sun-like light hai. Specific direction se model ko light karti hai. */}

                        <pointLight position={[-4, 3, 4]} intensity={1.1} />
                        {/* Ye extra fill light hai, taaki dark side bilkul black na ho. */}

                        <Suspense fallback={null}>
                            {/* Jab model load ho raha hota hai, tab React ko handle karne ke liye wrapper. */}
                            <Model
                                position={[2.8, -1.55, 0]}
                                rotation={[0, -0.35, 0]}
                                scale={3}
                            />
                        </Suspense>
                        <OrbitControls
                            enablePan
                            enableZoom
                            enableRotate
                            minDistance={3.2}
                            maxDistance={22}
                            minPolarAngle={0}
                            maxPolarAngle={Math.PI}
                            target={[2.55, 0.25, 0]}
                        />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
