import React from 'react';
import './App.css';
import styled from 'styled-components';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/id/1027/200",
        fotoPost: "https://picsum.photos/id/1008/500"
      },
      {
        nomeUsuario: "Carlos",
        fotoUsuario: "https://picsum.photos/id/447/200",
        fotoPost: "https://picsum.photos/id/1025/500"
      },
      {
        nomeUsuario: "Ana",
        fotoUsuario: "https://picsum.photos/id/342/200",
        fotoPost: "https://picsum.photos/id/1023/500"
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  addPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoArrayPosts = [novoPost, ...this.state.posts];

    this.setState({ posts: novoArrayPosts });
    this.setState({ valorInputNomeUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <div className={'app-container'}>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do usuário"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />
          <button onClick={this.addPost}>Adicionar</button>
        </div>
        <div>
          {listaDePosts}
        </div>
      </div>
    );
  }
}

export default App;
