import "./App.css";
import { FilmList } from "./components/films/FilmList";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { FILMS } from "./constants/films";

function App() {
  return (
    <div className="App">
      <Header />
      <Home film={FILMS[0]} />
      <FilmList films={FILMS} />
      <Footer />
    </div>
  );
}

export default App;
