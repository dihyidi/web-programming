import React, { ChangeEvent, useContext } from 'react'
import { FilmContext } from '../../App';
import { Film } from '../../models/film';
import styles from './DropdownCatalogFilter.module.scss';

interface Option {
    name: string;
    value: string;
}
interface DropdownCatalogFilterProps {
    filterType: string;
    name: string;
    options: Option[];
    propertyName: keyof Film;
}
export const DropdownCatalogFilter = (props: DropdownCatalogFilterProps) => {
    const { setFilter } = useContext(FilmContext);

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilter(props.filterType, `${event.target.id} ${event.target.value}`);
    }

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
