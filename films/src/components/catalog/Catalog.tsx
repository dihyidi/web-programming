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
                        x.description.toLowerCase().includes((filter['searchBy'] as string).toLowerCase()))
                    .map((film) => (
                        <li key={film.id}>
                            <CatalogFilmCard film={film} onViewMoreClick={() => props.history.push(`/catalog/${film.id}`)} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}
