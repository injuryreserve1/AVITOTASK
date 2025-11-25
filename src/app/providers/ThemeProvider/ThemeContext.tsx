import { createContext } from "react";

export type Theme = "light" | "dark";
export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);
export const LOCAL_STORAGE_THEME_KEY = "theme";
