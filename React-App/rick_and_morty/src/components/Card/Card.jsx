import styles from './Card.module.css';

export default function Card({name, species, gender, image, onClose, key}) {
   return (
      <div className={styles.card}>
         <div className={styles.divImg}>
            <button onClick={onClose} id={key}>X</button>
            <img  src={image} alt="img" />
            <h2>{name}</h2>
         </div>
         <div className={styles.divDescription}>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
         </div>
      </div>
   );
}
