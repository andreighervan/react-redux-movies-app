import movies from './movies_reducer';
import favorited from './fav_reducer';
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    movies,
    favorited
});

export default rootReducer;