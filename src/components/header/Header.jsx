import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
      <>
        <h1 className={styles.Header}>Cats</h1>
        <p>A list of cats!!</p>
      </>
    );
  };

export default Header
