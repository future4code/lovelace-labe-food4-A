import React from "react"
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { useHistory } from 'react-router-dom'
import {goToSignUp} from "../../Routes/coordinator"
import logo from "../../assets/logo.png"

const LoginPage = ({setRightButtonText}) => {

    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <h3/><b>Entrar</b>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"black"}
                >  <h4> Não possui cadastro? Clique Aqui</h4>
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage;