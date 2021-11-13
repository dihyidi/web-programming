import React from "react";
import { HeaderItem } from "./HeaderItem";
import styles from "./Header.module.scss";
import { Logo } from "../logo/Logo";
import { useLocation } from "react-router";
import { SearchBar } from "../search/SearchBar";

export const Header = () => {
  const location = useLocation();
  return (
    <div className={styles.header}>
      <div className={styles.main}>
        <Logo />
        <div className={styles.links}>
          <HeaderItem label="Home" path='/home' />
          <HeaderItem label="Catalog" path='/catalog' />
          <HeaderItem label="Cart" path='/cart' />
        </div>
      </div>
      {location.pathname === '/catalog' && <SearchBar />}
    </div>
  );
};
