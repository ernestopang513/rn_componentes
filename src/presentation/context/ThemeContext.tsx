import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { darkColors, darkRedColors, lightColors, ThemeColors } from "../../config/theme/theme";
import { Appearance, AppState, useColorScheme } from 'react-native';

type ThemeColor = 'light' | 'dark' | 'redDark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;

    setTheme: (theme: ThemeColor) => void;
}

const temas = {
    light: lightColors,
    dark: darkColors,
    redDark: darkRedColors
}


export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {

    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light')

    // useEffect(() => {
    //     // console.log(colorScheme)
    //     if (colorScheme === 'dark') {
    //         setCurrentTheme('dark')
    //     } else {
    //         setCurrentTheme('light')
    //     }
    // }, [colorScheme])

    useEffect(()=>{
        const subscription = AppState.addEventListener('change' , nextAppState => {
            const colorScheme = Appearance.getColorScheme();
            setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light')
        })

        return () => {
            subscription.remove();
        }
    }, [])

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme);
    }

    return (
        <ThemeContext.Provider
            value = {{
                currentTheme: currentTheme,
                // colors: (currentTheme === 'light' ? lightColors : (currentTheme === 'dark' ? darkColors : darkRedColors)),
                colors: temas[currentTheme],
                isDark: currentTheme.toLowerCase().includes('dark'),
                setTheme: setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}