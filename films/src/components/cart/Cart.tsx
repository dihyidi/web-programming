import React from 'react'
import { shallowEqual } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks'
import { Button } from '../button/Button';
import { CartItem } from './CartItem';

type CartProps = RouteComponentProps;
export const Cart = (props: CartProps) => {
    const { films } = useAppSelector(state => {
        return {
            films: state.filmCart.selectedFilms
        }
    }, shallowEqual);

    const handleOnBuyClick = () => props.history.push('/order');
    return (
        <div>
            <h2>Shopping Cart</h2>
            {Object.entries(films).map(value => {
                const [id, film] = value;
                return <CartItem key={id} selectedFilm={film} />
            })}
            <div>Total amount: ${Object.entries(films).reduce<number>((a, b) => a + b[1].film.price * b[1].amount, 0)}</div>
            <Button label='Buy' onClick={handleOnBuyClick} disabled={Object.entries(films).length === 0} />
        </div>
    )
}
