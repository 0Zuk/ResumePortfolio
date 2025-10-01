
export const FooterSection = () => {
    return (
        <footer className="w-full py-4 bg-background/80 text-center text-foreground/70 text-sm mt-10">
            <p>© {new Date().getFullYear()} Pontus Karlsson. All rights reserved.</p>
            <p>Built with React and Tailwind CSS</p>
        </footer>
    );
};