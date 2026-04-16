import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html
            as="div"
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
            }}
        >
            <span className="canvas-loader" style={{ width: progress * 100 }} />
            <p
                style={{
                    fontSize: 12,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 39,
                }}
            >
                {progress !== 0
                    ? `${(progress * 100).toFixed(0)}%`
                    : "Loading..."}
            </p>
        </Html>
    );
};

export default CanvasLoader;
