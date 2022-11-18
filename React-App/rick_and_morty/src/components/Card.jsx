import styles from './Card.module.css';

export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={styles.card}>
         <div className={styles.divClose}>
            <button onClick={onClose}>X</button>
         </div>
         <div className={styles.divImg}>
            <img  src={image} alt="img" />
            <h2>{name}</h2>
         </div>
         <div className={styles.divDescription}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
      </div>
   );
}
