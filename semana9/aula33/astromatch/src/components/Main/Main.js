import React, { useState } from 'react';
import AppBar from '../AppBar/AppBar';
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage';
import MatchListPage from '../MatchListPage/MatchListPage';
import styled from 'styled-components';

const MainContainer = styled.div`
position: absolute;
width: 400px;
height: 600px;
left: 520px;
top: 0px;

background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
`

function Main() {
  const [selectedPage, setSelectedPage] = useState('choose-profile')

  const renderSelectedPage = () => {
    switch(selectedPage) {
      case 'choose-profile':
        return <ChooseProfilePage />
      case 'match-list':
        return <MatchListPage />
      default:
        return <ChooseProfilePage />
    }
  }

  const goToChooseProfilePage = () => {
    setSelectedPage('choose-profile')
  }

  const goToMatchListPage = () => {
    setSelectedPage('match-list')
  }

  return (
    <MainContainer>
      <AppBar 
      goToChooseProfilePage={goToChooseProfilePage} 
      goToMatchListPage={goToMatchListPage} 
      />
      {renderSelectedPage()}
    </MainContainer>
  )
}

export default Main;