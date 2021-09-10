import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin } from "../Routes/coordinator";

const useProtectedPage=()=>{
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            goToLogin(history)
        }
    },[history])

}
export default useProtectedPage

//Elias