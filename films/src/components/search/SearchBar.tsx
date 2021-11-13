import React, { ChangeEvent, useContext } from 'react'
import { FilmContext } from '../../App';
import styles from './SearchBar.module.scss';

export const SearchBar = () => {
    const { setFilter } = useContext(FilmContext);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter('searchBy', event.target.value);
    }

    return (
        <input type="text" placeholder="Search.." onChange={onChangeHandler} className={styles.bar} />
    )
}
