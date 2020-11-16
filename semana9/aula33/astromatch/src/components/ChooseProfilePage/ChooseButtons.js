import React from 'react';
import styled from 'styled-components';
// import heartIcon from '../Icons/heartIcon.png'
// import xIcon from '../Icons/xIcon.png'

const ButtonsConstainer = styled.div`
display: flex;
justify-content: space-around;
margin-top: 500px;
`

// const ButtonYes = styled.div`
// max-width: 30px;
// max-height: 30px;
// `

// const ButtonNo = styled.div`
// max-width: 30px;
// max-height: 30px;
// `

function ChooseButtons(props) {
    return (
    <ButtonsConstainer>
      <button onClick={props.onClickNo}> Não </button>
      <button onClick={props.onClickYes}> Sim </button>
    </ButtonsConstainer>
  );
}

export default ChooseButtons;