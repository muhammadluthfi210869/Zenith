import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    variant?: "fade-up" | "fade-in" | "scale-up" | "slide-right";
    className?: string;
}

const Reveal: React.FC<RevealProps> = ({
    children,
    width = "100%",
    delay = 0,
    duration = 0.5,
    variant = "fade-up",
    className = ""
}) => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    const getTransform = () => {
        if (!isVisible) {
            switch (variant) {
                case "fade-up": return "translateY(75px)";
                case "scale-up": return "scale(0.8)";
                case "slide-right": return "translateX(-75px)";
                default: return "none";
            }
        }
        return "none";
    };

    const getOpacity = () => {
        return isVisible ? 1 : 0;
    };

    return (
        <div ref={ref} style={{ width, overflow: "hidden" }} className={className}>
            <div
                style={{
                    transform: getTransform(),
                    opacity: getOpacity(),
                    transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Reveal;
