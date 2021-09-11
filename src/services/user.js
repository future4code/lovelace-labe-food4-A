import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../constants/urls"
import { goToRecipesList } from "../Routes/coordinator"
import { goToAdress} from "../Routes/coordinator"


export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            //alert(err.response.data.message)
        })
}


export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            console.log("cadastro", res)
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToAdress(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            // alert(err)
            console.log(err)
        })
}



export const AddAdress =(body, clear, history, setRightButtonText, setIsLoading)=>{
    setIsLoading(true)
      const token = localStorage.getItem("token")
      axios.put(`${BASE_URL}/address`,body, { 
        headers: {
        auth: token
        //"Content-Type": "application/json"
        },
        })
        
        .then((res) => {
            console.log("Endereço :",res)
            //localStorage.removeItem("token");
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToRecipesList(history)
            
      })
      .catch((err) => {
          console.log("erro no cadastro de endereço",body)
          
      })
    }

//   export const getRestaurants =()=>{
//     const token = localStorage.getItem("token")
//     axios.get(`${BASE_URL}/restaurants`, { 
//       headers: {
//       auth: token
//       },
//       })

//       .then((res) => {
//           console.log("olha",res)
          
//     })
//     .catch((err) => {
//         console.log("deu b.o",err)
//     })
//   }


