import React from 'react';
import styled from 'styled-components'

const HomeConatiner = styled.div`
display: flex;
gap: 2em;
margin: 5em;
align-items: center;
justify-content: center;
`

const WelcomeContainer = styled.div`
width: 600px;
height: 400px;
background-color: #eeeeee;
`

const DestinyContainer = styled.div`
width: 600px;
height: 400px;
border: 1px solid black;
`

function HomePage() {
    return (
        <HomeConatiner>
      <WelcomeContainer>

      </WelcomeContainer>
      <DestinyContainer>

      </DestinyContainer>
      </HomeConatiner>
    );
  }
  
  export default HomePage;