import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
    LabelList, Label
} from 'recharts';

export default class Chart extends React.Component {
    render() {
        const data = [
            { estadoCivil: 'Solter@', cantidad: 30},
            { estadoCivil: 'Casad@', cantidad: 5},
            { estadoCivil: 'Divorciad@', cantidad:13},
            { estadoCivil: 'Viud@', cantidad: 3},
            { estadoCivil: 'Unión Libre', cantidad: 20},
        ];
        return (
                <BarChart width={600} height={300} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="estadoCivil" />
                    <YAxis />  
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="cantidad" fill="#8884d8" />
                </BarChart>);
    }
}
