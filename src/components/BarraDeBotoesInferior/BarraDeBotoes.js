import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { BottomNavigation } from '@material-ui/core'
import { BottomNavigationAction } from '@material-ui/core'
import { CardEstilizado } from './styled'
import { goToCart } from '../../Routes/coordinator';
import { useHistory } from 'react-router';
import { goToPerfil } from '../../Routes/coordinator';
import { goToRecipesList } from '../../Routes/coordinator';

const BarraDeBotoes=()=>{

  const history = useHistory()

return(
  <CardEstilizado>
  <BottomNavigation >
    <BottomNavigationAction onClick={()=> goToRecipesList(history)}icon={<HomeOutlinedIcon />} />
    <BottomNavigationAction onClick={() => goToCart(history)} icon={<ShoppingCartOutlinedIcon />} />
    <BottomNavigationAction onClick={()=> goToPerfil(history)}icon={<AccountCircleOutlinedIcon />} />
  </BottomNavigation>   
</CardEstilizado>

)
}
export default BarraDeBotoes