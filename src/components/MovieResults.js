import React, {Component} from 'react';
import Search from './Search';

class MovieResults extends Component{
    render(){
        return(
            <div>
            <h1>Movie Results</h1>
            <Search/>
            </div>
        )
    }
}

export default MovieResults;