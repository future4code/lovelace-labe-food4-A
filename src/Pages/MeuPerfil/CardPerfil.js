import React from 'react'
import {
  CardDehistoricoDePedidos,
  ContainerDoEndereço,
  DataPedido,
  EndereçoCadastrado,
  LocalCadastro,
  NomeRestaurante,
  SeguraPerfil,
  Title,
  TitleHistórico,
  Topo,
  USerEmail,
  UserName,
  UserNumber,
  ValorPedido
} from './Styled'

const CardPerfil = ({endereco,usuario,history}) => {
console.log("chegou aqui",history)


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
    <LocalCadastro>{endereco.address}</LocalCadastro>
  </ContainerDoEndereço>

  <TitleHistórico>Hisorico Usuario</TitleHistórico>
  
  {history?.map(item=>{
  return(   
  <CardDehistoricoDePedidos key={item.createdAt}>
  <NomeRestaurante>{item.restaurantName}</NomeRestaurante>
  <DataPedido></DataPedido>
  <ValorPedido>Preço Total:R${item.totalPrice}</ValorPedido>
</CardDehistoricoDePedidos>   )
})}

  </div>
  )
}

export default CardPerfil;