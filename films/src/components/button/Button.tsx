import React from 'react'
import styles from "./Button.module.scss";

interface ButtonProps{
    label: string;
}
export const Button = (props: ButtonProps) => {
    return <button className={styles.defaultButton}>{props.label}</button>;
}
