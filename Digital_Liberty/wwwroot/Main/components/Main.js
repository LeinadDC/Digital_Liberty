import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import FetchData from './FetchData'
import Dashboard from './Dashboard'

// Este componente es el que va a renderizar todas las rutas de la aplicación
// Para esto se importan los componentes y se utiliza la propiedad 'path' de Route

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

