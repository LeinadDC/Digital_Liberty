import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import List from './Beneficiaries/List'
import Login from './Login'
import Edit from './Beneficiaries/Edit'
import LocationList from './Locations/LocationList'
import CreateLocation from './Locations/CreateLocation'



export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/beneficiarios' component={List} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/lugares/lista' component={LocationList} />
                    <Route path='/lugares/crear' component={CreateLocation} />
                    <Route path="/edit/:document" component={Edit} />
                </Switch>
            </main>);
    }
}

