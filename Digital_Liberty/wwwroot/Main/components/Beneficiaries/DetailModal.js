import React from 'react';
import ReactModal from 'react-modal';
import { Link, NavLink } from 'react-router-dom';

export default class DetailModal extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: true
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
        return (
            <div>
               
                <ReactModal
                    isOpen={this.props.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <h1>{this.props.user.document}</h1>
                    <button onClick={this.props.action}>Close Modal</button>
                    <Link to={`/edit/${this.props.user.document}`}>
                        <button>Editar</button>
                    </Link>
                </ReactModal>
            </div>
        );
    }
}
