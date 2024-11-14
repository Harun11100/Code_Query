"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<string>(() => {
    // Retrieve initial theme preference from localStorage or default to 'light'
    return localStorage.getItem("theme") || "light";
  });

  const handleThemeChange = (newMode: string) => {
    setMode(newMode);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    handleThemeChange(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
