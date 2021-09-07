import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ListItem } from '@material-ui/core';
import Back_Icon from '../../assets/back.png'
import {Header} from './style'
import {DescribeContainer} from './style'
import Restaurante from '../../assets/restaurante.png'
import Principais from '../../assets/principais.png'
import {MenuContainer} from './style'
//import {GetDetail} from "../../services/user"
import { useEffect } from 'react';
import { BASE_URL } from '../../constants/urls';

const Resultado = () => {
  const [local,setLocal] = useState([])
  

  const GetDetail =()=>{

    const token = localStorage.getItem("token")
    axios.get(`${BASE_URL}/restaurants/1`, { 
      headers: {
      auth: token
      },
      })

      .then((res) => {
          console.log("funfou olha",res)
          
          setLocal(res.data.restaurant)

    })
    .catch((err) => {
        console.log("deu b.o",err)
        
    })

  }

  


  useEffect(() => {
    GetDetail()
  },[]);




  
     const restaurante =  [local].map((item) => {
       return (
        <DescribeContainer key={item.id}>

         <img src ={item.logoUrl}/>
         <h4>{item.name}</h4>
         <p>{item.category}</p>
         <div>
         <p>{item.deliveryTime} min</p>
         <p>Frete R$ {item.shipping},00</p> 
         </div>
         <p>{item.address}</p>

         </DescribeContainer>
         )
     });

    


  
  return(

    <div> 



      

      <Header>
      <img src={Back_Icon}/> <h3>Resultado</h3>
      </Header>


      {restaurante}
      


      <div>
          <h3>Principais</h3>
          <hr/>

        </div>

      <MenuContainer>
        
            <img src={Principais} />

            <div>
              <p>Nome Lanche</p>
              <p>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</p>
              <p>R$ Preço</p>
              <button>Adicionar/Remover</button>
            </div>

      </MenuContainer>


      <div>
          <h3>Acompanhamentos</h3>
          <hr/>
        </div>


        <MenuContainer>
        
        <img src={Principais} />

        <div>
          <p>Nome Acompanahmento</p>
          <p>Porção de fritas temperada com páprica e queijo derretido.</p>
          <p>R$ Preço</p>
          <button>Adicionar/Remover</button>
        </div>

        </MenuContainer>


    </div>
  )
}

export default Resultado