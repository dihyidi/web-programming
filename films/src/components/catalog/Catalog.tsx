import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { CatalogFilm } from '../../models/catalogFilm';
import styles from "../films/FilmList.module.scss";
import { CatalogFilmCard } from './CatalogFilmCard';
import { CatalogHeader } from './CatalogHeader';

type CatalogProps = RouteComponentProps & {
    films: CatalogFilm[];
}
export const Catalog = (props: CatalogProps) => {
    const films = props.films;
    return (
        <div>
            <CatalogHeader />
            <ul className={styles.filmList}>
                {films.map((film) => (
                    <li key={film.id}>
                        <CatalogFilmCard film={film} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
