import React from 'react';
import Footer from './components/footer/Footer';
import HomePage from './ApplicationPage/HomePage/HomePage';
import Main from './components/Main/Main';
import SobreNos from './components/sobreNos/SobreNos';
import Register from './ApplicationPage'
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <Main/>
      {/* <HomePage/> */}
      {/* <SobreNos /> */}
      {/* <Register /> */}
      <LoginPage />
      <Footer/>
    </div>
  );
}

export default App;
