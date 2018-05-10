import React, { Component } from 'react';
import '../App.css';
import MovieResults from './MovieResults';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row text-center">
              <div className="jumbotron">
                  <h1>Movies App</h1>
                  <p>Who doesn't like movies?</p>
              </div>
          </div>
          <div className="row">
              <MovieResults/>
          </div>
      </div>
    );
  }
}

export default App;
