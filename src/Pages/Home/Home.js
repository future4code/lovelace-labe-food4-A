import React from 'react'
import { TextField } from '@material-ui/core'
import { ContainerPrincipal } from './styled'
import { ContainerRestaurante } from './styled'
import CardRestaurante from './CardRestaurante'
import { Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import BarraDeBotoes from '../../components/BarraDeBotoesInferior/BarraDeBotoes'

const Home = () => {

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

      <Typography gutterBottom variant="h6">
          Burguer....Asiatica....Massas
      </Typography>

      <CardRestaurante />

     <BarraDeBotoes/>

    </ContainerPrincipal>
  )
}

export default Home