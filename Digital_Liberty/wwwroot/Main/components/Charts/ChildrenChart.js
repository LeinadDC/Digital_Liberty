import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
    LabelList, Label
} from 'recharts';

export default class ChildrenChart extends React.Component {
    render() {
        const data = [
            { name: 'Tiene Hijos', si: 4000, no: 2400, amt: 2400 },
        ];
        return (
                <div className="x_panel tile fixed_height_320">
                    <div className="x_title">
                        <h2>Cantidad de hijos</h2>
                        <ul className="nav navbar-right panel_toolbox">
                            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                            </li>
                            <li><a className="close-link"><i className="fa fa-close"></i></a>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="x_content">
                        <div style={{width:'600px', height:'300px'}}>
                          <ResponsiveContainer width="80%" height="80%">
                            <BarChart width={600} height={300} data={data}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="si" stackId="a" fill="#8884d8" />
                                <Bar dataKey="no" stackId="a" fill="#82ca9d" />
                            </BarChart>
                           </ResponsiveContainer>
                         </div >
                    </div>
                </div>
                    );
    }
}
