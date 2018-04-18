import React from 'react';

class Location extends React.Component {
    constructor() {
        super();
    }

    render() {
        let locations = this.props.state.locations;
        let optionItems = locations.map((location) =>
            <option key={location.name}>{location.name}</option>
        );

        return (
            <div>
                <select>
                    {optionItems}
                </select>
            </div>
        )
    }
}

export default Location;
