import React from 'react';
import ResetButton from './components/ResetButton/ResetButton';
import Main from './components/Main/Main'
import styled from 'styled-components';

const AppContainer = styled.div`
position: absolute;
width: 1440px;
height: 1024px;
left: 0px;
top: 0px;
background: #F3F3F3;
`

function App() {
  return (
    <AppContainer>
      <Main />
      <ResetButton />
    </AppContainer>
  );
}

export default App;