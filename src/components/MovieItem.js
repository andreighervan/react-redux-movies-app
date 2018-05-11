import React, {Component} from 'react';
import {addToFavorite} from '../actions';
import {connect} from 'react-redux';

const urlComponent='https://image.tmdb.org/t/p/w342';

class MovieItem extends Component{
    constructor(props){
        super(props);
        this.state={
            favorited:false
        }
    }
    addToFavorite(){
        this.setState({favorited:!this.state.favorited});
        this.props.addToFavorite(this.props.movie);
    }
    displayFav(){
        if(!this.state.favorited){
            return <span onClick={()=>this.addToFavorite()} className="glyphicon glyphicon-heart-empty"></span>
        }else{
            return <span onClick={()=>this.setState({favorited:!this.state.favorited})} className="glyphicon glyphicon-heart"></span>
        }
    }
    render(){
        console.log('Movie item',this.props);
        return(
            <div className="col-sm-3 col-md-3">
                <div className="thumbnail">
                    <img src={urlComponent+this.props.movie.poster_path}/>
                    <div className="caption">
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.overview}</p>
                        <p>Ratings <span className="badge badge-default"> {this.props.movie.vote_average}</span> <span className="glyphicon glyphicon-star"></span></p>
                        <p>Release date {this.props.movie.release_date}</p>
                        <p>{this.displayFav()}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{addToFavorite})(MovieItem);