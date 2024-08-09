import { useContext } from 'react';

import styles from '@/components/header/Header.module.sass';
import SearchBar from '@/components/searchBar/SearchBar';
import ThemeButton from '@/components/themeButton/ThemeButton';
import { ThemeContext } from '@/store/ThemeContext';

const Header = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <header
      className={`${styles.header} ${isDarkTheme ? 'dark-theme-block' : 'light-theme-block'}`}
    >
      <div className={`${styles.header__wrapper} container`}>
        <SearchBar />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
