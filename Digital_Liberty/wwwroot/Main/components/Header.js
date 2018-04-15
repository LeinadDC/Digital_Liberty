import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <div className="nav toggle">
                            <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="">
                                <a href="javascript:;" className="user-profile" aria-expanded="false">
                                    <img src="images/img.jpg" alt="" />Costa Rica Aprende
                                 </a>
                            </li>
              </ul>
            </nav>
          </div>
                </div>);
    }
}