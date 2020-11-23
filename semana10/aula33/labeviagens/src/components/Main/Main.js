import React from 'react';
import styled from 'styled-components';
import LabeXX from '../Images/LabeXX.png';

const StyleMain = styled.div`
display: flex;
flex-direction: row;
height: 50px;
padding: 5px;
background-color: #D2B4DE;
width: auto;
`

const LogoMain = styled.img`
max-height: 45px;
`

const ButtonContainerMain = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
gap: 30px;
right: 20em;
margin-left: 44em;
`

const ButtomsMain = styled.div`
display: flex;
margin: 0px;
background-color: #BB9EC7;
border: 1px solid #BB9EC7;
font-family: 'Roboto', sans-serif, bold;
justify-content: center;
align-items: center;
font-size: 14px;
border-radius: 6px;
height: 25px;
width: 100px;
padding: 0px;

:hover {
    background-color: #E4C8EF;
}
`

function Main() {
    return (
        <StyleMain>
          <div>
              <LogoMain src={LabeXX} alt='labeX'/>
          </div>

          <ButtonContainerMain>
          <ButtomsMain>Inscrições</ButtomsMain>
          <ButtomsMain>Sobre nós</ButtomsMain>
          <ButtomsMain>Login</ButtomsMain>
          </ButtonContainerMain>

          </StyleMain>
    );
  }
  
  export default Main;