import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../components/ui/theme-provider";
import { useEffect } from "react";

export function ModeToggle() {
  const { theme: currentTheme, setTheme } = useTheme();
  useEffect(() => {
    if (!currentTheme) {
      setTheme("light");
    }
  }, [currentTheme, setTheme]);

  return (
    <button
      data-testid="mode-toggle-button"
      className="bg-transparent hover:bg-transparent cursor-pointer focus:outline-none focus:ring-0"
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
    >
      {currentTheme === "light" ? (
        <Moon data-testid="moon-icon" className="w-6 h-6" />
      ) : (
        <Sun data-testid="sun-icon" className="w-6 h-6" />
      )}
    </button>
  );
}
