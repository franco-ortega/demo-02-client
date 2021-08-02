import React, { useState } from 'react';
import { getCats, postCat } from '../../services/catApi';
import PropTypes from 'prop-types';
import styles from './CatForm.module.css';

const CatForm = ({ setCats }) => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [furColor, setFurColor] = useState('');
    const [age, setAge] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        const data = { catName: name, breed, furColor, age }

        postCat(data)
        .then(response => {
            console.log('Response: ' + response);
            getCats()
              .then(cats => setCats(cats));

            setName('');
            setBreed('');
            setFurColor('');
            setAge('');
        });
    };

    return (
        <form
          className={styles.CatForm}
          onSubmit={onFormSubmit}>
            <p>Add your cat to the list:</p>
            <p>

            <label htmlFor="name">
                <input required
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={({ target }) => setName(target.value)} />
            </label>
            <label htmlFor="breed">
            <input required
                  id="breed"
                  name="breed"
                  placeholder="Breed"
                  type="text"
                  value={breed}
                  onChange={({ target }) => setBreed(target.value)} />
            </label>
            <label htmlFor="fur color">
            <input required
                  id="fur color"
                  name="fur color"
                  placeholder="Fur Color"
                  type="text"
                  value={furColor}
                  onChange={({ target }) => setFurColor(target.value)} />
            </label>
            <label htmlFor="age">
            <input required
                  id="age"
                  name="age"
                  placeholder="Age"
                  type="number"
                  min="0"
                  value={age}
                  onChange={({ target }) => setAge(target.value)} />
            </label>
            </p>
            <p><button>Submit</button></p>
        </form>
    );
};

CatForm.propTypes = {
    setCats: PropTypes.func.isRequired
};

export default CatForm;
