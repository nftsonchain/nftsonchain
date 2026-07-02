"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "system" | "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  dark: boolean;
};

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* Load saved theme */
  useEffect(() => {
    const saved =
      (localStorage.getItem("theme") as Theme) || "system";

    setThemeState(saved);
    setMounted(true);
  }, []);

  /* Apply theme */
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    root.classList.remove("dark");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDark =
      theme === "dark" ||
      (theme === "system" && prefersDark);

    if (isDark) {
      root.classList.add("dark");
    }

    setDark(isDark);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        dark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}