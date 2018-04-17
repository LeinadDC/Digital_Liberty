import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
    LabelList, Label, LineChart,Line
} from 'recharts';

export default class ProvinceChart extends React.Component {
    constructor() {
        super();
        this.state = {
            civilstatus: [], loading: true
        };
    }

    componentDidMount() {
        fetch('api/Chart/GetProvincesCount')
            .then(response => response.json())
            .then(data => {
                this.setState({ civilstatus: data, loading: false });
            });

    }

    render() {
        const data = this.state.civilstatus;
        let contents = this.state.loading ? <p><em>Loading...</em></p>
            : ProvinceChart.renderChart(data);

        return (<div>
            {contents}
        </div>);
    }

    static renderChart(data) {
        return (
            <div className="x_panel tile fixed_height_320">
                <div className="x_title">
                    <h2>Provincia Origen</h2>
                    <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <div style={{ width: '1200px', height: '300px' }}>
                        <ResponsiveContainer width="100%" height="80%">
                            <LineChart data={data}
                                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line connectNulls={true} type='monotone' dataKey='count' stroke='#8884d8' fill='#8884d8' />
                            </LineChart>
                        </ResponsiveContainer>
                    </div >
                </div>
            </div>
        );
    }
}
