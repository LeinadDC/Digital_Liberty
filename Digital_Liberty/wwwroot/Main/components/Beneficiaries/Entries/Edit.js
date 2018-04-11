import React from 'react';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        const fetchUrl = '/api/People/' + params.document;
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ user: data });
            });
    }


    render() {
        const { user } = this.state;

        return (
            <div>
                <h1> Usuario a Editar: {user.firstName} </h1>
                <h2>TODO</h2>
            </div>
        );
    }
}
