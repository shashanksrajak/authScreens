import React from "react";
import styles from "./style.module.css";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      className={styles.input_element}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      required
    />
  );
};

export default Input;
