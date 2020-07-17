import React from 'react';
// import logo from './logo.svg';
import '.././App.css';
import Game from './Game';
// import NewChoice from './NewChoice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Super Duper Telegram!
        </p>
        <Game />
        {/* <NewChoice /> */}
      </header>
    </div>
  );
}

export default App;
