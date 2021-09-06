import React from 'react'
import Styled from "styled-components"

const Geral=Styled.div`
width:100%;
height:100%;
`

const Topo=Styled.div`
width: 360px;
height: 64px;
margin: 0 0 16px;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
background-color: #fff;
` 
const SeguraPerfil=Styled.div`
width: 175px;
height: 44px;
margin: 20px 92px 0 93px;
padding: 13px 53.5px 12px;
` 

const Title=Styled.h3`
width: 68px;
height: 19px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
text-align: center;
color:#000000;
`
const UserName=Styled.h2`
width: 328px;
height: 18px;
margin: 16px 16px 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
`
const USerEmail=Styled.h2`
width: 328px;
height: 18px;
margin: 2px 16px 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
`
const UserNumber=Styled.h2`
width: 328px;
height: 18px;
margin: 8px 16px 16px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
`
const ContainerDoEndereço=Styled.div`
width: 360px;
height: 76px;
margin: 16px 0;
padding: 16px;
background-color: #eee;
`
const EndereçoCadastrado=Styled.h2`
width: 328px;
height: 18px;
margin: 0 0 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #b8b8b8;
`

const LocalCadastro=Styled.div`
width: 328px;
height: 18px;
margin: 8px 0 0;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
`

const TitleHistórico=Styled.div`
width: 328px;
height: 18px;
margin: 16px 16px 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
`
const CardDehistoricoDePedidos=Styled.div`
  width: 328px;
  height: 102px;
  padding: 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`

const NomeRestaurante=Styled.div`
width: 296px;
height: 18px;
margin: 0 0 9px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: var(--dark-peach);
`
const DataPedido=Styled.div`
width: 296px;
height: 18px;
margin: 9px 0 7px;
font-family: Roboto;
font-size: 12px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.29px;
color: #000;
`

const ValorPedido=Styled.div`
width: 296px;
height: 18px;
margin: 7px 0 0;
font-family: Roboto;
font-size: 16px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
`

const MeuPerfil = () => {
  return(
    <Geral>
      <Topo>
        <SeguraPerfil>
          <Title>Meu perfil</Title>
        </SeguraPerfil>
       </Topo> 
      <UserName>Nome Do Usuario</UserName>
      <USerEmail>Email Usuario</USerEmail>
      <UserNumber>000.0000.0000..0</UserNumber>

      <ContainerDoEndereço>
        <EndereçoCadastrado>Endereço cadastrado</EndereçoCadastrado>
         <LocalCadastro>Endereço do usuario</LocalCadastro>
      </ContainerDoEndereço>

    <TitleHistórico>Hisorico Usuario</TitleHistórico>
     <CardDehistoricoDePedidos>
      <NomeRestaurante>Nome Restaurante</NomeRestaurante>
     <DataPedido>30 de setembro</DataPedido>
     <ValorPedido>1000,00</ValorPedido>
     </CardDehistoricoDePedidos>
     <CardDehistoricoDePedidos>
      <NomeRestaurante>Nome Restaurante</NomeRestaurante>
     <DataPedido>30 de setembro</DataPedido>
     <ValorPedido>1000,00</ValorPedido>
     </CardDehistoricoDePedidos>
     
     
    </Geral>
  )
}

export default MeuPerfil