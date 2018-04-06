import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Detail from './Detail';

export default class List extends React.Component {
    constructor() {
        super();
        this.state = { beneficiaries: [], loading: true, detalles : false, document: 'empty' };
    }

    componentDidMount() {
        fetch('apiv2/People/BeneficiariesList')
            .then(response => response.json())
            .then(data => {
                this.setState({ beneficiaries: data, loading: false });
            });
    }

    render() {

        const columns = [{
            dataField: 'firstName',
            text: 'Nombre Completo'
        }, {
                dataField: 'document',
            text: 'Identificacion'
        }, {
                dataField: 'language',
            text: 'Lenguaje'
        }, {
                dataField: 'phoneNumber',
            text: 'Telefono'
        }];

        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                this.setState({detalles: true,document: row.document});
            }
        };

        let contents = this.state.loading ? <p><em>Loading...</em></p>
            : List.renderTable(this.state.beneficiaries, columns, rowEvents);

        return (<div>
            {this.state.detalles ? <Detail document={this.state.document}/> : null}
            <h1>Lista Beneficiarios</h1>
            {contents}
        </div>);
    }

    static renderTable(beneficiaries, columns, rowEvents) {
        return (
            <BootstrapTable keyField='document' data={beneficiaries} columns={columns} rowEvents={rowEvents} />);
    }
}
