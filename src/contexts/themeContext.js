import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    // theme: 'light',
    // darkMode: () => {},
    // lightMode: () => {},
    // onThemeToggle: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) throw new Error('ThemeContext is undefined') 
    return context;
}