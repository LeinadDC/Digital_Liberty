import React from 'react';

export default class Detail extends React.Component {
    render() {
        return (
            <div className="col-md-2 col-sm-4 col-xs-12 tile_stats_count">
                <h1>Detalles, {this.props.document}</h1>
            </div>
        );
    }
}
