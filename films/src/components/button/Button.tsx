import React from 'react'
import styles from "./Button.module.scss";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
}
export const Button = (props: ButtonProps) => {
    return <button className={styles.defaultButton} onClick={props.onClick} type={props.type} disabled={props.disabled}>{props.label}</button>;
}
