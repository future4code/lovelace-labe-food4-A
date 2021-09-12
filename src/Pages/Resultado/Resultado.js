//importe das funcionalidades CustomHooks
import React, { useState } from 'react'
import { useEffect } from 'react';

//importe de requisições e urls
import axios from 'axios'
import { BASE_URL } from '../../constants/urls';

//importe de imagens/icones
import Back_Icon from '../../assets/back.png'

//Importe das estilizações
import{Scrow } from './style'
import {PutCenter} from './style'
import {Header} from './style'
import {DescribeContainer} from './style'
import { MenuContainer } from './style';
import { EstilzaModal } from './style';

//importe de rotas e navegação
import { goToRecipesList } from '../../Routes/coordinator';
import { useHistory } from 'react-router-dom'

//importe de biblioteca de estilização
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';


//importe do modal
import 'react-simple-hook-modal/dist/styles.css';
import {ModalProvider,Modal,useModal,ModalTransition,} from 'react-simple-hook-modal';


//importe teste para pgar id
import { useParams } from 'react-router-dom';

import useProtectedPage from '../../hooks/useProtectedPage';

//teste dqui p baixo
import Carrinho from '../Carrinho/Carrinho';
import useForm from "../../hooks/useform"
import CircularProgress from '@material-ui/core/CircularProgress'


import { goToCart } from '../../Routes/coordinator';




//container/conteúdo/configurações do modal
const MyComponent = (setRightButtonText) => {

    //parametros para o formulário
  const history = useHistory()
    const [form, onChange, clear] = useForm({ id: "", quantity: ""})
    const [isLoading, setIsLoading] = useState(false)
  
    //parametros de envio formulario
    const onSubmitForm = (event) => {
      event.preventDefault()
      Carrinho(form, clear, history, setRightButtonText, setIsLoading)
  
      }
      
      
      //lógica do modal
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <EstilzaModal>
      <button onClick={openModal}>Adicionar</button>
      <Modal
          id="any-unique-identifier"
          isOpen={isModalOpen}
          transition={ModalTransition.SCALE}
        >
          <button onClick={closeModal}>X</button>
          

      {/* //formulário no modal */}
          <form onSubmit={onSubmitForm}>
        <div>
        
              <b>SELECIONE A QUANTIDADE DESEJADA</b>
          <div>
            
        <TextField
          id="standard-select-currency"
          value={form.quantity}
          name={"quantity"}
          type={"number"}
          select
          label="Produtos"
          //value={}}
          fullWidth
          variant={"outlined"}
          onChange={onChange}
          margin={"normal"}
          required
          helperText="Adicione a quantidade"
        >
          <option value="0">1</option>
          <option value="0">2</option>
          <option value="0">3</option>
          <option value="0">4</option>
          <option value="0">5</option>
        </TextField>

</div>
          <Button
            color={"primary"}
            variant={"contained"}
            type={"submit"}
            onClick={ () => goToCart(history)}
            fullWidth
          >
            
            {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar ao carrinho</>}
          </Button>
          </div>
      </form>



      </Modal>
      </EstilzaModal>
  );
};





const Resultado = () => {

  useProtectedPage()
  
  //teste
  const params = useParams()
  const history = useHistory()
  const [local,setLocal] = useState([])
  const [produtos,setProdutos] = useState([])
  

//requisição do endpoint para pegar as informações de um restaurante específico
  const GetDetail =()=>{
    const token = localStorage.getItem("token")
    axios.get(`${BASE_URL}/restaurants/${params.id}`, { 
      headers: {
      auth: token
      },
      })
      .then((res) => {
          console.log("resultado GET DETAIL",res)
          
          setLocal(res.data.restaurant)
          setProdutos(res.data.restaurant.products)
    })
    .catch((err) => {
        console.log("deu b.o",err)
        
    })
  }

  

  //Carregando a requisição de detalhes do restaurante antes da tela ser montada
  useEffect(() => {
    GetDetail()
  },[]);




  //Map das informações gerais do restaurante
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

     
     //Map das informações dos produtos do restaurante
     const Principal =  produtos.map((item) => {
      return (
       <MenuContainer key={item.id}>

          <img src ={item.photoUrl}/>
          
          <div>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p><b>R$ {item.price}</b></p> 

          {/*  Modal para adicionar item no carrinho - chamando o container */}
          <MyComponent/>
          
          </div>

        </MenuContainer>
      )
    });



                    //FILTRO - CATEGORIA ACOMPANHAMENTO DOS PRODUTOS

//fazendo um filtro no estado produtos para identificar o item de categoria "Acompanhamento"
  const filtroAcompanhamento = produtos.filter(item => (item.category == "Acompanhamento"));
  

//fazendo um map do resultado que o filter encontrou no array
  const acompanhamento =  filtroAcompanhamento.map((item) => {
    return (
     <MenuContainer key={item.id}>

        <img src ={item.photoUrl}/>
        <div>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p><b>R$ {item.price}</b></p> 
        
        {/*  Modal para adicionar item no carrinho - chamando o container */}
        <MyComponent/>

        </div>

      </MenuContainer>
    )
  });


  return(

    <div>
      
          
      <ModalProvider>
    
      <Header> {/* {tag de estilização} */}
        <img onClick={() => goToRecipesList(history)} src={Back_Icon}/> <h3>Resultado</h3>
      </Header>

      
      <PutCenter> {/* {Tag de estilização} */}
      {restaurante}
      </PutCenter>
     

        <div>
          <h3>Principais</h3> {/* {Título de Sessão} */}
          <hr/>
        </div>


        <PutCenter> {/* {Tags de estilização} */}
          <Scrow>
          {Principal} {/* {Renderização do map Produtos} */}
          </Scrow>
        </PutCenter>


      

      <div>
          <h3>Acompanhamentos</h3> {/* {Título de Sessão} */}
          <hr/>
        </div>


        

        {/* Renderização dos itens de  acompanhamento */}
        {acompanhamento}

        
        
        
          </ModalProvider>

    </div>
  )
}

export default Resultado