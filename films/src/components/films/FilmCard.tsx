import { Film } from "../../models/film";
import { Button } from "../button/Button";
import styles from "./FilmCards.module.scss";

interface FilmCardProps {
  film: Film;
}
export const FilmCard = (props: FilmCardProps) => {
  const { title, description, length, imdb } = props.film;
  return (
    <div className={styles.filmCard}>
      <img
        src="https://naurok-test.nyc3.cdn.digitaloceanspaces.com/32897/images/252092_1585632086.jpg"
        alt="card"
      />
      <h5>{title}</h5>
      <p>{description}</p>
      <p>Length: {length} minutes.</p>
      <p>IMDB: {imdb} reviews.</p>
      <div className="actions">
        <Button label="Edit" />
        <Button label="Delete" />
      </div>
    </div>
  );
};
