import React from 'react'
import { TextField } from '@material-ui/core'
import { ContainerPrincipal } from './styled'
import { ContainerRestaurante } from './styled'
import CardRestaurante from './CardRestaurante'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { BottomNavigation } from '@material-ui/core'
import { BottomNavigationAction } from '@material-ui/core'
import { CardEstilizado } from './styled'
import { Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

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

      <CardEstilizado>
      <BottomNavigation >
        <BottomNavigationAction icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction icon={<ShoppingCartOutlinedIcon />} />
        <BottomNavigationAction icon={<AccountCircleOutlinedIcon />} />
      </BottomNavigation>   
    </CardEstilizado>

    </ContainerPrincipal>
  )
}

export default Home