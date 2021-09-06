import React, {useState} from "react"
import Router from "./Routes/Router"
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header"

const App = () => {
  return(
 

  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
   <Router />
    </ThemeProvider>
  )
}

export default App;
