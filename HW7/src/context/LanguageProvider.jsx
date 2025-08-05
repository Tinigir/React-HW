import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguagee) => (prevLanguagee === 'ru' ? 'en' : 'ru'));
  };

  return (
    <LanguageContext.Provider value={{language, toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}