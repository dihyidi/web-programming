import { Film } from '../../models/film';
import { Button } from '../button/Button';
import { FilmInfo } from '../films/FilmInfo';
import styles from './CatalogFilmCard.module.scss';

interface CatalogFilmCardProps {
    film: Film;
    onViewMoreClick: () => void;
}
export const CatalogFilmCard = (props: CatalogFilmCardProps) => {
    const { price } = props.film;
    return (
        <div>
            <FilmInfo film={props.film} />
            <div className={styles.price}><div><b>Price:</b></div> <div>${price}</div></div>
            <Button label='View more' onClick={props.onViewMoreClick} />
        </div>
    )
}
