import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
    LabelList, Label
} from 'recharts';

export default class ReligionChart extends React.Component {
    render() {
        const data = [
            { estadoCivil: 'Solter@', cantidad: 30},
            { estadoCivil: 'Casad@', cantidad: 5},
            { estadoCivil: 'Divorciad@', cantidad:13},
            { estadoCivil: 'Viud@', cantidad: 3},
            { estadoCivil: 'Unión Libre', cantidad: 20},
        ];
        return (
            <div className="x_panel tile fixed_height_320">
                <div className="x_title">
                    <h2>Tipo de religiones</h2>
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
                                <XAxis dataKey="estadoCivil" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="cantidad" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div >
                </div>
            </div>
                    );
    }
}
