import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import foto from './img/foto.jpg'

export const ContainerTitle = styled.div`
display: flex;
flex-direction: row;
height: 40px;
border: 0px 1px 1px 1px solid black;
p{
    font-family: 'Roboto-Regular'; 
    font-size: 16px;
    color: #e86e5a;

}



`

export const ContainerProdutos = styled.div`
display: flex;
flex-direction: column;
/* align-items: center;
justify-content: center; */
margin: 10px;
`


export const ContainerRappi4 = styled.div`
display: flex;
flex-direction: row;
height: 8vh;
text-align: center;
margin: 7px;
box-shadow: 0px 1px 1px  rgba(0, 0, 0, 0.29);

 `

export const ContainerBusca = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

input{
  width: 50vw;
  height: 6vh;
  border: 1px solid #b8b8b8;
  outline: none;
}
 
`

export const Footer = styled.div`
margin: 16px;
display: flex;
height: 5vh;

        z-index: 1000; 
img{
  width: 27px;
  height: 27px;
}

     
`

export const ContainerButtonFooter = styled.div`


div{
  display: flex;
align-items: center;
justify-content: center;
}
`
export const ContainerRosa = styled.div`
display: flex;
background-color: #e86e5a;
height: 100px;
margin: 10px;

`

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

  export default function MediaCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
          image={foto}
          
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
                <ContainerTitle>
                <p>Vinil butantã</p>
              
                </ContainerTitle>
            
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>50 - 60 min</p>
              <p>Frete R$6,00</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        
        </CardActions>
      </Card>
    );
  }



