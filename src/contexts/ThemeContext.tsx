import { createContext, ReactNode, useState } from 'react'

interface ThemeContextData {
    isDark: boolean;
    switchTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({children}: ThemeProviderProps) {

    const [isDark, setIsDark] = useState(false);

    const switchTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <ThemeContext.Provider value={{
            switchTheme,
            isDark
        }}>
            {children}
        </ThemeContext.Provider>
    )
}