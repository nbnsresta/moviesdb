import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieProfile from "./components/MovieProfile";

import logo from "./res/logo.svg";
import css from "./app.module.css";

function App() {
  return (
    <div className={css.app}>
      <header className={css.appHeader}>
        <img src={logo} className={css.appLogo} alt="logo" />
        {/* <SearchBar /> */}
      </header>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/movie/:movieId" component={MovieProfile} />
      </Switch>
    </div>
  );
}

export default App;
