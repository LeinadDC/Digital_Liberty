﻿import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">
                         <li>
                            <Link to={'/'}>
                                <a style={{color:'white'}}><i className="fa fa-bar-chart-o"></i>Dashboard</a>
                            </Link>
                        </li>
                        <li><a><i className="fa fa-edit"></i> Forms <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu">
                                <li><a href="form.html">General Form</a></li>
                                <li><a href="form_advanced.html">Advanced Components</a></li>
                                <li><a href="form_validation.html">Form Validation</a></li>
                                <li><a href="form_wizards.html">Form Wizard</a></li>
                                <li><a href="form_upload.html">Form Upload</a></li>
                                <li><a href="form_buttons.html">Form Buttons</a></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-desktop"></i> UI Elements <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu">
                                <li><a href="general_elements.html">General Elements</a></li>
                                <li><a href="media_gallery.html">Media Gallery</a></li>
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="icons.html">Icons</a></li>
                                <li><a href="glyphicons.html">Glyphicons</a></li>
                                <li><a href="widgets.html">Widgets</a></li>
                                <li><a href="invoice.html">Invoice</a></li>
                                <li><a href="inbox.html">Inbox</a></li>
                                <li><a href="calendar.html">Calendar</a></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-table"></i> Tables <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu">
                                <li><a href="tables.html">Tables</a></li>
                                <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                            </ul>
                        </li>

                        <li><a><i className="fa fa-clone"></i>Layouts <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu">
                                <li><a href="fixed_sidebar.html">Fixed Sidebar</a></li>
                                <li><a href="fixed_footer.html">Fixed Footer</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
             </div>);
    }
}
