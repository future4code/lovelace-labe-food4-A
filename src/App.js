import React, {useState} from "react"
import Router from "./Routes/Router"
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'


const App = () => {

  
  return (

    <ThemeProvider theme={theme}>

      
      <Router />
    </ThemeProvider>
  )
}

export default App;
