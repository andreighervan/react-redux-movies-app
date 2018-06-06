import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';
import {BrowserRouter as Router,Link} from 'react-router-dom';

class FavoriteMovieList extends Component {
    render() {
        console.log(this.props.favorites);
        return (
            <div>
                <Router>
                <Link to="/">Home</Link>
                </Router>
                <h4>{this.props.favorites.map(movie => {
                    return <MovieItem movie={movie} key={movie.id} showButton={false}/>
                })}</h4>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('FavoriteMovieList', state);
    return {
        favorites: state.favorites
    };
}

export default connect(mapStateToProps, null)(FavoriteMovieList);