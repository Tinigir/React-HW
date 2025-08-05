import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './UserProfile.module.css';

const fetchUser = async (setUser, setLoading) => {
  try {
    setLoading(true);
    const response = await axios.get('https://randomuser.me/api/');
    setUser(response.data.results[0]);
  } catch (error) {
    console.error('Ошибка загрузки данных пользователя:', error);
  } finally {
    setLoading(false);
  }
};

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(setUser, setLoading);
  }, []);

  return (
    <div className={styles.user_container}>
      <div className={styles.user_block}>
        {loading ? (
          <p>Loading...</p>
        ) : user ? (
          <div className={styles.user_content}>
            <img className={styles.user_picture} src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ) : (
          <p>Ошибка загрузки данных.</p>
        )}
        <button className={styles.user_load_btn} onClick={() => fetchUser(setUser, setLoading)}>Load New User</button>
      </div>
    </div>
  );
};

export default UserProfile;