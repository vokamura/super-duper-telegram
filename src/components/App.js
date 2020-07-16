import React from 'react';
// import logo from './logo.svg';
import '.././App.css';
import Random from './Random';
// import NewChoice from './NewChoice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Super Duper Telegram!
        </p>
        <Random />
        {/* <NewChoice /> */}
      </header>
    </div>
  );
}

export default App;
