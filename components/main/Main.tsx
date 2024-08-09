import { useContext } from 'react';

import Content from '@/components/content/Content';
import styles from '@/components/main/Main.module.sass';
import Pagination from '@/components/pagination/Pagination';
import { PeopleResponse, Person } from '@/models/types';
import { ThemeContext } from '@/store/ThemeContext';

type MainProps = {
  people: PeopleResponse;
  currentPerson: Person | null;
};

const Main = ({ people, currentPerson }: MainProps) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <main className={`${styles.main} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className={`${styles.main__wrapper} container`}>
        <Pagination next={people.next} previous={people.previous} />
        <Content people={people.results} currentPerson={currentPerson} />
      </div>
    </main>
  );
};

export default Main;
