import { useEffect, useState } from "react";
import "./ThemeSwitch.css"

export default function ThemeSwitch() {

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }

        return "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html")!.classList.add("dark");
        } else {
            document.querySelector("html")!.classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <label htmlFor="theme-switch" className="theme-switch hover:scale-110 transition duration-[400ms] ease">
            <input id="theme-switch" type="checkbox" onChange={handleChangeTheme} />
            <span className="theme-slider"></span>
            <span className="theme-decoration"></span>
        </label>
    )
}
