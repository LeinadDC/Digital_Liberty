﻿import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
    LabelList, Label
} from 'recharts';

export default class ChildrenChart extends React.Component {
    constructor() {
        super();
        this.state = {
            hasChildren: [], loading: true
        };
    }

    componentDidMount() {
        fetch('api/Chart/GetHasChildren')
            .then(response => response.json())
            .then(data => {
                this.setState({ hasChildren: data, loading:false });
            });

    }

    render() {
        const data = this.state.hasChildren;
        let contents = this.state.loading ? <p><em>Loading...</em></p>
            : ChildrenChart.renderChart(data);

        return (<div>
            {contents}
        </div>);
    }

    static renderChart(data) {
        return (
            <div className="x_panel tile fixed_height_320">
                <div className="x_title">
                    <h2>Tiene Hijos</h2>
                    <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <div style={{ width: '600px', height: '300px' }}>
                        <ResponsiveContainer width="80%" height="80%">
                            <BarChart data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div >
                </div>
            </div>
        );
    }
}
