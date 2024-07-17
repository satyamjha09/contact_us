import React from 'react';
import styles from './Button.module.css';

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn} {...rest}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
