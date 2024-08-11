'use client';

import { useContext } from 'react';

import styles from '@/components/themeButton/ThemeButton.module.sass';
import { ThemeContext } from '@/store/ThemeContext';

const ThemeButton = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <form className={styles['theme-button']}>
      <label className="check-label">
        <input
          type="radio"
          name="theme"
          value="light"
          checked={!isDarkTheme}
          onChange={toggleTheme}
        />
        Light
      </label>
      <label className="check-label">
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={isDarkTheme}
          onChange={toggleTheme}
        />
        Dark
      </label>
    </form>
  );
};

export default ThemeButton;
