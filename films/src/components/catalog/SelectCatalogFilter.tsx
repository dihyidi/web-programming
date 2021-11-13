import React, { ChangeEvent, ChangeEventHandler, useContext } from 'react'
import { FilmContext } from '../../App';

interface Option {
    name: string;
    value: string;
}
interface SelectCatalogFilterProps {
    filterType: string;
    name: string;
    options: Option[];
}
export const SelectCatalogFilter = (props: SelectCatalogFilterProps) => {
    const { filterType, name, options } = props;

    const { filter, setFilter } = useContext(FilmContext);
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(filterType, (array: any) => {
            const prev = (array || []) as string[];

            const result = event.target.checked
                ? [...prev, event.target.value]
                : [...prev.slice(0, prev.indexOf(event.target.value)), ...prev.slice(prev.indexOf(event.target.value) + 1)];

            return result;
        })
    }

    return (
        <>
            {name}
            <ul>
                {options.map(option => (
                    <li key={option.name}>
                        <input
                            type="checkbox"
                            id={option.name}
                            name={option.name}
                            value={option.value}
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <label htmlFor={option.name}>{option.name}</label>
                    </li>
                ))}
            </ul>
        </>
    )
}
