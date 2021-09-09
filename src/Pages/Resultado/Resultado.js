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




//container/conteúdo/configurações do modal
const MyComponent = () => {
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
          <h5>Selecione a quantidade desejada</h5>



          <TextField
          
          select
          
          
          // name={"email"}
                        // value={form.email}
                        // onChange={onChange}
                        // label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        // required
                        // type={"email"}
          //onChange={handleChange}
         
          //helperText="Please select your currency"

          
        >
          
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>



          </TextField>




        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
          >
          ADICIONAR AO CARRINHO
        </Button>



      </Modal>
      </EstilzaModal>
  );
};





const Resultado = () => {
  
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