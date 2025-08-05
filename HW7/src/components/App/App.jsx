import { LanguageProvider } from '../../context/LanguageProvider.jsx';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';
import TextComponent from '../TextComponent/TextComponent.jsx';
import '../../styles/style.css';

function App() {
  return (
    <>
      <LanguageProvider>
        <TextComponent />
        <LanguageSwitcher />
      </LanguageProvider>
    </>
  );
}

export default App;
