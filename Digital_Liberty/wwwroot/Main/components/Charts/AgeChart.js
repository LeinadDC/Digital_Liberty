import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
    LabelList, Label, RadialBarChart,RadialBar
} from 'recharts';

export default class AgeChart extends React.Component {
    render() {
        const data = [
            { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
            { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
            { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
            { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
            { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
            { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' }
        ];

        const style = {
            top: 0,
            left: 350,
            lineHeight: '24px'
        };

        return (
            <div className="x_panel tile fixed_height_320">
                <div className="x_title">
                    <h2>Rango de edades</h2>
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
                            <RadialBarChart width={730} height={250} innerRadius="10%" outerRadius="80%" data={data} startAngle={180} endAngle={0}>
                                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                                <Tooltip />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </div >
                </div>
            </div>
                    );
    }
}
