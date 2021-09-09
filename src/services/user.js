import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../constants/urls"
import { goToRecipesList } from "../Routes/coordinator"




export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
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
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err)
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


