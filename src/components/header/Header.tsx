import { useContext } from 'react';

import { ThemeContext } from './../../store/ThemeContext';
import ThemeButton from './../ThemeButton/ThemeButton';
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
