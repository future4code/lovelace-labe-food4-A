import styled from 'styled-components'

export const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 20px;
background-color: whitesmoke;


img{
    width: 3vw;
    height:3vh;
    
}
`;



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


export const MenuContainer = styled.div`
display: flex;
flex-direction:row;
height: 112px;
width: 95%;
background-color: whitesmoke;
margin-top:10px;
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




export const Scrow = styled.div`
overflow:auto;
height: 280px;
`;



export const PutCenter = styled.div`
display: flex;
justify-content: center;
`;
