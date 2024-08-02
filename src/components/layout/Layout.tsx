import { useContext } from 'react';

import Flyout from '@/components/flyout/Flyout';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';
import { ThemeContext } from '@/store/ThemeContext';

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
