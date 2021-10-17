import React from 'react';
import { CatalogFilm } from '../../models/catalogFilm';
import { Film } from '../../models/film';
import { FilmInfo } from '../films/FilmInfo';
import styles from './CatalogFilmCard.module.scss';

interface CatalogFilmCardProps {
    film: CatalogFilm;
}
export const CatalogFilmCard = (props: CatalogFilmCardProps) => {
    const { id, title, description, length, imdb, price } = props.film;
    const filmInfo: Film = { id: id, title: title, description: description, length: length, imdb: imdb };
    return (
        <div>
            <FilmInfo film={filmInfo} />
            <div className={styles.price}><div><b>Price:</b></div> <div>${price}</div></div>
        </div>
    )
}
