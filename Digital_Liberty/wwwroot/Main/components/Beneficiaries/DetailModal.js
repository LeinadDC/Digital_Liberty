import React from 'react';
import ReactModal from 'react-modal';
import { Link, NavLink } from 'react-router-dom';


export default class DetailModal extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: true,
            issues: {}
        };

     
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }



    componentDidMount() {
        ReactModal.setAppElement('#modalTest');
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        this.props.action;
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <ReactModal
                    isOpen={this.props.showModal}
                    contentLabel="Minimal Modal Example"
                    style={{
                        content: {
                        marginLeft:'300px',
                         }
                    }}>
                    <h1>{user.document}</h1>
                    <ul>
                        <li>Nombre: {user.firstName}</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>

                        <ul>
                            {this.props.issues.map(issue =>
                                <li key={issue.id}>
                                    {issue.issueType}
                                </li>
                            )}
                        </ul>
                    </ul>
                    <button onClick={this.props.action}>Cerrar</button>
                    <Link to={`/edit/${this.props.user.document}`}>
                        <button>Editar</button>
                    </Link>
                </ReactModal>
            </div>
        );
    }
}
