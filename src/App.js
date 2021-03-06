import React from 'react';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';

import './App.css';
import logo from './logo.svg';


class App extends React.Component {
  render() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PostForm />
          <Posts />
        </header>
      </div>
    </Provider>
   );
  } 
}

export default App;
