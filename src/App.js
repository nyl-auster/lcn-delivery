import React, { Component } from "react";
import CourseForm from "./components/CourseForm";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Les coursiers nantais - prise de livraison
                </h1>
              </div>
            </div>
          </section>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/course/add" component={CourseForm} />
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
