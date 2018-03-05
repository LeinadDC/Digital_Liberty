import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Header from './Header'

export default class App extends React.Component {
    render() {
        return (
            <div className='nav-md'>
                <div className='container body'>
                    <div className='main_container'>
                        <div className='col-md-3 left_col'>
                            <div className='left_col scroll-view'>
                                <Sidebar />
                               
                            </div>
                        </div>
                        < Header />
                        <div className='right_col'>
                            <Main />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}