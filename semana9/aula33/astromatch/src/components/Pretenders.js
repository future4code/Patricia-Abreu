import React, { useState, useEffect } from 'react';
import axios from 'axios'

const urlGet = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/person'
const urlPost = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/choose-person'

function Pretenders(props) {

    const [profiles, setProfiles] = useState({})
    const [choiceProfile, setChoiceProfile] = useState(false)

    const getProfileToChoose = () => {
        axios.get(urlGet)
            .then((res) => {
                setProfiles(res.data.profile)
            })
            .catch((err) => {
                alert(`Erro ${err}`)
            })
    }

    const postChooseMatches = () => {
        const body = {
            id: profiles.id,
            choice: choiceProfile
        }
        axios.post(urlPost, body)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                alert('Erro: ', err.message)
            })
    }

    const onClickLike = () => {
        setChoiceProfile(true)
        getProfileToChoose()
    }

    const onClickDislike = () => {
        setChoiceProfile(false)
        getProfileToChoose()
    }

    //ComponentDidUpdate
    useEffect(() => {
        getProfileToChoose()
    },[])

    //ComponentDidMount
    useEffect(() => {
        postChooseMatches()
    },[profiles])

    console.log(choiceProfile)

    return (
        <div>
            <button onclick={props.onClickPretenders}>Matches</button>
            <div>
                <img src={profiles.photo} alt='foto' />
            </div>
            <div>
                <p> Nome: {profiles.name}</p>
                <p> Idade: {profiles.age}</p>
                <p> Bio: {profiles.bio}</p>
            </div>
            <div>
                <button onClick={onClickDislike}>Dislike</button>
                <button onClick={onClickLike}>Like</button>
            </div>
        </div>
    )
}

export default Pretenders;