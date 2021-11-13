import { Film } from "../../models/film";
import { Button } from "../button/Button";
import styles from "./FilmCards.module.scss";
import { FilmInfo } from "./FilmInfo";

interface FilmCardProps{
  film: Film;
}
export const FilmCard = (props: FilmCardProps) => {
  return (
    <div className={styles.filmCard}>
      <FilmInfo film={props.film} />
      <div className="actions">
        <Button label="Edit" />
        <Button label="Delete" />
      </div>
    </div>
  );
};
