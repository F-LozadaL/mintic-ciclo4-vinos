import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from '../index/index';
import Login from '../login/login'

export default function AppRoutes() {
    return (
        <Router>
            <Switch>

                <Route exact path={["/login"]} component={Login} />
                <Route exact path={["/", "/index"]} component={Inicio} />

                <Route exact path={["/catalog"]} component={Inicio} />
                <Route exact path={["/cart"]} component={Inicio} />

                <Route path={"*"} component={() => (
                    <h1 style={{ marginTop: 300 }}>
                        404 <br />Página no encontrada  </h1>)} />

            </Switch>
        </Router>
    )
}
