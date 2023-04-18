import './App.css';
import imageRickMorty from './img/rick-morty.jpg';
import imageCredencial from './img/foto-credencial.jpg';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const restapi =  async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterapi = await api.json();
    setCharacters(characterapi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <h2 className='nombre'>Adriel Peregrina</h2>
        <h2 className='matricula'>zs20006770</h2>
        <h3 className='carrera'>Ingenieria de software</h3>
        <h3 className='escuela'>Universidad veracruzana</h3> 
        <img src={imageCredencial} alt="credencial" className='img-credencial'></img>
        

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : ( 
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home'></img>
            <button onClick={restapi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;