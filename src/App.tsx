import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Body from './Body'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav></Nav>
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
