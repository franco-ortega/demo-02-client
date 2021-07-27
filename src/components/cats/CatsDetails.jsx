import React from 'react';
import PropTypes from 'prop-types';
import styles from './CatsDetails.module.css';

const CatsDetails = ({ cats }) => {
    const catList = cats.map(cat => (
        <ul
          key={cat.id}
          className={styles.CatsDetailsList}
        >
          <li>Name: {cat.catName}</li>
          <li>Breed: {cat.breed}</li>
          <li>Fur Color: {cat.furColor}</li>
          <li>Age: {cat.age}</li>
        </ul>
      ));
    return (
        <section className={styles.CatsDetails}>
          {catList}
        </section>
    );
};

CatsDetails.propTypes = {
    cats: PropTypes.array.isRequired
};

export default CatsDetails;
