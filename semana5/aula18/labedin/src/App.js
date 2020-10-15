import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import FotoPatricia from './components/Imagens/FotoPatricia.jpg'
import BB from './components/Imagens/BB.jpg';
import contato from './components/Imagens/contato.png';
import CT from './components/Imagens/CT.jpg';
import Jobim from './components/Imagens/Jobim.png';
import localizacao from './components/Imagens/localizacao.jpg'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPatricia}
          nome="Patrícia de Abreu Otarão" 
          descricao="Oi, eu sou o Patrícia de Abreu Otarão. Advogada em transição de carreira, estudando desenvolvimento web na Labenu. Sou apaixonada por técnlogia desde criança e, mesmo que fora dessa atuação, sempre fui uma curiosa da área de T.I. ."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          imagem={contato}
          nome="E-mail:" 
          descricao="patricia@email.com"

          nome1="Telefone:" 
          descricao1="+555 48 - 98888-8888"
        />

          <CardPequeno className="endereco"
          imagem={localizacao}
          nome2="Endereço:" 
          descricao2="Rua da vida, nº 123. Florianópolis/SC"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={CT}
          nome="Consultor Trabalhista" 
          descricao="Consultoria jurídica especializada no Direito do Trabalho, para colegas atuantes e pessoas com interesse comum. Criação e disponibilização de peças processuais trabalhistas; Elaboração e publicação de artigos na temática de atualizações do direito do trabalho." 
        />
        
        <CardGrande 
          imagem={Jobim}
          nome="Jobim Advogados Associados" 
          descricao="Advogada Trabalhista com as seguintes atuações:
          Defesa em Ações Trabalhistas; Direito do Trabalho Preventivo;
          Negociação coletiva; Procedimentos do Ministério do Trabalho;
          Procedimentos do Ministério Público do Trabalho;
          Reclamação Trabalhista;
          Seara administrativa de Direito do Trabalho;
          Seara judicial de Direito e Processo do Trabalho.
          Controle de prazos judicias e periciais." 
        />

        <CardGrande
          imagem={BB}
          nome="Banco do Brasil S.A." 
          descricao="Estagiária no Núcleo Jurídico Região Centro do RS. Realizava a elaboração de peças processuais em primeiro grau - desde a defesa até o recurso; controle de prazos; diligências externas; pagamento de custas processuais; recolhimento de depósitos recursais; protocolos pelo PJe e de processos físicos." 
        />
        </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
