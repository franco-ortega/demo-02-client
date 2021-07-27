import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import CatForm from '../cats/CatForm';
import CatsDetails from '../cats/CatsDetails';
import CatImage from '../cats/CatImage';
import Footer from '../footer/Footer';
import { getCats } from '../../services/catApi';
import styles from  './App.module.css';

const App = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCats()
    .then(cats => {
      setCats(cats);
      setLoading(false);
    })
  }, []);

  if(loading) return <img style={{ width: '50vw', position: 'absolute', top: '5%', left: '25%' }} src='https://i.giphy.com/media/QyJ0We4GHpjBa7PvKL/giphy.webp' alt='cat loading gif' />;

  return (
    <div className={styles.App}>
      <Header />
      <CatForm setCats={setCats} />
      <CatsDetails cats={cats} />
      <CatImage />
      <Footer/>
    </div>
  );
};

export default App;
