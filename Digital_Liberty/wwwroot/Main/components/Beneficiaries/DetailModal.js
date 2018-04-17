import React from 'react';
import ReactModal from 'react-modal';
import { Link, NavLink } from 'react-router-dom';


export default class DetailModal extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
            location: 'Default',
            showModal: true,
            issues: {},
        };


        this.handleCloseModal = this.handleCloseModal.bind(this);
    }



    componentDidMount() {
        this.setState({ user: this.props.state });
        ReactModal.setAppElement('#modalTest');
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        this.props.action;
    }

    render() {
        let contents = this.props.loadingModal ? <p><em>Loading...</em></p>
            : DetailModal.renderModal(this.props.user, this.props.showModal, this.props.issues, this.props.action);

        return (<div>
            {contents}
        </div>);

    }


    static renderModal(user, show, issues, action) {
        return (
            <div>
                <ReactModal
                    isOpen={show}
                    contentLabel="Minimal Modal Example"
                    style={{
                        content: {
                            marginLeft: '250px',
                        }
                    }}>
                    <h1>{user.firstName}</h1>
                    <ul>
                        <li>Nombre: {user.firstName}</li>
                        <li>Localidad: {user.location.name}</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>

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