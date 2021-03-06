﻿import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';

export default class Layout extends React.Component {
       render() {
        return (<div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                    <Header />
                </div>
                <div className='col-sm-9'>
                    {this.props.children}
                </div>
            </div>
        </div>);
    }
}