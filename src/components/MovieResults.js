import React, {Component} from 'react';
import Search from './Search';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';
import {BrowserRouter as Router,Link} from 'react-router-dom';

class MovieResults extends Component {
    render() {
        return (
            <div>
                <Router>
                <Link to="/fav">Favorite</Link>
                </Router>
                <Search/>
                {this.props.movies.map(item => {
                    return <MovieItem key={item.id} movie={item} showButton={true}/>;
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, null)(MovieResults);