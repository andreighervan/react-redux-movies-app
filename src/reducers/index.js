import {MOVIES} from '../actions';

export default function movies(stste,action) {
    switch(action.type){
        case MOVIES:
            console.log(action.items)
            return action.items;
        default:
            return state;
    }
}