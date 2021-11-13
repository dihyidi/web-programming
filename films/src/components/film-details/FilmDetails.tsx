import { useContext } from 'react';
import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import { FilmContext } from '../../App';
import { Film } from '../../models/film';
import { addFilm } from '../../redux/filmCartSlice';
import { useAppDispatch } from '../../redux/hooks';
import { Button } from '../button/Button';
import styles from './FilmDetails.module.scss';

type FilmDetailsProps = RouteComponentProps;
export const FilmDetails = (props: FilmDetailsProps) => {
    const { films } = useContext(FilmContext);
    const { id } = useParams<{ id: string }>();

    const film: Film = films.find(x => x.id == parseInt(id))!;

    const dispatch = useAppDispatch();
    const handleAddToCart = () => dispatch(addFilm(film))

    return (
        <div className={styles.details}>
            <div className={styles.film}>
                <img src={film.imgUrl} />
                <div className={styles.filmInfo}>
                    <h1>{film.title}</h1>
                    <h3>{film.genre}</h3>
                    <p>{film.description}</p>
                </div>
            </div>
            <div className={styles.actions}>
                <div><b>Price: ${film.price}</b></div>
                <div>
                    <Button label='Go back' onClick={() => props.history.goBack()} />
                    <Button label='Add to cart' onClick={handleAddToCart} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(FilmDetails);
