import React from 'react';
import './App.css';
import ThreeScene from './components/three/threeJS';
import store from './redux/store';
import {Provider} from 'react-redux'
import Header from './components/Header/Header';
import ConfigBar from './components/configBar/ConfigBar';

function App() {

  return (
    <Provider store={store}>
      <div className="appWrapper">
      <Header/>
      <ThreeScene/>
      <ConfigBar/>
      </div>
    </Provider>
  );
}

export default App;
