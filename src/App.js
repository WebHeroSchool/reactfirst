import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as nums from './numbers.js';

const isLogo = true;
const numberOfProject = 1;
const desireToLearn = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {isLogo && 'It has a mesmerizing logo'}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {desireToLearn ? 'Learn React' : "Don't use the link"}
        </a>
        <p>
         count * length = {nums.count*nums.length}
       </p>
      </header>
    </div>
  );
}

export default App;
