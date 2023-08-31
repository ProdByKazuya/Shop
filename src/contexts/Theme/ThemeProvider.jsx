import React, { useCallback, useContext, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const THEMES = {
    DARK: 'app_dark_theme',
    LIGHT: 'app_light_theme'
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'

const INITIAL_THEME = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || THEMES.LIGHT

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(INITIAL_THEME)

    const toggleTheme = useCallback(() => {
        const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        setTheme(newTheme)
    }, [theme])

    const defaultProps = useMemo(() => ({
        toggleTheme,
        theme
    }), [theme])

    return (
        <ThemeContext.Provider 
            value={defaultProps}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;