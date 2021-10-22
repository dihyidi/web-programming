import React from "react";
import { Logo } from "../logo/Logo";
import styles from "./Footer.module.scss";
import { FooterIcon } from "./FooterIcon";

import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
import twitter from "../../icons/twitter.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInfo}>
        <h3>Branding stuff</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <Logo />
      </div>
      <div className={styles.footerIcons}>
        <FooterIcon icon={{ imageUrl: facebook, alt: "facebook" }} />
        <FooterIcon icon={{ imageUrl: instagram, alt: "instagram" }} />
        <FooterIcon icon={{ imageUrl: twitter, alt: "twitter" }} />
      </div>
    </div>
  );
};
