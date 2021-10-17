import React from "react";
import { HeaderItem } from "./HeaderItem";
import styles from "./Header.module.scss";
import { Logo } from "../logo/Logo";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.headerLinks}>
        <HeaderItem label="Home" path='/home' />
        <HeaderItem label="Catalog" path='/catalog' />
        <HeaderItem label="Cart" path='/cart' />
      </div>
    </div>
  );
};
