import { Film } from "../../models/film";
import { FilmCard } from "./FilmCard";
import styles from "./FilmList.module.scss";

interface FilmListProps {
  films: Film[];
}
export const FilmList = (props: FilmListProps) => {
  const films = props.films;
  return (
    <ul className={styles.filmList}>
      {films.map((film) => (
        <li key={film.id}>
          <FilmCard film={film} />
        </li>
      ))}
    </ul>
  );
};
