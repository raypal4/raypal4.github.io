import React, { Component } from "react";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <HomePage />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
