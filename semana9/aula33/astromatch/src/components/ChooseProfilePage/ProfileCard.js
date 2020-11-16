import React from 'react';
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
position: absolute;
width: 358px;
height: 358px;
left: 20px;
top: 74px;

background: #C4C4C4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const ProfilePicture = styled.img`
display: block;
max-height: 350px;
width: 100%;
object-fit: scale-down;
`
const ProfileInfo = styled.div`
position: absolute;
width: 333px;
height: 61px;

font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;

color: #000000;;
`

function ProfileCard(props) {
  const profile = props.profile
  return (
    <ProfileCardContainer>
      <ProfilePicture src={profile.photo}/>
      <ProfileInfo>
      <p>{profile.name}, {profile.age}</p>
      <p>{profile.bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}

export default ProfileCard;