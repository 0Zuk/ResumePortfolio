import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme === 'dark'){
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('light');
            setIsDarkMode(false);
        }
    }, [])


    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };
    return (  
    <button onClick={toggleTheme}>
        {" "}
        {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-300" />
        ) : (
        <Moon className="w-5 h-5 text-blue-900" />
        )}
    </button>
    );
};
