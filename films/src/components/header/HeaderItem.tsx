import React from 'react'
import styles from "./HeaderItem.module.scss";
import { Link, NavLink } from "react-router-dom";

interface HeaderItemProps {
    label: string;
    path: string
}
export const HeaderItem = (props: HeaderItemProps) => {
    return (
        <NavLink className={styles.headerItem} activeClassName={styles.selected} to={props.path}>
            {props.label}
        </NavLink>
    )
}
