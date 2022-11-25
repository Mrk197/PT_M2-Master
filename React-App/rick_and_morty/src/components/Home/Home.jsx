import Cards from '../Cards/Cards.jsx'

export default function Home({characters, close}) {
    return <div>
        <div className='Tittle'>
        <h1>RICK AND MORTY APP</h1>
      </div>
      <div>
        <Cards
          characters={characters}
          close={close}
        />
      </div>
    </div>
}