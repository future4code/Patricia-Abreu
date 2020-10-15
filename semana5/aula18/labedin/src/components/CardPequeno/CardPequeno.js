import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
                <br></br>
                <h4>{ props.nome1 }</h4>
                <p>{ props.descricao1 }</p>
                <br></br>
                <h4  className="endereco">{ props.nome2 }</h4>
                <p>{ props.descricao2 }</p>
            </div>
        </div>
    )
}

export default CardPequeno;