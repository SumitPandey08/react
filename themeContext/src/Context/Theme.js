import { createContext } from 'react'
import {useContext} from 'react'

export  const themeContext = createContext({
    theme: 'light',
    darkTheme: () => {} ,
    lightTheme: () => {}
})

export const ThemeProvider = themeContext.Provider

export default function useTheme(){
    return useContext(themeContext)
}
