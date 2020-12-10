import React from 'react';
import styled from 'styled-components';


class Etapa1 extends React.Component {
    state = {
        escolaridade: 'medio incompleto',
    }

    onChangeEscolaridade = (event) => {
        let novaEscolaridade = event.target.value
        //console.log(novaEscolaridade)
        this.setState(() => {
            let objeto = { ...this.state.escolaridade }
            objeto.escolaridade = novaEscolaridade
            return { objeto }
        })
        //this.state({escolaridade: novaEscolaridade})
    }
        
    render() {

        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p>1. Qual o seu nome?</p>
                <input />
                <p>2. Qual a sua idade?</p>
                <input />
                <p>3. Qual o seu email?</p>
                <input />
                <p>4. Qual a sua escolaridade?</p>
                <p>
                <select onChange={this.onChangeEscolaridade}>
                    <option value="medio incompleto">Ensino Médio Incompleto</option>
                    <option value="medio completo">Ensino Médio Completo</option>
                    <option value="superior incompleto">Ensino Superior Incompleto</option>
                    <option value="superior completo">Ensino Superior Completo</option>
                </select>
                </p>
            </div>
        )
    }

}

export default Etapa1;