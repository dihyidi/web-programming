import React from 'react'
import styles from "./Button.module.scss";

interface ButtonProps {
    label: string;
    onClick?: () => void;
}
export const Button = (props: ButtonProps) => {
    return <button className={styles.defaultButton} onClick={props.onClick}>{props.label}</button>;
}
