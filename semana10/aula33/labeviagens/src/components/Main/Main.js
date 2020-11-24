import React from 'react';
import styled from 'styled-components';
import LabeXX from '../Images/LabeXX.png';

const StyleMain = styled.div`
display: flex;
flex-direction: row;
height: 50px;
padding: 5px;
background-color: #ACB5D6;
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
margin-left: 30em;
`

const ButtomsMain = styled.div`
display: flex;
margin: 0px;
background-color: #7887BE;
border: 1px solid #43559A;
font-family: 'Roboto', sans-serif, bold;
justify-content: center;
align-items: center;
font-size: 14px;
border-radius: 6px;
height: 25px;
width: 100px;
padding: 0px;

:hover {
    background-color: #ACB5D6;
}
`

function Main() {
    return (
        <StyleMain>
          <div>
              <LogoMain src={LabeXX} alt='labeX'/>
          </div>

          <ButtonContainerMain>
          <ButtomsMain>Destinos</ButtomsMain>
          <ButtomsMain>Inscrições</ButtomsMain>
          <ButtomsMain>Sobre nós</ButtomsMain>
          <ButtomsMain>Contato</ButtomsMain>
          <ButtomsMain>Login</ButtomsMain>
          </ButtonContainerMain>

          </StyleMain>
    );
  }
  
  export default Main;