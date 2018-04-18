import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom';

class LocationSelect extends Component {
    constructor() {
        super();
        this.state = {
            locations: [],
        };
    }

    componentDidMount() {
        let initialPlanets = [];
        fetch('http://localhost:61271/api/Locations/GetLugares')
            .then(response => {
                return response.json();
            }).then(data => {
                initialLocation = data.results.map((location) => {
                    return planet
                });
                console.log(initialLocation);
                this.setState({
                    locations: initialLocation,
                });
            });
    }

    render() {
        return (
            <Location state={this.state} />
        );
    }

}

export default LocationSelect;

ReactDOM.render(<PlanetSearch />, document.getElementById('react-search'));