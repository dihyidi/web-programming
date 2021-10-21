import React from 'react';
import { nameof } from '../../helpers/nameof';
import { Film } from '../../models/film';
import { Button } from '../button/Button';
import { CatalogFilter } from './CatalogFilter';
import styles from './CatalogHeader.module.scss';

export const CatalogHeader = () => {
    
    return (
        <div className={styles.header}>
            <div className={styles.filters}>
                <CatalogFilter name='Price' propertyName={nameof<Film>('price')} options={[{ name: 'asc', value: 'asc' }, { name: 'desc', value: 'desc' }]} />
                <CatalogFilter name='Length' propertyName={nameof<Film>('length')} options={[{ name: 'asc', value: 'asc' }, { name: 'desc', value: 'desc' }]} />
                <CatalogFilter name='IMDB' propertyName={nameof<Film>('imdb')} options={[{ name: 'asc', value: 'asc' }, { name: 'desc', value: 'desc' }]} />
            </div>
        </div>
    )
}
