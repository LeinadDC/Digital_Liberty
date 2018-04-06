import React from 'react';

export default class Detail extends React.Component {
    constructor() {
        super();
        this.state = { user: [], loading: true};
    }


    render() {
        return (
            <div className="col-md-2 col-sm-4 col-xs-12 tile_stats_count">
                <h1>Detalles, {this.props.user.document}</h1>
                <h1>Detalles, {this.props.user.language}</h1>
            </div>
        );
    }
}
