import React from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignUp from '../Pages/SignUp/SignUpForm'
import Filtro from '../Pages/Filtro/Filtro'
import Resultado from '../Pages/Resultado/Resultado'
import Carrinho from '../Pages/Carrinho/Carrinho'
import MeuPerfil from '../Pages/MeuPerfil/MeuPerfil'
import CadastroPage from '../Pages/CadastroEndereco/CadastroPage'
import Error from '../Pages/Error/Error'
import LoginPage from '../Pages/Login/LoginPage'
import Categorias from '../Pages/Home/Categorias/Categoria'
import FiltroRestaurante from '../Pages/Home/FiltroRestaurante/FiltroRestaurante'


const Router = () => {
    //const [teste,setTest]=useState([])
    return (
        <BrowserRouter>
                <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage/>
                </Route>

                <Route exact path={"/signup"}>
                    <SignUp />
                </Route>

                <Route exact path={"/filtro"}>
                    <Filtro />
                </Route>

{/* {caminho resultado modificado - teste} */}
                <Route exact path={"/resultado/:id"}> 
                    <Resultado />
                </Route>

                <Route exact path={"/carrinho"}>
                    <Carrinho />
                </Route>

                <Route exact path={"/meuPerfil"}>
                    <MeuPerfil />
                </Route>

                <Route exact path={"/cadastro"}>
                    <CadastroPage />
                </Route>

                <Route exact path={"/categorias/:id"}>
                    <Categorias />
                </Route>

                <Route exact path={"/filtro/restaurante"}>
                    <FiltroRestaurante />
                </Route>
                
                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router