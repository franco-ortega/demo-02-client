import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Cats from '../cats/Cats';
import CatImage from '../cats/CatImage';
import Footer from '../footer/Footer';
import { getCats } from '../../services/catApi';
import styles from  './App.module.css';

const App = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCats()
    .then(cats => setCats(cats))
    
    setLoading(false)
  }, []);

  console.log(cats);
  console.log(loading);

  if(loading) return <h1>'Cats are loading...'</h1>;

  return (
    <div className={styles.App}>
      <Header />
      <Cats cats={cats} />
      <CatImage />
      <Footer/>
    </div>
  )
};

export default App
