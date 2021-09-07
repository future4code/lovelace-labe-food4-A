import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { BottomNavigation } from '@material-ui/core'
import { BottomNavigationAction } from '@material-ui/core'
import { CardEstilizado } from './styled'

const BarraDeBotoes=()=>{

return(
  <CardEstilizado>
  <BottomNavigation >
    <BottomNavigationAction icon={<HomeOutlinedIcon />} />
    <BottomNavigationAction icon={<ShoppingCartOutlinedIcon />} />
    <BottomNavigationAction icon={<AccountCircleOutlinedIcon />} />
  </BottomNavigation>   
</CardEstilizado>

)
}
export default BarraDeBotoes