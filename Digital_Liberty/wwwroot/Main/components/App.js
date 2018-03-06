﻿import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import UserInfo from './UserInfo'

export default class App extends React.Component {
    render() {
        return (
            
                <div className='container body'>
                    <div className='main_container'>
                        <div className='col-md-3 left_col'>
                            <div className='left_col scroll-view'>
                                <div className="navbar nav_title">
                                  <a href="index.html" className="site_title" ><i className="fa fa-paw"></i> <span>Casa Libertad</span></a>
                                </div>
                                <div className="clearfix"></div>
                                <UserInfo />
                                <Sidebar />
                                <Footer />
                            </div>
                        </div>
                        < Header />
                        <div className='right_col'>
                            <Main />
                        </div>
                    </div>
                </div>
            
        );
    }
}