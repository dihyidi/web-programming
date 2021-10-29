import React from "react";
import { Film } from "../../models/film";
import styles from "./Heading.module.scss";

interface HeadingProps {
  film: Film;
}
export const Heading = (props: HeadingProps) => {
  const { title, genre, description, imgUrl } = props.film;
  return (
    <div className={styles.heading}>
      <img src={imgUrl} />
      <div className={styles.headingInfo}>
        <h1>{title}</h1>
        <h3>{genre}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
