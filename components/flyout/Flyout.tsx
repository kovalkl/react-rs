import { useContext } from 'react';

import Button from '@/components/UI/button/Button';
import styles from '@/components/flyout/Flyout.module.sass';
import { useAppDispatch } from '@/lib/hooks';
import { useAppSelector } from '@/lib/hooks';
import { clearState } from '@/lib/selectedPeopleSlice';
import { ThemeContext } from '@/store/ThemeContext';

const Flyout = () => {
  const dispatch = useAppDispatch();
  const { isDarkTheme } = useContext(ThemeContext);

  const selectPeople = useAppSelector((state) => state.selectedPeople.list);

  const selectedPeopleNumber = Object.keys(selectPeople).length;

  const text = `${selectedPeopleNumber} ${selectedPeopleNumber === 1 ? 'person is' : 'people are'} selected`;

  return (
    <div
      className={`${styles.flyout} ${selectedPeopleNumber ? styles.flyout__active : ''} ${isDarkTheme ? 'dark-theme-block' : 'light-theme-block'}`}
    >
      <div className={`container ${styles.flyout__wrapper}`}>
        <p className={styles.flyout__text}>{text}</p>
        <Button>Download</Button>
        <Button variant="error" onClick={() => dispatch(clearState())}>
          Unselect all
        </Button>
      </div>
    </div>
  );
};

export default Flyout;
