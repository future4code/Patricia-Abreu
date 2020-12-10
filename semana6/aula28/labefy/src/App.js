import React from "react";
import styled from "styled-components";
import axios from "axios";
import CreatePlaylist from "./components/CreatePlaylist";
import ViewPlaylist from "./components/ViewPlaylist";

class App extends React.Component {
  state = {
    CreatePlaylist: true
  };

  changePage = () => {
    this.setState({ CreatePlaylist: ! this.state.CreatePlaylist })
  }

  render() {
    const currentPage = this.state.CreatePlaylist ? (<CreatePlaylist />) : (<ViewPlaylist />)
    return (
      <div className="App">
        {currentPage}
        <button onClick={this.changePage}>Mudar página</button>
      </div>
    );
  }
}

export default App;