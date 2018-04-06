import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

export default class List extends React.Component {
    constructor() {
        super();
        this.state = { beneficiaries: [], loading: true };
    }

    componentDidMount() {
        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json())
            .then(data => {
                this.setState({ beneficiaries: data, loading: false });
            });
    }

    render() {

        const columns = [{
            dataField: 'dateFormatted',
            text: 'Nombre Completo'
        }, {
                dataField: 'temperatureC',
            text: 'Identificacion'
        }, {
                dataField: 'temperatureF',
            text: 'Está Activo'
        }, {
                dataField: 'summary',
            text: 'Nombre'
        }];

        let contents = this.state.loading ? <p><em>Loading...</em></p>
            : List.renderTable(this.state.beneficiaries, columns);

        return <div>
            <h1>Lista Beneficiarios</h1>
            {contents}
        </div>;
    }

    static renderTable(beneficiaries, columns) {
        return (
            <BootstrapTable keyField='dateFormatted' data={beneficiaries} columns={columns} />);
    }
}
