import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
      <Post
      nomeUsuario={'Paulinha'}
      fotoUsuario={'https://picsum.photos/id/1027/200'}
      fotoPost={'https://picsum.photos/id/1008/500'}
      />
      <Post
      nomeUsuario={'Carlos'}
      fotoUsuario={'https://picsum.photos/id/447/200'}
      fotoPost={'https://picsum.photos/id/1025/500'}
      />
      <Post
      nomeUsuario={'Ana'}
      fotoUsuario={'https://picsum.photos/id/342/200'}
      fotoPost={'https://picsum.photos/id/1023/500'}
      />
      </div>
    );
  }
}



export default App;
