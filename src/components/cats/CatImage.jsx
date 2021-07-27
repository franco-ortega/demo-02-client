import React from 'react';
import styles from './CatImage.module.css';

const CatImage = () => {
    const width = Math.ceil((Math.random() * 6) + 1) * 100;
    const height = Math.ceil((Math.random() * 6) + 1) * 100;
    const catUrl = `https://placekitten.com/${width}/${height}`;
    return (
      <img
      className={styles.CatImage}
        src={catUrl}
        alt="cat"
    />
    )
  }
  

export default CatImage
