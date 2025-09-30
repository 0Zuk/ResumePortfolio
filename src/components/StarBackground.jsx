import { useState, useEffect } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        generateStars();
        generateMeteors();

        // Detect dark mode
        const checkDark = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        checkDark();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };
        window.addEventListener("resize", handleResize);
        window.addEventListener("classChange", checkDark);

        // Listen for theme changes (if you toggle dark mode by changing the class)
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("classChange", checkDark);
            observer.disconnect();
        };
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const numberOfOrangeMeteors = isDark ? 3 : 0; // Only in dark mode
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
                color: 'white',
            });
        }
        for (let i = 0; i < numberOfOrangeMeteors; i++) {
            newMeteors.push({
                id: numberOfMeteors + i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
                color: 'orange',
            });
        }
        setMeteors(newMeteors);
    };

    useEffect(() => {
        generateMeteors();
    }, [isDark]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map(star => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + 'px',
                    height: star.size + 'px',
                    left: star.x + '%',
                    top: star.y + '%',
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + 's',
                }} />
            ))}

            {meteors.map(meteor => (
                <div
                    key={meteor.id}
                    className={meteor.color === "orange" ? "meteor-orange animate-meteor" : "meteor animate-meteor"}
                    style={{
                        width: meteor.size * 30 + 'px',
                        height: meteor.size * 2 + 'px',
                        left: meteor.x + '%',
                        top: meteor.y + '%',
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + 's',
                    }}
                />
            ))}
        </div>
    );
};
