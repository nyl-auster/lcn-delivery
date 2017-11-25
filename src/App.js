import React, { Component } from "react";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DeliveryRequestFormPage from "./modules/deliveryRequest/pages/DeliveryRequestFormPage";
import DeliveryRequestRoutes from "./modules/deliveryRequest/DeliveryRequestRoutes";
import DeliveryPage from "./modules/delivery/pages/DeliveryPage";
import DeliveryListPage from "./modules/delivery/pages/DeliveryListPage";
import Menu from "./modules/app/components/Menu";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import "./App.css";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cja8sepu81z3q0122402wih0f"
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <section className="hero is-info">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">Demande de livraison</h1>
                </div>
              </div>
              <div className="hero-foot">
                <Menu />
              </div>
            </section>
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <div className="section container">
                    <NavLink
                      to="/delivery-requests-form"
                      className="button is-info"
                    >
                      Ajouter une livraison
                    </NavLink>
                  </div>
                )}
              />
              <DeliveryRequestRoutes />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
