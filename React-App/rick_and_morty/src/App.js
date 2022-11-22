import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
//import characters from './data.js'
import React, {useState} from 'react'

function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character)=>{
    console.log("se ha presionado agregar", character);
    const repeat = (element) =>  element.id === parseInt(character);

    if(!characters.some(repeat)) { //si no se repite
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]); 
          } else {
              window.alert('No hay personajes con ese ID');
          }
      });
    }
    else{
      alert("Personaje Repetido");
    }
  };

  const onClose = (id) => {
    const deleteCharacter = characters.filter(character => character.id !== id);
    console.log("delete", id);
    console.log(deleteCharacter);
    setCharacters(() => deleteCharacter);
  };
  
  const randomCharacter = () => {
      const randomID = parseInt(Math.random() * 825 + 1);
      onSearch(randomID);
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav agregar={onSearch} randomCharacter={randomCharacter} />
      <hr></hr>
      <div className='Tittle'>
        <h1>RICK AND MORTY APP</h1>
      </div>
      <div>
        <Cards
          characters={characters}
          close={onClose}
        />
      </div>
    </div>
  )
}

export default App