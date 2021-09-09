import React, {useState} from "react"
import { InputsContainer, LoginFormContainer } from "./styled"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from "../../hooks/useform"
//import { login } from "../../services/user"
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../../constants/urls"
import { goToRecipesList } from "../../Routes/coordinator"


//Elias teste

 const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            console.log("login", res)
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


//elias teste
const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText, setIsLoading)
    }

    return (
        <LoginFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        placeholder={"email@email.com"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        placeholder={"Mínimo de seis caracteres"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    
                    />
                </InputsContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    {isLoading ? <CircularProgress color={"neutral"} size={24} /> : <b>Entrar</b>}
                </Button>
            </form>
        </LoginFormContainer>
    )
}

export default LoginForm