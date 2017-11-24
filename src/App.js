import React, { Component } from "react";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DeliveryFormPage from "./features/delivery/pages/DeliveryFormPage";
import DeliveryPage from "./features/delivery/pages/DeliveryPage";
import HomePage from "./features/homepage/pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import "./App.css";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cja8sepu81z3q0122402wih0f"
  }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <section className="hero is-info">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Demande de livraison</h1>
              </div>
            </div>
          </section>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/deliveries/add"
                component={DeliveryFormPage}
              />
              <Route exact path="/deliveries/:id" component={DeliveryPage} />
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
