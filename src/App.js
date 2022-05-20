import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [gifs, setGifs] = React.useState([
    'https://developers.giphy.com/branch/master/static/why_3-811d1fc606617b7ee564a6be1d5ad6ae.gif',
    'https://developers.giphy.com/branch/master/static/why_4-dbf60f160acb0c6f22c6260bd3a8c6b5.gif']);
  useEffect(() => {
    console.log('Efectos');
  }, []/** Sin dependencias, no se vuelve a renderizar al principio */)
  return (
    <div className="App">
      <header className="App-header">
        <section className="App-content">
          {
            gifs.map(gif => <img src={gif} alt="No gif" />)
          }
          <button onClick={() => setGifs([...gifs, 'https://media2.giphy.com/media/tdQlpY2mYIoHm/200.webp?cid=ecf05e47ol33m5gda4gtpa3ut78jsv2w428ufjozydtjlwqv&rid=200.webp&ct=g'])} />
        </section>
      </header>
    </div>
  );
}

export default App;
