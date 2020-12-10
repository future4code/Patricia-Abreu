import React, { useEffect, useState } from 'react';
import ChooseButtons from './ChooseButtons';
import ProfileCard from './ProfileCard';
import axios from 'axios';

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined)

  const getProfileToChoose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/person')
      .then(response => {
        setProfileToChoose(response.data.profile)
      })
      .catch((err) => {
        alert('Erro: ', err.message)
      })
  }


  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id
    }
    setProfileToChoose(undefined)

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/choose-person', body)
      .then(response => {
        getProfileToChoose()
      })
      .catch((err) => {
        alert('Erro: ', err.message)
      })
  }



useEffect(() => {
  getProfileToChoose()
}, []);

const onClickNo = () => {
  chooseProfile(false)
}

const onClickYes = () => {
  chooseProfile(true)
}

return (
  <div>
    { profileToChoose ?
      (<>
        <ProfileCard profile={profileToChoose} />
        <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
      </>) : <p>Loading...</p>
    }
  </div>
);
}

export default ChooseProfilePage;