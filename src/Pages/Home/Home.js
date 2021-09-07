import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { ContainerPrincipal } from './styled'
import { ContainerRestaurante } from './styled'
import { Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import BarraDeBotoes from '../../components/BarraDeBotoesInferior/BarraDeBotoes'
import { useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import { CardEstilizado, CardEstilizado2 } from './styled';
import { Img } from './styled'
import { ContainerDetalhesRestaurante } from './styled';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { goToAsiaticas } from '../../Routes/coordinator'
import { useHistory } from 'react-router'



const Home = () => {

  const [restaurants, setRestaurants] = useState([])

  const history = useHistory()

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

    const listaNaTela = restaurants.map((res) => {
      return <CardEstilizado>
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
    });

    const categorias = restaurants.map ((res) => {
      return<Button>{res.category}</Button>
    })

  return(

  <ContainerPrincipal>

      <Typography gutterBottom variant="h4" component="h2">
        Rappi4
      </Typography>

    <ContainerRestaurante>
        <TextField 
          name={""}
          value={""}
          onChange={""}
          label={<SearchIcon></SearchIcon>}
          placeholder={"Restaurantes"}
          variant={"outlined"}
          fullWidth
          margin ={'normal'}
          required
          type={"text"}
        /> 
    </ContainerRestaurante>
    
    <CardEstilizado2> 
    {categorias}
    </CardEstilizado2>

    {listaNaTela}

    <BarraDeBotoes/> 

  </ContainerPrincipal>
  )
}

export default Home