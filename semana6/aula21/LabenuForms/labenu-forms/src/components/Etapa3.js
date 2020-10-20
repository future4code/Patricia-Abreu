import React from 'react';
import styled from 'styled-components';

class Etapa3 extends React.Component {
    
    render() {

        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input> </input>
                <p>6. Você fez algum curso completo?</p>
                <select onChange={this.onChangeEscolaridade}>
                    <option value="curso tecnico">Curso Técnico</option>
                    <option value="curso de ingles">Curso de Inglês</option>
                </select>
            </div>
        )
    }

}

export default Etapa3;