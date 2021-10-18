import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={require("../../icons/logo.svg").default} alt="logo" />
    </div>
  );
};
