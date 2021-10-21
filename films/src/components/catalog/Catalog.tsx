import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { FilmContext } from '../../App';
import styles from "../films/FilmList.module.scss";
import { CatalogFilmCard } from './CatalogFilmCard';
import { CatalogHeader } from './CatalogHeader';

type CatalogProps = RouteComponentProps;
export const Catalog = (props: CatalogProps) => {
    const { films, filter } = useContext(FilmContext);
    return (
        <div>
            <CatalogHeader />
            <ul className={styles.filmList}>
                {films
                    .filter(x =>
                        x.description.includes(filter['searchBy'].value.toLowerCase()))
                    .sort((a, b) => {
                        const isAsc = filter['orderBy'].direction == "asc";

                        if (a[filter['orderBy'].property] >= b[filter['orderBy'].property])
                            return isAsc ? 1 : -1;
                        else
                            return isAsc ? -1 : 1;
                    }).map((film) => (
                        <li key={film.id}>
                            <CatalogFilmCard film={film} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}
