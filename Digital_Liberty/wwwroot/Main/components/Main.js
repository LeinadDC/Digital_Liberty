import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import FetchData from './FetchData'
import Dashboard from './Dashboard'



export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/schedule' component={Schedule} />
                    <Route path='/fetchdata' component={FetchData} />
                </Switch>
            </main>);
    }
}

