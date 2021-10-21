import React, { useState } from "react";
import { Film } from "../../models/film";
import { Button } from "../button/Button";
import { FilmCard } from "./FilmCard";
import styles from "./FilmList.module.scss";

interface FilmListProps {
  films: Film[];
}
export const FilmList = (props: FilmListProps) => {
  const { films } = props;

  const [showMore, setShowMore] = useState(false);

  return (
    <React.Fragment>
      <ul className={styles.filmList}>
        {films.slice(0, showMore ? films.length : 8).map((film) => (
          <li key={film.id}>
            <FilmCard film={film} />
          </li>
        ))}
      </ul>
      <Button onClick={() => setShowMore(!showMore)} label={!showMore ? 'Show more' : 'Show less'} />
    </React.Fragment>
  );
};
