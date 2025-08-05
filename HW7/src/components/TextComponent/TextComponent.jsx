import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import styles from './TextComponent.module.css';

const TextComponent = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    en: <span className={styles.text}>English language was chosen</span>,
    ru: <span className={styles.text}>Был выбран русский язык</span>,
  };

  return <h1>{text[language]}</h1>;
};

export default TextComponent;