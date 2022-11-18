import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'

function App () {;
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className='Tittle'>
        <h1>RICK AND MORTY APP</h1>
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(document.getElementById('search').value)}
        />
      </div>
    </div>
  )
}

export default App
