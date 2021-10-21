import React, { useCallback, useState } from "react";
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
import { Film } from "./models/film";

export const FilmContext = React.createContext<AppContext>({} as AppContext);
type Filter = { ["orderBy"]: { property: keyof Film, direction: string } };
interface AppContext {
  films: Film[];
  filter: Filter;
  setFilter: (key: string, value: object) => void;
}

function App() {
  const [filter, setFilter] = useState<Filter>({ ["orderBy"]: { property: 'id', direction: 'asc' } } as Filter);

  const setFilterCallback = useCallback(
    (key: string, value: object) => {
      setFilter((prev) => {
        return {
          ...prev,
          [key]: value
        }
      })
    },
    [],
  )
  const context: AppContext = {
    films: FILMS,
    filter: filter,
    setFilter: setFilterCallback
  }

  return (
    <div className="App">
      <Router>
        <FilmContext.Provider value={context}>
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
