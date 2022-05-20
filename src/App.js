import React from 'react';
import './App.css';
import SearchGifs from './components/SearchGifs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="App-content">
          <SearchGifs />
        </section>
      </header>
    </div>
  );
}

export default App;
