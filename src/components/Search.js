import React, {Component} from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {API_KEY} from '../secrets';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        console.log('Search', this.state.query);
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${this.state.query}`;
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
            .then(result => console.log(result))
    }

    render() {
        return (
            <div>
                <Form inline className="col-md-12 col-md-offset-4">
                    <FormGroup><ControlLabel>Search</ControlLabel>{' '}</FormGroup>
                    <FormControl type="text" placeholder="wonder woman"
                                 onChange={(event) => this.setState({query: event.target.value})}/>{' '}
                    <Button bsStyle="success" onClick={() => this.search()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Search;