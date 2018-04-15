import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import UserInfo from './UserInfo'

export default class App extends React.Component {
    render() {
        return (
                    <div className='main_container'>
                        <div className='col-md-3 left_col'>
                            <div className='left_col scroll-view'>
                                <div className="navbar nav_title">
                                  <a href="index.html" className="site_title" ><i className="fa fa-paw"></i> <span>CR Aprende</span></a>
                                </div>
                                <div className="clearfix"></div>
                                <UserInfo />
                                <Sidebar />
                                <Footer />
                            </div>
                        </div>
                        < Header />
                        <div className="right_col" role="main">
                            <div id="modalTest">
                            < Main />
                            </div>
                        </div>
              
                        <footer>
                            <div className="clearfix"></div>
                        </footer>
                    </div>
  
            
        );
    }
}