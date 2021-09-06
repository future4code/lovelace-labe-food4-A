import React from 'react'
import { ContainerBusca } from './styled'
import MediaCard from './styled'
import { ContainerRappi4 } from './styled'
import search from './img/search.png'
import avatar from './img/avatar.png' 
import shop from './img/shop.png'
import home from './img/homepage.png'
import { Footer } from './styled'
import { ContainerRosa } from './styled'
import { ContainerProdutos } from './styled'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { ContainerButtonFooter } from './styled'

const Carrinho = () => {
  return(
    <div> 
       <ContainerRappi4>
        <p>Rappi4</p>
           
      </ContainerRappi4>
     
      <ContainerBusca>
       <input
       placeholder={"Restaurante"}
       />
     
     </ContainerBusca> 
    
     <ContainerProdutos>
     <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
     </ContainerProdutos>
     
      <ContainerRosa/>
    <Footer>
      <ContainerButtonFooter>
        <div>
      <button> <HomeIcon /> </button>
     <button> <ShoppingCartIcon /> </button>
     <button> <PersonIcon /> </button>
     </div>
     </ContainerButtonFooter>
    </Footer>
    </div>
  )
}

export default Carrinho