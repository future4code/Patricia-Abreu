import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
font-family: 'Roboto', sans-serif, bold;
height: 40px;
background-color: #BB9EC7;
text-align: center;
font-size: 10px;
padding-top: 4px;
padding-bottom: 4px;
`

function Footer() {
    return (
      <FooterContainer>
          <div>
        Rua das Palmeiras, nº 18.
        <br/>
        Centro
        <br/>
        Florianópolis/SC
        </div>
      </FooterContainer>
    );
  }
  
  export default Footer;