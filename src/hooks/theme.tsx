/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {colors} from '~/theme'
import { useColorScheme } from 'react-native'



type Props = {
  children: React.ReactNode;
}


interface ThemeProps {
  main: string, 
  secondary:string,
  primaryText: string,
  secondaryText:string, 
  terciaryText:string,
  TextUnSelectCategory:string,
  borderUnselectCategory:string,
  background:string,
  white:string,
  gray:string,
  backgroundModal:string,
  backgroundListCart:string,
  titleModal:string,
  textModal:string,
  blue:string,
  red:string,
  bagIcon: string,
  bagText:string,
  textListCart: string
}

interface ThemeContext {
  theme: ThemeProps;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider: React.FC<Props> = ({children}) => {
  const [theme, setTheme] = useState<ThemeProps>({} as ThemeProps)
  const colorScheme = useColorScheme()

  useEffect(() => {
    async function loadThemeType(): Promise<void> {
  
      if (colorScheme === 'dark') {
        setTheme(colors.dark)
      } else {
        setTheme(colors.light)
      }
    }

    void loadThemeType()
  }, [])


  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContext {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
