import React, { useState, Component } from "react";
import NavBar from "./components/navbar.jsx";
import HomePage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import InstaPiano from "./pages/instapiano.jsx";

import { Route } from "react-router-dom";
import instapiano from "./pages/instapiano.jsx";

const App = () => {
  const menuButtonClickMain = () => {
    const sideBar = document.querySelector(".side-bar");
    if (sideBar.classList.contains("active")) {
      sideBar.classList.remove("active");
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <main
        className="content-container"
        onClick={menuButtonClickMain.bind(this)}
      >
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/music" component={InstaPiano}></Route>
      </main>
    </React.Fragment>
  );
};

export default App;
