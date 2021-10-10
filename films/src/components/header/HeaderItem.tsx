import React from 'react'
import styles from "./HeaderItem.module.scss";

interface HeaderItemProps{
    label: string;
}
export const HeaderItem = (props: HeaderItemProps) => {
    return (
        <div className={styles.headerItem}>
            {props.label}
        </div>
    )
}
