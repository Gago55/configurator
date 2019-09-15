import React from 'react';
import './App.css';
import ThreeScene from './components/three/threeJS';
import store from './redux/store';
import {Provider} from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <ThreeScene />
    </Provider>
  );
}

export default App;
