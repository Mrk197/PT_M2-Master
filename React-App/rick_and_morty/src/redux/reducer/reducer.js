 import {ADD_FAVORITE, DELETE_FAVORITE} from '../actions/actions-types';

 const initialState = {
    myFavorites: []
 }

function rootReducer(state=initialState, {type, payload}){
    switch (type) {
        case ADD_FAVORITE:
            return { 
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }

        case DELETE_FAVORITE:
            const actualFavorites = state.myFavorites.filter((item) => item.id !== payload);
            return {
                ...state,
                myFavorites: [...state.myFavorites, actualFavorites]
            }
    
        default:
            return state;
    }
 }

 export default rootReducer;