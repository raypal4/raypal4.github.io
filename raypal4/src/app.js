import React, { Component } from "react";
import NavBar from "./components/navbar";
import HomePage from "./pages/homepage";
import About from "./pages/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <main className="container">
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/about" component={About}></Route>
            </Switch>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
