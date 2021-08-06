import React, { useState, Component } from "react";
import NavBar from "./components/navbar";
import HomePage from "./pages/homepage";
import About from "./pages/about";
import { Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalstyle.js";
import { lightTheme, darkTheme } from "./components/theme.js";
import { DarkMode } from "./components/darkmode.js";
import Toggle from "./components/toggle.js";

const App = () => {
  const [theme, themeToggler, mountedComponent] = DarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <NavBar />
          <main className="content-container">
            <Toggle theme={theme} toggleTheme={themeToggler} />
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/about" component={About}></Route>
          </main>
        </>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
