import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Board from './components/Board';
import Intro from './components/Intro';
import './scss/main.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
