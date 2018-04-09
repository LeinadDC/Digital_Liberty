﻿import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
    LabelList, Label
} from 'recharts';

export default class TotalInactive extends React.Component {
    constructor() {
        super();
        this.state = {
            civilstatus: 0, loading: true
        };
    }

    componentDidMount() {
        fetch('api/Chart/GetInactiveCount')
            .then(response => response.json())
            .then(data => {
                this.setState({ civilstatus: data, loading: false });
            });
            
    }

    render() {
        const data = this.state.civilstatus;
        let contents = this.state.loading ? <p><em>Loading...</em></p>
            : TotalInactive.renderChart(data);

        return (<div>
            {contents}
        </div>);
    }

    static renderChart(data) {
        return (
            <div className="col-md-2 col-sm-4 col-xs-12 tile_stats_count">
                <span className="count_top"><i className="fa fa-user"></i>Inactivos</span>
                <div className="count red">{data}</div>
            </div>
        );
    }
}
