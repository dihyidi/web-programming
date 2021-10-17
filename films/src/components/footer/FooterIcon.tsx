import React from "react";
import { Icon } from "../../models/icon";
import styles from "./FooterIcon.module.scss";

interface FooterIconProps {
  icon: Icon;
}
export const FooterIcon = (props: FooterIconProps) => {
  const { imageUrl, alt } = props.icon;
  return (
    <div className={styles.footerIcon}>
      <img src={imageUrl} alt={alt} />
    </div>
  );
};
