import { useContext } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { ThemeContext } from '../../store/ThemeContext';
import Button from '../UI/button/Button';
import './flyout.sass';

const Flyout = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const selectItemsNumber = useAppSelector((state) => state.people.list.length);

  const text = `${selectItemsNumber} ${selectItemsNumber === 1 ? 'person is' : 'people are'} selected`;
  const className = `flyout ${isDarkTheme ? 'dark-theme' : 'light-theme'} ${selectItemsNumber ? 'active' : ''}`;

  return (
    <div className={className}>
      <div className="container flyout__wrapper">
        <p className="flyout__text">{text}</p>
        <Button className="flyout__btn" type="button">
          Download
        </Button>
        <Button className="flyout__btn" type="error">
          Unselect all
        </Button>
      </div>
    </div>
  );
};

export default Flyout;
