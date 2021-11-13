import React, { useCallback, useEffect, useState } from "react";
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
import { FilmDetails } from "./components/film-details/FilmDetails";
import { Film } from "./models/film";
import { getFilms } from "./api/Api";
import { MyLoader } from "./components/loader/MyLoader";
import { Cart } from "./components/cart/Cart";

export const FilmContext = React.createContext<AppContext>({} as AppContext);

type Filter = { [key: string]: any };

interface AppContext {
  films: Film[];
  filter: Filter;
  setFilter: (key: string, value: any) => void;
  isLoading: boolean;
}

function App() {
  const [filter, setFilter] = useState<Filter>({ ['searchBy']: '' } as Filter);
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setFilterCallback = useCallback(
    (key: string, value: any | ((prev: any) => any)) => {

      setFilter((prev) => {
        return {
          ...prev,
          [key]: typeof value === "function" ? value(prev[key]) : value
        }
      })

    },
    [],
  )

  const context: AppContext = {
    films: films,
    filter,
    setFilter: setFilterCallback,
    isLoading
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await getFilms(filter);
        setFilms(res.data as Film[]);
      }
      catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })()
  }, [filter])

  return (
    <div className="App">
      <MyLoader isLoading={isLoading} />
      <Router>
        <FilmContext.Provider value={context}>
          <Header />
          <Switch>
            <Route path="/home" render={(props) => <Home {...props} />} />
            <Route exact path="/catalog" render={(props) => <Catalog {...props} />} />
            <Route path="/cart" render={(props) => <Cart {...props} />} />
            <Route path="/catalog/:id" render={(props) => <FilmDetails {...props} />} />
            <Route path="/" render={(props) => <Home {...props} />} />
          </Switch>
          <Footer />
        </FilmContext.Provider>
      </Router>
    </div>
  );
}

export default App;

