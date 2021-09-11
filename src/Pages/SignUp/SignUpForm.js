import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from "../../hooks/useform"
import {signUp} from "../../services/user"
import logo from "../../assets/logo.png"
import { LogoImage } from './styled'
import CircularProgress from '@material-ui/core/CircularProgress'

const SignUpForm = ({setRightButtonText}) => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ name: "", email: "",cpf: "", password: ""})
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, history, setRightButtonText, setIsLoading)

    }

  // function validarSenha() {
  //     senha = document.getElementsByName('senha').value;
  //     senha2 = document.getElementsByName('senha2').value;

  //     if (senha!= senha2){
  //       senha2.setCustomValidity("Senhas não conferem");
  //     } else{
  //       senha2.setCustomValidity('');
  //     }
  //       senha.onChange= validatePassword;
  //       senha2.onkeyup= validatePassword;

  //     }

  
  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
      <LogoImage src={logo} />
            <h3/><b>Entrar</b>
        <InputsContainer>
          <TextField
            value={form.name}
            name={"name"}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            value={form.email}
            name={"email"}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            type={"email"}
            fullWidth
            required
            margin={"normal"}
          />
            <TextField
            value={form.cpf}
            name={"cpf"}
            onChange={onChange}
            label={"cpf"}
            variant={"outlined"}
            type={"cpf"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            value={form.password}
            name={"password"}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            type={"password"}
            fullWidth
            required
            margin={"normal"}
          />
               {/* <TextField
            value={form.password}
            name={'senha2'}
            onChange={onChange}
            label={'Confirmar Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          /> */}
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          // value="Login"
          // onClick="return validarSenha()"
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Cadastro</>}
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm;
