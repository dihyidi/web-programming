import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { FilmContext } from '../../App';
import { Film } from '../../models/film';
import styles from "../films/FilmList.module.scss";
import { CatalogFilmCard } from './CatalogFilmCard';
import { CatalogHeader } from './CatalogHeader';

type CatalogProps = RouteComponentProps;
export const Catalog = (props: CatalogProps) => {
    const films: Film[] = useContext(FilmContext)
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
