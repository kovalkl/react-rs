import { useContext } from 'react';

import '@/components/header/header.sass';
import SearchBar from '@/components/searchBar/SearchBar';
import ThemeButton from '@/components/themeButton/ThemeButton';
import { ThemeContext } from '@/store/ThemeContext';

const Header = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="header__wrapper container">
        <SearchBar />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
