import React from 'react'
import { Film } from '../../models/film'
import styles from "./FilmCards.module.scss";

interface FilmInfoProps {
    film: Film;
}
export const FilmInfo = (props: FilmInfoProps) => {
    const { title, description, length, imdb, imgUrl } = props.film;
    return (
        <div className={styles.filmCard}>
            <img
                src={imgUrl}
                alt="card"
            />
            <h5>{title}</h5>
            <p>{description}</p>
            <p>Length: {length} minutes.</p>
            <p>IMDB: {imdb} reviews.</p>
        </div>
    )
}
