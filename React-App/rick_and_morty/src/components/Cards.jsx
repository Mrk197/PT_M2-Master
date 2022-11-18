import Card from './Card';
import styles from './Cards.module.css';

export default function Cards({characters}) {
   return <div className={styles.divCards}>
      {
         characters.map((character) => 
            { return <Card 
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />}
         )
      }
   </div>;
}
