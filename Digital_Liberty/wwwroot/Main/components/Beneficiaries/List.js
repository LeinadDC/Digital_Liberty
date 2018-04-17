import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import DetailModal from './DetailModal';
import { Link } from 'react-router-dom';

export default class List extends React.Component {
    constructor() {
        super();
        this.state = {
            beneficiaries: [], loading: true, detalles: false, document: 'empty', user: {}, issues: [], loadingModal: true
        };
        this.handler = this.handler.bind(this);
    }

    componentDidMount() {
        fetch('api/People/GetBeneficiarios')
            .then(response => response.json())
            .then(data => {
                this.setState({ beneficiaries: data, loading: false });
            });

    }

    handler(e) {
        e.preventDefault()
        this.setState({
            detalles: false
        });
    }

    render() {

        const columns = [{
            dataField: 'firstName',
            text: 'Nombre Completo'
        }, {
            dataField: 'document',
            text: 'Identificacion',
            filter: textFilter({
                placeholder: 'Ingrese numero de cedula'
            })
        }, {
            dataField: 'isActive',
            text: 'Está Activo'
        }, {
            dataField: 'phoneNumber',
            text: 'Telefono'
        }, {
            dataField: 'location.name',
            text: 'Localidad',
            filter: textFilter({
                placeholder: 'Ingrese nombre de localidad'
            })
        }];

        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                const fetchUrl = 'api/People/' + row.document;
                const token = localStorage.getItem('token');
                fetch(fetchUrl,
                    {
                        method: 'get',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Bearer ' + token
                         },
                    })
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ detalles: true, document: row.document, user: data, loadingModal: false });
                    });

                const otherFetch = 'api/People/issues/' + row.id;
                fetch(otherFetch)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ issues: data});
                    });
            }
        };

        let contents = this.state.loading ? <p><em>Loading...</em></p>
            : List.renderTable(this.state.beneficiaries, columns, rowEvents, filterFactory());

        return (<div>
           
            <DetailModal user={this.state.user} showModal={this.state.detalles} action={this.handler} issues={this.state.issues} loadingModal={this.state.loadingModal} />
            <h1>Lista Beneficiarios</h1>
            {contents}
        </div>);
    }

    static renderTable(beneficiaries, columns, rowEvents, filter) {
        return (

            <BootstrapTable keyField='document' data={beneficiaries} columns={columns} rowEvents={rowEvents} filter={filter} />);
    }
}