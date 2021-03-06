import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import useForm from "../../hooks/useform"
import {AddAdress} from "../../services/user"
import logo from "../../assets/logo.png"
import { LogoImage } from './style'
import CircularProgress from '@material-ui/core/CircularProgress'




const CadastroEnderecoForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ street: "", number: "",neighbourhood: "", city: "", state: "",complement: "" })
    const [isLoading, setIsLoading] = useState(false)
  
    const onSubmitForm = (event) => {
      event.preventDefault()
      AddAdress(form, clear, history, setRightButtonText, setIsLoading)
  
      }

 
  return (
    <form onSubmit={onSubmitForm}>
    <div>
    
          <h3/><b>CADASTRO DE ENDEREÇO</b>
      <div>
        <TextField
          value={form.street}
          name={"street"}
          onChange={onChange}
          label={"Rua / Avenida"}
          variant={"outlined"}
          fullWidth
          required
          autoFocus
          margin={"normal"}
        />
        <TextField
          value={form.number}
          name={"number"}
          onChange={onChange}
          label={"Número"}
          variant={"outlined"}
          type={"number"}
          fullWidth
          required
          margin={"normal"}
        />
          <TextField
          value={form.neighbourhood}
          name={"neighbourhood"}
          onChange={onChange}
          label={"Bairro"}
          variant={"outlined"}
          type={"text"}
          fullWidth
          required
          margin={"normal"}
        />
        <TextField
          value={form.city}
          name={"city"}
          onChange={onChange}
          label={"Cidade"}
          variant={"outlined"}
          type={"text"}
          fullWidth
          required
          margin={"normal"}
        />
             <TextField
          value={form.state}
          name={"state"}
          onChange={onChange}
          label={"Estado"}
          variant={"outlined"}
          type={"text"}
          fullWidth
          required
          margin={"normal"}
        />


          <TextField
          value={form.complement}
          name={"complement"}
          onChange={onChange}
          label={"Complemento"}
          variant={"outlined"}
          type={"text"}
          fullWidth
          margin={"normal"}
        />


      </div>
      <Button
        color={"primary"}
        variant={"contained"}
        type={"submit"}
        fullWidth
      >
        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Salvar</>}
      </Button>
      </div>
  </form>





)
}

export default CadastroEnderecoForm
