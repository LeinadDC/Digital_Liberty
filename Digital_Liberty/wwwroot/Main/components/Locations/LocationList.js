import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from 'react-router-dom';

export default class LocationList extends React.Component {
    constructor() {
        super();
        this.state = {
            places: [], loading: true
        };
        this.handler = this.handler.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:61271/api/Locations/GetLugares')
            .then(response => response.json())
            .then(data => {
                this.setState({ places: data, loading: false });
            });
    }

    handler(e) {
        e.preventDefault()
        this.setState({
            loading: false
        });
    }

    render() {

        const columns = [{
            dataField: 'id',
            text: 'ID'
        }, {
            dataField: 'name',
            text: 'Nombre'
        }];

        let contents = this.state.loading ? <p><em>Loading...</em></p>
            : LocationList.renderTable(this.state.places, columns);

        return (<div>
            <h1>Lista Lugares</h1>
            {contents}
        </div>);
    }

    static renderTable(places, columns) {
        return (
            <div>
                <BootstrapTable keyField='document' data={places} columns={columns} />
                <Link to={`/lugares/crear`}>
                    <button>Agregar nueva localidad</button>
                </Link>
            </div>);
    }
}
