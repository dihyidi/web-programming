import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './MyLoader.module.scss';

interface MyLoaderProps {
    isLoading: boolean;
}
export const MyLoader = (props: MyLoaderProps) => {
    return <>
        {
            props.isLoading && <div className={styles.container}> <Loader type="Circles" color="#00BFFF" height={80} width={80} /> </div>
        }
    </>

}
