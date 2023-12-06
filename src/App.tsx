import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Body from './Body'
import ding1 from './images/ding.png'
import ding2 from './images/ding2.png'

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Nav></Nav>
        <Body></Body>
      </div>
      <div id="note"> <b>This website was designed and built by Michelle Ding. Last updated December 2023.</b></div>
    </div>
    
  );
}

export default App;
