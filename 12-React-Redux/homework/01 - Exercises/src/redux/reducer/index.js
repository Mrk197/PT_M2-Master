import {ADD_PRODUCT,DELETE_PRODUCT} from './types';

const initialState = {
   list: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {list: [...state.list, action.payload]}
        case DELETE_PRODUCT:
            state.list.filter();    
        default:
            return state
    }
}

export default rootReducer
