import React, { useState, Component } from "react";
import NavBar from "./components/navbar";
import HomePage from "./pages/homepage";
import About from "./pages/about";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="content-container">
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" component={About}></Route>
      </main>
    </React.Fragment>
  );
};

export default App;
