import React, { useEffect } from 'react';
import './App.css';
import ListGifs from './components/ListGifs';
import { api } from './services/apiGifs';



function App() {
  const [gifs, setGifs] = React.useState([]);
  useEffect(() => {
    api.getGifs({ keyword: 'developer', limit: 100 }).then(setGifs);
  }, []/** No dependencies, it's called once */)
  return (
    <div className="App">
      <header className="App-header">
        <section className="App-content">
          <ListGifs gifs={gifs} />
        </section>
      </header>
    </div>
  );
}

export default App;
