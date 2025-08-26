import { ThemeProvider } from "@emotion/react"
import { Counter } from "./Counter"
import { useState } from "react"
import { createTheme, CssBaseline, Switch } from "@mui/material"



export type ThemeMode = 'dark' | 'light'


function App() {
    
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: themeMode === 'light' ? '#fed470' : '#1b1f32',
      },
    },
  });
    
  const changeMode = () => {
      setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }


  return (
  
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Switch
                checked={ themeMode === 'dark'}
                color={'primary'} 
                onChange={changeMode}/>
        <Counter />
    </ThemeProvider>
      
        
  )
}

export default App
