import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../../constants/urls'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { ContainerLogoEbotaoVoltar } from './styled'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { CardContent, Typography } from '@material-ui/core'
import { goToRecipesList } from '../../../Routes/coordinator'
import { Button } from '@material-ui/core'
import { ContainerPrincipalCategoria } from './styled'
import { CardEstilizado } from './styled'
import { CardActionArea } from '@material-ui/core'
import { Img } from './styled'
import { ContainerDetalhesRestaurante } from '../styled'


const Categorias = () => {

    const history = useHistory()

    const [restaurants, setRestaurants] = useState([])
    const params = useParams()

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

        const listaRestaurante = restaurants.filter ((res) => {
            return res.id === params.id
        })
        
        console.log ('resultado', listaRestaurante)

    return<div>
    <ContainerLogoEbotaoVoltar>
    <Button onClick={() => goToRecipesList(history)}><ArrowBackIosIcon></ArrowBackIosIcon></Button>
    <Typography gutterBottom variant="h5" component="p">
        Rappi4
    </Typography>
    </ContainerLogoEbotaoVoltar>
    <ContainerPrincipalCategoria>
        <CardEstilizado>
      <CardActionArea>
        <Img src={listaRestaurante && listaRestaurante[0] && listaRestaurante[0].logoUrl}/>
        <CardContent>
          <Typography color ="primary" gutterBottom variant="h5" component="h2">
          {listaRestaurante && listaRestaurante[0] && listaRestaurante[0].name}
          </Typography>
          <ContainerDetalhesRestaurante>
          <Typography variant="body2" color="textSecondary" component="p">
          {listaRestaurante && listaRestaurante[0] && listaRestaurante[0].deliveryTime} mim
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Frete R$ {listaRestaurante && listaRestaurante[0] && listaRestaurante[0].shipping}
          </Typography>
          </ContainerDetalhesRestaurante>
          <Typography variant="body2" color="textSecondary" component="p">
            {listaRestaurante && listaRestaurante[0] && listaRestaurante[0].description}
        </Typography>
        </CardContent>
      </CardActionArea>
    </CardEstilizado>     
    </ContainerPrincipalCategoria>
    </div>
}

export default Categorias