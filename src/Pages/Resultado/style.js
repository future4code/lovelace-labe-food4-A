import styled from 'styled-components'

//cabeçalho
export const Header = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
height: 30px;
background-color: whitesmoke;

h3{
    margin-left:110px;
    
}

img{
    width: 23px;
    height:24px;
    margin-left:20px;
    
}
`;


//Estilização do container de informações do restaurante
export const DescribeContainer = styled.div`
display: flex;
flex-direction:column;
height: 240px;
width: 92%;
border-radius:20px;
background-color: whitesmoke;
margin-top: 10px;


div{
    display: flex;
    flex-direction:row;
}

h4{
    margin-right:40px;
    margin-bottom:0.5px;
    margin-top:8px;
    color:red;
    margin-left: 5px;
    
}

p{
    margin-right:40px;
    margin-bottom:0.5px;
    margin-top:8px;
    padding-left: 5px;
    
}

img{
    width: 100%;
    height:50%;
    border-radius:20px 20px 0 0;
    
}
`;



//Estilização do container dos produtos
export const MenuContainer = styled.div`
display: flex;
flex-direction:row;
height: 112px;
width: 95%;
background-color: whitesmoke;
//margin-top:5px;
margin-bottom:15px;
border-radius:10px;

div{
    display: flex;
    flex-direction:column;
    margin-left:20px;
}


h4{
    margin-right:40px;
    margin-bottom:0.5px;
    margin-top:2px;
    color:red
    
}


p{
    margin-right:40px;
    margin-bottom:0.5px;
    margin-top:2px;
    
}

img{
    width: 30%;
    height:112px;
    border-radius:20px 0 0 20px  ;
    
}


button{
    width: 40%;
    float: right;
}
`;



//Estilização para criar um scrow em um container
export const Scrow = styled.div`
overflow:auto;
height: 280px;
`;


//Estilização para alinhar elementos ao centro da tela
export const PutCenter = styled.div`
display: flex;
justify-content: center;
`;


export const EstilzaModal = styled.div`

height: 100vh;
//verificar o pq os estilos não aplicam
`;