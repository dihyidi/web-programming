import React, { Dispatch, SetStateAction } from "react";
import { HeaderItem } from "./HeaderItem";
import styles from "./Header.module.scss";
import { Logo } from "../logo/Logo";
import { useLocation } from "react-router";
import { SearchBar } from "../search/SearchBar";
import { Button } from "../button/Button";
import { RouterProps } from "react-router-dom";

export type HeaderProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const Header = (props: HeaderProps) => {
  const location = useLocation();
  const handleLogout = () => {
    props.setIsAuthenticated(false);
    localStorage.clear();
  }
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
      <Button label="Log out" onClick={handleLogout} />
    </div>
  );
};
