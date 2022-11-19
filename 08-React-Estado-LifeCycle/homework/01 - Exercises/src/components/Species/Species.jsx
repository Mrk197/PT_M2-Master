import { Button } from 'bootstrap';
import React from 'react';

export default function Species ({species, handleSpecies, handleAllSpecies}) {
  return (
    <div>
      <h2>Species</h2>
      {
      species.map((specie) => 
        <button key={specie} onClick={handleSpecies}>{specie}</button>
      )}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  )
}
