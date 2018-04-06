import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import FetchData from './FetchData'
import Dashboard from './Dashboard'
import List from './Beneficiaries/List'



export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/schedule' component={Schedule} />
                    <Route path='/fetchdata' component={FetchData} />
                    <Route path='/list' component={List} />
                </Switch>
            </main>);
    }
}

