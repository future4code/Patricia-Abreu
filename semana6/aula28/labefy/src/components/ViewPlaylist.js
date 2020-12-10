import React from "react";
import styled from "styled-components";
import axios from "axios";

  const DeleteButton = styled.span`
  color: red;
  margin-left: 10px;
  `

  const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
  const axiosConfig = {
    headers: {
      Authorization: "patricia-otarao-dumont"
    }
  };


class ViewPlaylist extends React.Component {

    state = {
      viewPL: [{
        id: "1",
        name: "funk"
      },
      {
        id: "",
        name: ""
      }
      ]
    };

  componentDidMount = () => {
    this.getPlaylist()
  }

  getPlaylist = () => {

    axios.get(baseUrl, axiosConfig).then(response => {
      this.setState({ viewPL: response.data })
      console.log(response.data)
    }).catch(error => {
      console.log(error.message)
    });
  };


  DeletePlayList = (listId) => {

    axios.delete(`${baseUrl}/${listId}`, axiosConfig).then(response => {
      alert("Playlist deletada com sucesso!")
    }).cacth(error => {
      console.log(error.message)
    });
  }

  render() {
    const renderedViewPL = this.state.viewPL.map((list => {
      return (<p
        key={list.id} >
        {list.name}
        <DeleteButton>X</DeleteButton>
      </p>
      );
    })
  }
}

export default ViewPlaylist;