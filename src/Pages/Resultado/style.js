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
background-color: whitesmoke;

div{
    display: flex;
    flex-direction:row;
}

h4{
    margin-right:40px;
    margin-bottom:0.5px;
    margin-top:8px;
    color:red
    
}

p{
    margin-right:40px;
    margin-bottom:0.5px;
    margin-top:8px;
    
}

img{
    width: 100%;
    height:50%;
    
}
`;


export const MenuContainer = styled.div`
display: flex;
flex-direction:row;
height: 112px;
background-color: whitesmoke;

div{
    display: flex;
    flex-direction:column;
    margin-left:20px;
}


p{
    margin-right:40px;
    margin-bottom:0.5px;
    margin-top:8px;
    
}

img{
    width: 30%;
    height:112px;
    
}
`;