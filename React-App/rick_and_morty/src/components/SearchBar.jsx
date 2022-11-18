//import styled from 'styled-components';
import styled from './SearchBar.module.css';

/* const DivSearch = styled.div`
   display: flex;
`; */

export default function SearchBar({onSearch}) {
   return (
      <div className={styled.divSearch}>
         <input id="search" type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
