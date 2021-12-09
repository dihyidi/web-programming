import React from 'react'
import { SelectedFilm } from '../../models/selectedFilm'
import { addAmount, removeAmount } from '../../redux/filmCartSlice';
import { useAppDispatch } from '../../redux/hooks';
import { Button } from '../button/Button';
import styles from './CartItem.module.scss'

interface CartItemProps {
    selectedFilm: SelectedFilm
}

export const CartItem = (props: CartItemProps) => {
    const { film, amount } = props.selectedFilm;
    const dispatch = useAppDispatch();

    const handleAddAmount = () => dispatch(addAmount(film.id));
    const handleRemoveAmount = () => dispatch(removeAmount(film.id));

    return (
        <div className={styles.item}>
            <img className={styles.img} src={film.imgUrl} />
            <p>{film.title}</p>
            <div>
                <Button label='+' onClick={handleAddAmount} />
                {amount}
                <Button label='-' onClick={handleRemoveAmount} />
            </div>
            ${film.price * amount}
        </div>
    )
}
