import React from "react";
import SectionRow from "./components/SectionRow";
import { categories } from "./store/constants";

import logo from "./res/logo.svg";
import css from "./app.module.css";

function App() {
  return (
    <div className={css.app}>
      <header className={css.appHeader}>
        <img src={logo} className={css.appLogo} alt="logo" />
        {/* <SearchBar /> */}
      </header>
      <main>
        <SectionRow title="Trending Movies" category={categories.trending} />
        <SectionRow title="New Movies" category={categories.new} />
      </main>
    </div>
  );
}

export default App;
