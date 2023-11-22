import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Body from './Body'

function App() {
  return (
    <div className="App">
      {/* <div id="note">{' '}</div> */}
      <div className="container">
        <Nav></Nav>
        <Body></Body>
      </div>
      <div id="note"> This website was designed and built by Michelle Ding</div>
    </div>
    
  );
}

export default App;
