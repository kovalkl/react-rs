import { useContext } from 'react';

import { useAppDispatch } from './../../hooks/useAppDispatch';
import { useAppSelector } from './../../hooks/useAppSelector';
import { ThemeContext } from './../../store/ThemeContext';
import { clearState } from './../../store/selectedPeopleSlice';
import Button from './../UI/button/Button';
import './flyout.sass';

const Flyout = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const selectPeople = useAppSelector((state) => state.selectedPeople.list);

  const selectedPeopleNumber = Object.keys(selectPeople).length;

  const text = `${selectedPeopleNumber} ${selectedPeopleNumber === 1 ? 'person is' : 'people are'} selected`;
  const className = `flyout ${isDarkTheme ? 'dark-theme' : 'light-theme'} ${selectedPeopleNumber ? 'active' : ''}`;

  const dispatch = useAppDispatch();
  return (
    <div className={className}>
      <div className="container flyout__wrapper">
        <p className="flyout__text">{text}</p>
        <Button>Download</Button>
        <Button variant="error" onClick={() => dispatch(clearState())}>
          Unselect all
        </Button>
      </div>
    </div>
  );
};

export default Flyout;
