import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from '../index/index';
import Login from '../login/login'


import Regisv from "../regis_v/regis_v"; /* se creara un formulario para registrat vinos, si es necesario borrar en todas las importaciones */
import fichablanco from "../cardblanco/carblanco";
import Card from "../card/card";

export default function AppRoutes() {
    return (
        <Router>
            <Switch>

                <Route exact path={["/login"]} component={Login} />
                <Route exact path={["/", "/index"]} component={Inicio} />

                <Route exact path={["/regis_v"]} component={Regisv} />
                <Route exact path={["/fichablanco"]} component={fichablanco} />
                <Route exact path={["/card"]} component={Card} />

                <Route exact path={["/catalog"]} component={Inicio} />
                <Route exact path={["/cart"]} component={Inicio} />

                <Route path={"*"} component={() => (
                    <h1 style={{ marginTop: 300 }}>
                        404 <br />Página no encontrada  </h1>)} />

            </Switch>
        </Router>
    )
}
