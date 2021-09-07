import React from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignUp from '../Pages/SignUp/SignUpForm'
import Filtro from '../Pages/Filtro/Filtro'
import Resultado from '../Pages/Resultado/Resultado'
import Carrinho from '../Pages/Carrinho/Carrinho'
import MeuPerfil from '../Pages/MeuPerfil/MeuPerfil'
import CadastroEndereco from '../Pages/CadastroEndereco/CadastroEndereco'
import Error from '../Pages/Error/Error'
import LoginPage from '../Pages/Login/LoginPage'

const Router = () => {
    return (
        <BrowserRouter>
                <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage/>
                </Route>

                <Route exact path={"/signUp"}>
                    <SignUp />
                </Route>

                <Route exact path={"/filtro"}>
                    <Filtro />
                </Route>

                <Route exact path={"/resultado"}>
                    <Resultado />
                </Route>

                <Route exact path={"/carrinho"}>
                    <Carrinho />
                </Route>

                <Route exact path={"/meuPerfil"}>
                    <MeuPerfil />
                </Route>

                <Route exact path={"/cadastroeEndereco"}>
                    <CadastroEndereco />
                </Route>

                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router