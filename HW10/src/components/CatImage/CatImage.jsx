import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const CatImage = () => {
  const [catImage, setCatImage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatImage(response.data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Random Cat Image</h2>
      {loading ? <p>Loading...</p> : <img src={catImage} alt="Random Cat" className={styles.catImage} />}
      <button onClick={fetchCatImage} className={styles.button}>
        Load New Image
      </button>
    </div>
  );
};

export default CatImage;