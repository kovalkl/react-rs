import { useState } from 'react';

import { IPagination, Person } from '../../shared/types';
import CardsBlock from '../cardsBlock/CardsBlock';
import Details from '../details/Details';
import Pagination from '../pagination/Pagination';
import './main.sass';

interface IMainProps {
  people: Person[];
  page: IPagination;
  currentPage: number;
  changePage: (page: number) => void;
}

const Main = ({ people, page, currentPage, changePage }: IMainProps) => {
  const [currentPersonId, setCurrentPersonId] = useState('0');
  return (
    <main className="main">
      <div className="main__content">
        <CardsBlock people={people} setCurrentPersonId={(id: string) => setCurrentPersonId(id)} />
        <Pagination
          page={page}
          currentPage={currentPage}
          changePage={(page: number) => changePage(page)}
        />
      </div>
      {currentPersonId !== '0' && (
        <Details personId={currentPersonId} setCurrentPersonId={() => setCurrentPersonId('0')} />
      )}
    </main>
  );
};

export default Main;
