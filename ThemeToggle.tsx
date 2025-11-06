import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-[60px] h-[30px] rounded-full transition-all duration-300 ease-in-out hover:scale-105"
      style={{
        background: isDark 
          ? "rgba(255, 255, 255, 0.2)" 
          : "rgba(72, 247, 160, 0.3)",
        border: isDark 
          ? "2px solid rgba(255, 255, 255, 0.3)" 
          : "2px solid rgba(72, 247, 160, 0.5)",
        backdropFilter: "blur(10px)",
      }}
      aria-label="Toggle theme"
    >
      <div
        className="absolute top-[1px] w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center transition-all duration-300 ease-in-out shadow-lg"
        style={{
          left: isDark ? "2px" : "32px",
          background: isDark ? "white" : "hsl(162, 95%, 60%)",
        }}
      >
        {isDark ? (
          <Moon className="w-[14px] h-[14px] text-gray-800" />
        ) : (
          <Sun className="w-[14px] h-[14px] text-white" />
        )}
      </div>
    </button>
  );
};
