import { useContext } from 'react';

import ThemeButton from '../themeButton/ThemeButton';
import { ThemeContext } from './../../store/ThemeContext';
import SearchBar from './../searchBar/SearchBar';
import './header.sass';

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
