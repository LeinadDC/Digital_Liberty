import React from 'react';

export default class Form extends React.Component {
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

        return (<h1> Hola {user.firstName} </h1>);
    }
}
