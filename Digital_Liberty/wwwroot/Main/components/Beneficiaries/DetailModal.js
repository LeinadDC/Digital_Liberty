import React from 'react';
import ReactModal from 'react-modal';
import { Link, NavLink } from 'react-router-dom';
import Main from '../Main';


export default class DetailModal extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
            location: 'Default',
            showModal: true,
            issues: {},
        };

        this.handleDelete = this.handleDelete.bind(this);
    }



    componentDidMount() {
        this.setState({ user: this.props.state });
        ReactModal.setAppElement('#modalTest');
    }

    handleDelete() {
        const { match: { params }, history } = this.props;
        const user = this.props.user;
        const fetchUrl = 'http://localhost:61271/api/People/' + user.document;
        const token = sessionStorage.getItem('token');
        fetch(fetchUrl,
            {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            });
            history.push('/beneficiarios');
            
    }
    render() {
        let contents = this.props.loadingModal ? <p><em>Loading...</em></p>
            : DetailModal.renderModal(this.props.user, this.props.showModal, this.props.issues, this.props.action, this.handleDelete );

        return (<div>
            {contents}
        </div>);

    }


    static renderModal(user, show, issues, action, handleDelete) {
        return (
            <div>
                <ReactModal
                    isOpen={show}
                    contentLabel="Minimal Modal Example"
                    style={{
                        content: {
                            marginLeft: '200px',
                        }
                    }}>
                    <h2>Beneficiario : {user.firstName} {user.lastName}</h2>
                    <ul>
                        <li>Localidad: {user.location.name}</li>
                        <li>Estado Civil: {user.civilStatus}</li>
                        <li>Cedula de Identidad: {user.document}</li>
                        <li>Nivel Educacion: {user.education}</li>
                        <li>Tiene hijos: {user.hasChildren}</li>
                        <li>Religion: {user.religion}</li>
                        <li>Provincia: {user.province}</li>
                        <li>Trabajo: {user.job}</li>
                        <li>Profesión: {user.profession}</li>

                        <li>Problemas y/o Adicciones: </li>
                        <ul>
                            {issues.map(issue =>
                                <li key={issue.id}>
                                    {issue.issueType}
                                </li>
                            )}
                        </ul>
                    </ul>
                    <button onClick={action}>Cerrar</button>
                    <Link to={`/edit/${user.document}`}>
                        <button>Editar</button>
                    </Link>
                </ReactModal>
            </div>);
    }


}