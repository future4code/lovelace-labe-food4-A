import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ContainerRestaurante = styled.div`
width: 90vw;
margin: 20px;
`
export const CardEstilizado = styled(Card)`
width: 90vw;
margin: 20px;
`
export const CardCategoria= styled.div`
display: flex;
overflow: auto;
width: 300px;

text-align: center;
`

export const Img = styled.img`
width: 90vw;
`
export const ContainerDetalhesRestaurante = styled.div`
display: flex;
justify-content: space-between;
`
export const ContainerPrincipalCategoria = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 20px;
`
export const ContainerLogoEbotaoVoltar = styled.div`
margin-top: 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`
export const Scrow = styled.div`
margin: 5px;
`

