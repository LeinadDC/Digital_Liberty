import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">
                        <li>
                            <Link to={'/login'}>
                                <a style={{ color: 'white' }}><i className="fa fa-bar-chart-o"></i>Log</a>
                            </Link>
                        </li>
                         <li>
                            <Link to={'/'}>
                                <a style={{color:'white'}}><i className="fa fa-bar-chart-o"></i>Dashboard</a>
                            </Link>
                         </li>
                         <li>
                             <Link to={'/create'}>
                                 <a style={{ color: 'white' }}><i className="fa fa-edit"></i>Agregar beneficiario</a>
                             </Link>
                         </li>
                         <li>
                             <Link to={'/editBenef'}>
                                 <a style={{ color: 'white' }}><i className="fa fa-edit"></i>Editar beneficiario</a>
                             </Link>
                         </li>
                         <li>
                             <Link to={'/beneficiarios'}>
                                 <a style={{ color: 'white' }}><i className="fa fa-table"></i>Lista de beneficiarios</a>
                             </Link>
                         </li>
                    </ul>
                </div>
             </div>);
    }
}
