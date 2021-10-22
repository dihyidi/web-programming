import React, { ChangeEvent, useContext } from 'react'
import { FilmContext } from '../../App';
import { Film } from '../../models/film';
import styles from './CatalogFilter.module.scss';

interface Option {
    name: string;
    value: string;
}
interface CatalogFilterProps {
    name: string;
    options: Option[];
    propertyName: keyof Film;
}
export const CatalogFilter = (props: CatalogFilterProps) => {
    const { setFilter } = useContext(FilmContext);

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => { setFilter('orderBy', { property: event.target.id, direction: event.target.value }); }

    return (
        <div className={styles.filter}>
            <label htmlFor={props.name}> {props.name} </label>
            <select id={props.propertyName} onChange={onChangeHandler}>
                {props.options.map((option) => (
                    <option value={option.value}>
                        {option.name}
                    </option>))}
            </select>
        </div>
    )
}
