import React from 'react';
import './app.scss';
import VisualContainer from './components/VisualContainer/VisualContainer';
import SequenceManager from './components/SequenceManager/SequenceManager';
import Debug from './components/Debug/Debug';

function App() {
  return (
    <div className="app">
      {/* <Debug /> */}
      <div className="game">
        <VisualContainer />
        <SequenceManager />
      </div>
    </div>
  );
}

export default App;
