import React from 'react'
import Header from './Header'
import Main from './Main'

export default class App extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <Header />
                    </div>
                    <div className='col-sm-12'>
                        <Main />
                    </div>
                </div>
            </div>
        );
    }
}