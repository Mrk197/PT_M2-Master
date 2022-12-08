import styles from './Card.module.css';
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from '../../redux/actions/actions';

export function Card({name, species, gender, image, onClose, detailId, addFavorite, deleteFavorite, myFavorites}) {
   const [isfav, setIsFav] = useState(false);


   function handleFavorite() {
      if (isfav) {
         setIsFav(false);
         console.log('isFAV', isfav);
         deleteFavorite(detailId);
      }
      else{
         setIsFav(true);
         //console.log('isFAV', isfav);
         addFavorite({name, species, gender, image, detailId});
      }
   }

   /* useEffect(() => {
      myFavorites.forEach((fav) => {
         console.log("id", fav);
         if (fav.detailId === detailId) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);  */

   return (
      <div className={styles.card}>
         <div>
         {
            isfav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={onClose}>X</button>
         </div>
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

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: function (character) {
         dispatch(addFavorite(character));
      },
      deleteFavorite: function (id) {
         dispatch(deleteFavorite(id));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);