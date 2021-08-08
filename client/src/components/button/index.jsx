import React from "react";
import styles from "./style.module.css";

const Button = ({ type, children, onClick }) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
