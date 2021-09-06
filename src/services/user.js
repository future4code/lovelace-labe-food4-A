import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToRecipesList } from "../Routes/coordinator"



export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/fourFoodA/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/fourFoodA/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}