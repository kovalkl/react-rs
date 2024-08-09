import { useRouter } from 'next/router';

import { useContext } from 'react';

import Button from '@/components/UI/button/Button';
import styles from '@/components/details/Details.module.sass';
import { Person } from '@/models/types';
import { ThemeContext } from '@/store/ThemeContext';

const Details = ({ currentPerson }: { currentPerson: Person }) => {
  const { back } = useRouter();
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={styles.details}>
      <div className={styles.details__background} onClick={() => back()}></div>
      <div className={`${styles.details__content} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        <>
          <span className={styles.details__title}>{currentPerson.name}</span>
          <span>
            {currentPerson.name} was born in {currentPerson.birth_year}. The gender is{' '}
            {currentPerson.gender}. It was born in {currentPerson.birth_year}. It has{' '}
            {currentPerson.eye_color} eye color, {currentPerson.hair_color} hair and{' '}
            {currentPerson.skin_color} skin. Height is {currentPerson.height}cm and weight is{' '}
            {currentPerson.mass}
            kg.
          </span>
          <div className={styles.details__btn}>
            <Button onClick={() => back()}>Close</Button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Details;
