import { useContext } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { ThemeContext } from '../../store/ThemeContext';
import { clearState } from '../../store/selectedPeopleSlice';
import Button from '../UI/button/Button';
import { useAppDispatch } from './../../hooks/useAppDispatch';
import './flyout.sass';

const Flyout = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const selectItemsNumber = useAppSelector(
    (state) => Object.keys(state.selectedPeople.list).length,
  );

  const text = `${selectItemsNumber} ${selectItemsNumber === 1 ? 'person is' : 'people are'} selected`;
  const className = `flyout ${isDarkTheme ? 'dark-theme' : 'light-theme'} ${selectItemsNumber ? 'active' : ''}`;

  const dispatch = useAppDispatch();
  return (
    <div className={className}>
      <div className="container flyout__wrapper">
        <p className="flyout__text">{text}</p>
        <Button className="flyout__btn" type="button">
          Download
        </Button>
        <Button className="flyout__btn" type="error" onClick={() => dispatch(clearState())}>
          Unselect all
        </Button>
      </div>
    </div>
  );
};

export default Flyout;
