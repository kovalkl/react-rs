import { useContext } from 'react';

import { ThemeContext } from '../../store/ThemeContext';
import Flyout from '../flyout/Flyout';
import Header from '../header/Header';
import Main from './../main/Main';

const Layout = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Header />
      <Main />
      <Flyout />
    </div>
  );
};

export default Layout;
