import React from "react";
import { Film } from "../../models/film";
import styles from "./Heading.module.scss";

interface HeadingProps {
  film: Film;
}
export const Heading = (props: HeadingProps) => {
  const { title, description, length, imdb } = props.film;
  return (
    <div className={styles.heading}>
      <img src="https://naurok-test.nyc3.cdn.digitaloceanspaces.com/32897/images/252092_1585632086.jpg" />
      <div className={styles.headingInfo}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
