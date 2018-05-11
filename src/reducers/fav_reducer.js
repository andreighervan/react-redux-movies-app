import {ADD_FAV} from '../actions';

export default function addToFavorite(state=[],action) {
    switch(action.type){
        case ADD_FAV:
            console.log('Movies added:',action.movie);
            return state;
        default:
            return state;
    }
}

