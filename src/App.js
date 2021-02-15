import React from 'react';
import Row from './components/Row';
import requests from './consts/requests'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Alohis!</h1>
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

    </div>
  );
}

export default App;
