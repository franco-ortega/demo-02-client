import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cats.module.css';
import CatsDetails from './CatsDetails';

const Cats = ({ cats }) => {
    return (
      <main className={styles.Cats}>
        <p>A list of cats!!</p>
        <CatsDetails cats={cats} />
      </main>
    );
  };

Cats.propTypes = {
    cats: PropTypes.array.isRequired
};

export default Cats;
