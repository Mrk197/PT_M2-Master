import styles from './Card.module.css';
import {Link} from "react-router-dom";

export default function Card({name, species, gender, image, onClose, detailId}) {
   return (
      <div className={styles.card}>
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${detailId}`}>
         <div className={styles.divImg}>          
            <img  src={image} alt="img" />
            <h2>{name}</h2>
         </div>
         </Link>
         <div className={styles.divDescription}>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
         </div>
      </div>
   );
}
