import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { CardCategoria, ContainerLogoEbotaoVoltar, ContainerPrincipal } from './styled'
import { ContainerRestaurante } from './styled'
import { Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import BarraDeBotoes from '../../components/BarraDeBotoesInferior/BarraDeBotoes'
import { useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import { CardEstilizado} from './styled';
import { Img } from './styled'
import { ContainerDetalhesRestaurante } from './styled';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router'
import { goToCategorias } from '../../Routes/coordinator'
import { goToFiltroRestaurante } from '../../Routes/coordinator'
import { Scrow } from './styled'

const Home = () => {

  //parametros para pegar o id dos cards e direcionar para página de detalhe
  const goToRestaurante = (id) => {
    history.push (`/resultado/${id}`)
}

  const [restaurants, setRestaurants] = useState([])
  const [pedidos, setPedidos] = useState([])

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

    const getActiveOrder = () => {
      const token = localStorage.getItem("token")
      axios.get(`${BASE_URL}/active-order`, { 
        headers: {
          auth: token
        }
      })
  
      .then((res) => {
        setPedidos (res.data)
        console.log ('ordens', res.data)
      })
  
      .catch((err) => {
         console.log(err)
      })
      }

      useEffect(() => {
        getRestaurants()
        getActiveOrder()
      }, [])

    const listaNaTela = restaurants.map((res) => {
      return <CardEstilizado key={res.id} onClick={()=>goToRestaurante(res.id)}>
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
      return <Scrow>
      <Button key={res.id} onClick={() => goToCategorias(history, res.id)}>{res.category}</Button>
      </Scrow>  
    })
   
  return(

  <ContainerPrincipal>
      <ContainerLogoEbotaoVoltar>
      <Typography gutterBottom variant="h5" component="p">
        Rappi4
      </Typography>
      </ContainerLogoEbotaoVoltar>
   
    <ContainerRestaurante>
      <Button onClick={(() => goToFiltroRestaurante(history))}
      fullWidth
      variant={"outlined"}
      >
      <SearchIcon></SearchIcon> Restaurantes        
      </Button>
    </ContainerRestaurante>
    
    <CardCategoria> 
      {categorias}
    </CardCategoria>

    {listaNaTela}

    <BarraDeBotoes/> 

  </ContainerPrincipal>
  )
}

export default Home