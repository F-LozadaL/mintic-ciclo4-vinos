import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "../index/index";
import Login from "../login/login";
import PrivateRouter from "../auth/privaterouter";
import Clientes from "../clientes/clientes.buscar";

import Regisv from "../regis_v/regis_v"; /* se creara un formulario para registrat vinos, si es necesario borrar en todas las importaciones */
import Fichablanco from "../cardblanco/carblanco";
import Fichatinto from "../cardtinto/cardtinto";
import Fichaprincipal from "../cardprincipal/cardprincipal";

import Catalog from "../catalog/catalog";
// import Card from "../card/card"
export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/login"]} component={Login} />
        <PrivateRouter exact path={["/clientes"]} component={Clientes} />
        <Route exact path={["/", "/index"]} component={Fichaprincipal} />

        <Route exact path={["/regis_v"]} component={Regisv} />
        <Route exact path={["/fichablanco"]} component={Fichablanco} />
        <Route exact path={["/fichatinto"]} component={Fichatinto} />

        <Route exact path={["/catalog"]} component={Catalog} />
        <Route exact path={["/cart"]} component={Inicio} />

        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404 <br />
              Página no encontrada{" "}
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
