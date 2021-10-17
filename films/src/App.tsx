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
import { CATALOG_FILMS } from "./constants/catalogFilms";
import { FILMS } from "./constants/films";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" render={(props) => <Home films={FILMS} {...props} />} />
          <Route path="/catalog" render={(props) => <Catalog films={CATALOG_FILMS} {...props} />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
