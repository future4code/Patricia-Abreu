import React from "react";
import styled from "styled-components";
import axios from "axios";


class CreatePlaylist extends React.Component {

  state = {
    namePlaylist: ""
  }

  createPL = () => {
    const body = {
      name: this.state.namePlaylist
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
      headers: {
        Authorization: "patricia-otarao-dumont"
      }
    }).then(response => {
      alert("Sua lista de músicas foi criada com sucesso!")
      this.setState({ namePlaylist:""})
    }).cacth(error => {
      console.log(error.message)
    });
  }

  onChangeNamePlaylist = (event) => {
    this.setState({ namePlaylist: event.target.value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <input
          value={this.state.namePlaylist}
          onChange={this.onChangeNamePlaylist}
        />
        <button onClick={this.createPL}>Criar Playlist</button>
      </div>
    );
  }
}

export default CreatePlaylist;