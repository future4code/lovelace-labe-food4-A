import React from 'react'
import { ContainerPrincipal } from '../styled'
import { ContainerLogoEbotaoVoltar } from '../styled'
import { Typography } from '@material-ui/core'
import BarraDeBotoes from '../../../components/BarraDeBotoesInferior/BarraDeBotoes'
import { Button } from '@material-ui/core'
import { goToRecipesList } from '../../../Routes/coordinator'
import { useHistory } from 'react-router'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../../constants/urls'
import { CardEstilizado } from '../styled'
import { CardActionArea } from '@material-ui/core'
import { Img } from '../styled'
import { CardContent } from '@material-ui/core'
import { ContainerDetalhesRestaurante } from '../styled'
import { TextField } from '@material-ui/core'
import { InputContainer } from './styled'

const FiltroRestaurante = () => {

    const history = useHistory()

    const [restaurants, setRestaurants] = useState([])
    const [inputBuscar, setInputBuscar] = useState("")

    const onChangeBuscar = (event) => {
      setInputBuscar (event.target.value)
    }

  
    const getRestaurants =()=>{
      const token = localStorage.getItem("token")
      axios.get(`${BASE_URL}/restaurants`, { 
        headers: {
          auth: token
        }
    })
  
    .then((res) => {
      setRestaurants (res.data.restaurants)
      console.log ('chegou', res.data.restaurants)
    })
  
    .catch((err) => {
         console.log(err)
    })
    }
  
    useEffect(() => {
    getRestaurants()
    }, [])

    console.log (inputBuscar)

    const listaFiltrada = restaurants.filter((res) => {
      if(res.name.includes(inputBuscar)) {
        return true
      } else {
        return false
      }
    })

    const listaNaTela =  () => {
      if (listaFiltrada.length > 1) {
        return <Typography variant="body2" color="textSecondary" component="p">
        Encontre o seu Restaurante
      </Typography> 
      }
       return listaFiltrada.map ((res) => {
        return<CardEstilizado>
          <CardActionArea>
            <Img src={res.logoUrl} />
            <CardContent>
              <Typography color ="primary" gutterBottom variant="h5" component="h2">
                {res.name}
              </Typography>
              <ContainerDetalhesRestaurante>
              <Typography variant="body2" color="textSecondary" component="p">
                {res.deliveryTime} mim
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Frete R$ {res.shipping}
              </Typography>
              </ContainerDetalhesRestaurante>
            </CardContent>
          </CardActionArea>
        </CardEstilizado> 
    }) 
    }


    return (
    <div>    
    <ContainerLogoEbotaoVoltar>
        <Button onClick={() => goToRecipesList(history)}><ArrowBackIosIcon></ArrowBackIosIcon></Button>
        <Typography gutterBottom variant="h5" component="p">
        Buscar
        </Typography>
    </ContainerLogoEbotaoVoltar>

    <InputContainer>
      <TextField 
        value={inputBuscar}
        onChange={onChangeBuscar}
        label={"Buscar"}
        variant={"outlined"}
        fullWidth
        margin ={'normal'}
        required
      /> 
    </InputContainer>
    
    <ContainerPrincipal>

      {listaNaTela()}
      <BarraDeBotoes/> 

    </ContainerPrincipal>
    </div>
)   
}

export default FiltroRestaurante