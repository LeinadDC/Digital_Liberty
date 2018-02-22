import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (<div className='main-nav'>
            <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'}>Watch</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={'/'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/schedule'} activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Schedule
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Fetch Data
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
    }
}

//return (
//    <header>
//        <nav>
//            <ul>
//                <li><Link to='/'>Home</Link></li>
//                <li><Link to='/schedule'>Schedule</Link></li>
//            </ul>
//        </nav>
//    </header>);