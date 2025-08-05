import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className={styles.btn_container}>
      <button className={styles.btn} onClick={toggleLanguage}>
        {language === 'ru' ? 'Сменить язык' : 'Switch language'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;