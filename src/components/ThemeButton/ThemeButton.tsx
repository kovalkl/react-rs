import { useContext } from 'react';

import { ThemeContext } from '../../store/ThemeContext';
import './../../index.sass';
import './themeButton.sass';

const ThemeButton = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <form className="theme-button">
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
