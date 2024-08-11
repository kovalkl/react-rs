import styles from '@/components/header/Header.module.sass';
import SearchBar from '@/components/searchBar/SearchBar';
import ThemeButton from '@/components/themeButton/ThemeButton';

const Header = () => {
  return (
    <header className={`${styles.header} theme_block`}>
      <div className={`${styles.header__wrapper} container`}>
        <SearchBar />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
