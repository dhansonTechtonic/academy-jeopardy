import React from 'react';
import './App.css';
import Board from './Components/Board'
import Lecture from './Data/js-lecture-101'

function App() {
  return (
    <div className="app">
      <h1 className="title">{Lecture.title}</h1>
      <Board />
    </div>
  );
}

export default App;
