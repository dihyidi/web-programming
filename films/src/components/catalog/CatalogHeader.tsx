import React from 'react';
import { nameof } from '../../helpers/nameof';
import { Film } from '../../models/film';
import { DropdownCatalogFilter } from './DropdownCatalogFilter';
import styles from './CatalogHeader.module.scss';
import { SelectCatalogFilter } from './SelectCatalogFilter';

export const CatalogHeader = () => {

    return (
        <div className={styles.header}>
            <div className={styles.filters}>
                <DropdownCatalogFilter filterType='orderBy' name='IMDB' propertyName={nameof<Film>('imdb')} options={[{ name: 'asc', value: 'asc' }, { name: 'desc', value: 'desc' }]} />
                <SelectCatalogFilter filterType='genres' name='Genre' options={[{ name: 'Horror', value: 'Horror' }, { name: 'Comedy', value: 'Comedy' }, { name: 'Drama', value: 'Drama' }]} />
            </div>
        </div>
    )
}
