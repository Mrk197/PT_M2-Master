export default function SearchBar({onSearch}) {
   return (
      <div>
         <input id="search" type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
