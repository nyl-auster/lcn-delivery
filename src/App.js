import React, { Component } from "react";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CourseForm from "./pages/CourseForm";
import PostFormPage from "./pages/PostFormPage";
import DeliveryFormPage from "./pages/DeliveryFormPage";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
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
              <Route exact path="/courses/add" component={CourseForm} />
              <Route exact path="/posts/add" component={PostFormPage} />
              <Route exact path="/posts" component={PostListPage} />
              <Route exact path="/delivery/add" component={DeliveryFormPage} />
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
