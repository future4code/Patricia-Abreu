import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pretenders from './Pretenders';
import styled from 'styled-components'

const urlGetMatches = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/matches'
const urlPutClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/clear'

const deletarMatches = styled.button`
background-color: red;
`

function Matches(props) {
    
    const [matches, setMatches]=useState([])

    useEffect(() => {
        getMatches()
    })

    const getMatches = () => {
        axios.get(urlGetMatches)
        .then ((response) => {
            setMatches(response.data.matches)
        })
        .catch ((error) => {
            console.log(error.message)
        })
    }

    const putMatches = () => {
        axios.put(urlPutClear)
        .then (() => {
            alert('Seus matches foram excluídos!')
        })
        .catch (() => {
            alert('Não foi possível excluir seus matches!')
        })
    }

    const onClickRefreshMatchesPage = () => {
        putMatches()
    }

    const matchList = matches.map ((match) => {
        return(
            <div key={match.id}>
                <img src={match.photo}/>
                <h3>{match.name}</h3>
            </div>
        )
    })

    return (
        <div>
            Matches
            <div>
            <img/>
            <deletarMatches onClick={onClickRefreshMatchesPage}>Deletar Matches</deletarMatches>
            {matchList}            
            <button onClick={props.onClickMatches}>Profiles</button>
            </div>
        </div>
    )
}

export default Matches;