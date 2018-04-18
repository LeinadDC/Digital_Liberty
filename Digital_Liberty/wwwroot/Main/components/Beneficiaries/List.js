import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import DetailModal from './DetailModal';
import { Link } from 'react-router-dom';
import Main from '../Main';

export default class List extends React.Component {
    constructor() {
        super();
        this.state = {
            beneficiaries: [], loading: true, detalles: false, document: 'empty', user: {}, issues: [], loadingModal: true, auth: true
        };
        this.handler = this.handler.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.signAlert = this.signAlert.bind(this);
    }


    componentDidMount() {
        const check = sessionStorage.getItem('token');
        if (check) {
            this.setState({ auth: false });
            this.fetchData()
        } else {
            this.setState({ auth: true });
        }
    }

    handler(e) {
        e.preventDefault()
        this.setState({
            detalles: false
        });
    }

    fetchData() {
        const token = sessionStorage.getItem('token');
        fetch('api/People/GetBeneficiarios',
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
                this.setState({ beneficiaries: data, loading: false });
            });

    }

    signAlert() {
        return (
            <div>
                <h2>Debe iniciar sesion de nuevo</h2>
                <Link to={`/`}>
                    <button>Iniciar sesion</button>
                </Link>
            </div>
            );
    }

    render() {

        const selectOptions = {
            0: 'Si',
            1: 'No'
        };

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
        }
        ];

        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                const fetchUrl = 'api/People/' + row.document;
                const token = sessionStorage.getItem('token');
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
                fetch(otherFetch,
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
                        this.setState({ issues: data});
                    });
            }
        };

        let contents = this.state.auth ? this.signAlert()
            : List.renderTable(this.state.beneficiaries, columns, rowEvents, filterFactory(), paginationFactory());

        return (<div>
            <h1>Lista Beneficiarios</h1>
            {contents}
            <DetailModal user={this.state.user} showModal={this.state.detalles} action={this.handler} issues={this.state.issues} loadingModal={this.state.loadingModal} />
        </div>);
    }

    static renderTable(beneficiaries, columns, rowEvents, filter, pagination) {
        return (
            <BootstrapTable keyField='document' data={beneficiaries} columns={columns} rowEvents={rowEvents} filter={filter} pagination={pagination} />);
    }
}