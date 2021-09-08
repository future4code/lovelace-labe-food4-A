import React, { useState } from 'react'
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
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { useEffect } from 'react'
import { FooterCarrinhoVazio } from './styled'

const Carrinho = () => {

  const [restaurante,setRestaurante] = useState([])

  const pegaRestaurantes = () => {
    const token = localStorage.getItem("token")
    axios.get(`${BASE_URL}/restaurants/4`, { 
      headers: {
        auth: token
      }
    })

    .then((res) => {
      setRestaurante (res.data.restaurant)
    })

    .catch((err) => {
       console.log(err)
    })
    }

   console.log("foi?",restaurante)
    useEffect(() => {
      pegaRestaurantes()
    },[])


    const restaurantes =  [restaurante].map((item) => {
      return (
        <div key={item.id}>
        <ContainerProdutos>
        <div><p>Vinil butantã</p></div>
        <div><p>Restaurante:</p>{item.name}</div>
        <div><p>Tempo de entrega:</p>{item.deliveryTime}<p>min</p></div>
          <img src={item.photoUrl}/>
        </ContainerProdutos>
        <ContainerProdutos>
        <div><p>Restaurante:</p>{item.name}</div>
        <div><p>Restaurante:</p>{item.name}</div>

        </ContainerProdutos>

        <ContainerProdutos>
        <div><p>Restaurante:</p>{item.name}</div>
        <div><p>Restaurante:</p>{item.name}</div>

        </ContainerProdutos>
        {/* <ContainerRosa> */}
      <p>Pedido em andamento</p>
      <h5>{item.name}</h5>
      {/* <h5>Subtotal R${item.products.price}</h5> */}

       {/* </ContainerRosa>    */}
        </div>
        )
    });
  return(
    <div> 
       <ContainerRappi4>
        <p>Rappi4</p>
        {restaurantes}
      </ContainerRappi4>
     
      {/* <ContainerBusca>
       <input
       placeholder={"Restaurante"}
       />
     
     </ContainerBusca> 
     */}

     
    <FooterCarrinhoVazio>
      <ContainerButtonFooter>
        <div>
      <button> <HomeIcon /> </button>
     <button> <ShoppingCartIcon /> </button>
     <button> <PersonIcon /> </button>
     </div>
     </ContainerButtonFooter>
    </FooterCarrinhoVazio>
  
    </div>
  )
}

export default Carrinho
