import React from "react";
import { Film } from "../../models/film";
import styles from "./Home.module.scss";

interface HomeProps {
  film: Film;
}
export const Home = (props: HomeProps) => {
  const { title, description, length, imdb } = props.film;
  return (
    <div className={styles.home}>
      <img src="https://naurok-test.nyc3.cdn.digitaloceanspaces.com/32897/images/252092_1585632086.jpg" />
      <div className={styles.homeInfo}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
