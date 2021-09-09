import React from 'react'
import {CardDehistoricoDePedidos,ContainerDoEndereço,DataPedido,EndereçoCadastrado,LocalCadastro,NomeRestaurante,SeguraPerfil,Title,TitleHistórico,Topo,USerEmail,UserName,UserNumber,ValorPedido,TitleVazio,LinhaDivisoria,Icons
} from './Styled'
import CreateIcon from '@material-ui/icons/Create';



const CardPerfil = ({endereco,usuario,history}) => {
console.log("chegou aqui",history)

const renderHistory = () => {
  if (history.length === 0) {
   return <TitleVazio>
     Você não realizou nenhum pedido!
     </TitleVazio>
  }
  return   history?.map(item=>{
    return(   
    <CardDehistoricoDePedidos key={item.createdAt}>
    <NomeRestaurante>{item.restaurantName}</NomeRestaurante>
    <DataPedido></DataPedido>
    <ValorPedido>Preço Total:R${item.totalPrice}</ValorPedido>
  </CardDehistoricoDePedidos>   
  )
  })
}

  return(
  <div>
    <Topo>
    <SeguraPerfil>
      <Title>Meu perfil</Title>
    </SeguraPerfil>
  </Topo>
  <UserName>{usuario.name}</UserName>
  <USerEmail>{usuario.email}</USerEmail>
  <UserNumber>{usuario.cpf}</UserNumber>

  <ContainerDoEndereço>
    <EndereçoCadastrado>Endereço cadastrado</EndereçoCadastrado>
    <LocalCadastro>{endereco.address}</LocalCadastro><Icons> <CreateIcon/> </Icons>
    
  </ContainerDoEndereço>

  <TitleHistórico>Hisorico Usuario</TitleHistórico>
  <LinhaDivisoria/>
  
  {renderHistory()}


  </div>
  )
}

export default CardPerfil;