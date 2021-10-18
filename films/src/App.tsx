import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";
import { Catalog } from "./components/catalog/Catalog";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { FILMS } from "./constants/films";

export const FilmContext = React.createContext(FILMS);

function App() {
  return (
    <div className="App">
      <Router>
        <FilmContext.Provider value={FILMS}>
          <Header />
          <Switch>
            <Route path="/home" render={(props) => <Home {...props} />} />
            <Route path="/catalog" render={(props) => <Catalog {...props} />} />
            <Route path="/cart" render={() => <div>Coming soon...</div>} />
            <Route path="/" render={(props) => <Home {...props} />} />
          </Switch>
          <Footer />
        </FilmContext.Provider>
      </Router>
    </div>
  );
}

export default App;
