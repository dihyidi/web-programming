import React from 'react';
import { Button } from '../button/Button';
import { CatalogFilter } from './CatalogFilter';
import styles from './CatalogHeader.module.scss';

export const CatalogHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.filters}>
                <CatalogFilter name='Price' options={['asc', 'desc']} />
                <CatalogFilter name='Length' options={['asc', 'desc']} />
                <CatalogFilter name='IMDB' options={['asc', 'desc']} />
            </div>
            <Button label='Apply' />
        </div>
    )
}
