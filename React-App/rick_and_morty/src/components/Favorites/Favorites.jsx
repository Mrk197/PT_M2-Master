import Card from '../Card/Card.jsx';
import { connect } from "react-redux";

export function Favorites({favorites, close}) {
    return <div>
        <h1>FAVORITES</h1>
        {
            favorites.map((favorite) =>{
                return <Card 
                    detailId={favorite.id}
                    name={favorite.name}
                    species={favorite.species}
                    gender={favorite.gender}
                    image={favorite.image}
                    onClose={() => close(favorite.id)}
                    key={favorite.id}
                />
            })
        }
    </div>
}

export function mapStateToProps(state) {
    return {
       favorites: state.myFavorites
    }
 }

 export default connect(mapStateToProps, null)(Favorites);