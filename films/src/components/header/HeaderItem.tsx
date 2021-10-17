import React from 'react'
import styles from "./HeaderItem.module.scss";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

interface HeaderItemProps {
    label: string;
    path: string
}
export const HeaderItem = (props: HeaderItemProps) => {
    return (
        <Link className={styles.headerItem} to={props.path}>
            {props.label}
        </Link>
    )
}
