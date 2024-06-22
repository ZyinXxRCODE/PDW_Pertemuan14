import React from 'react';
import gambar from './assets/gambar.jpg';
import './App.css';

function App() {
  return (
    <div className="card">
      <h1>Les Demoiselles d’Avignon</h1>
      <img src={gambar} alt="Gambar" />
      <p>
        "Les Demoiselles d’Avignon" is a large oil painting created by Spanish artist Pablo Picasso in 1907. The work portrays five nude female prostitutes from a brothel in Barcelona, each figure depicted in a disconcerting confrontational manner and none is conventionally feminine. Picasso's innovative portrayal of the human form and his radical departure from traditional composition helped to shape the foundation of modern art.
      </p>
    </div>
  );
}

export default App;
