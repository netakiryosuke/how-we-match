import { useEffect } from "react";

export default function FallingLeaves({ imageSrc, count }) {
    useEffect(() => {
        const container = document.createElement("div");
        container.style.position = "fixed";
        container.style.top = 0;
        container.style.left = 0;
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.overflow = "hidden";
        container.style.zIndex = 0;
        container.style.pointerEvents = "none";
        document.body.appendChild(container);

        const leaves = [];

        for (let i = 0; i < count; i++) {
            const leaf = document.createElement("img");
            leaf.src = imageSrc;
            leaf.style.position = "absolute";
            leaf.style.top = `${-50 - Math.random() * 100}px`;
            leaf.style.left = `${Math.random() * 100}vw`;
            leaf.style.width = `${20 + Math.random() * 40}px`;
            leaf.style.opacity = `${0.5 + Math.random() * 0.5}`;
            leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
            leaf.style.transition = "transform 0.2s linear";
            container.appendChild(leaf);
            leaves.push(leaf);

            const fallDuration = 8000 + Math.random() * 4000;
            const spin = Math.random() * 360;

            leaf.animate(
                [
                    { transform: `translateY(0) rotate(0deg)` },
                    {
                        transform: `translateY(100vh) rotate(${spin}deg)`,
                    },
                ],
                {
                    duration: fallDuration,
                    iterations: Infinity,
                    delay: Math.random() * 5000,
                }
            );
        }

        return () => document.body.removeChild(container);
    }, [imageSrc, count]);

    return null;
}
