import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ListItem } from '@material-ui/core';
import Back_Icon from '../../assets/back.png'
import {Header} from './style'
import {DescribeContainer} from './style'
import Restaurante from '../../assets/restaurante.png'
import Principais from '../../assets/principais.png'
import {MenuContainer} from './style'

const Resultado = () => {
  return(
    <div> 

      <Header>
      <img src={Back_Icon}/> <h3>Resultado</h3>
      </Header>

      <DescribeContainer>

        <img src={Restaurante}/>
        <p> Nome restaurante </p>
        <p> Ramo </p>
        <div> 
        <p> Tempo Estimado </p>
        <p> frete </p> 
        </div>
        <p> Endereço </p>
      </DescribeContainer>



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