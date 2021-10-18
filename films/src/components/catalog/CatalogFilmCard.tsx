import { Film } from '../../models/film';
import { FilmInfo } from '../films/FilmInfo';
import styles from './CatalogFilmCard.module.scss';

interface CatalogFilmCardProps {
    film: Film;
}
export const CatalogFilmCard = (props: CatalogFilmCardProps) => {
    const { id, title, description, length, imdb, price } = props.film;
    return (
        <div>
            <FilmInfo film={props.film} />
            <div className={styles.price}><div><b>Price:</b></div> <div>${price}</div></div>
        </div>
    )
}
