import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../../../redux/actions';
import styles from './UserForm.module.css';

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !status.trim()) {
      setError('Поля не должны быть пустыми');
      return;
    }

    setUserInfo({ name, status });
    setName('');
    setStatus('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <input className={styles.input} placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input className={styles.input} placeholder="Статус" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button}>
        Сохранить
      </button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);