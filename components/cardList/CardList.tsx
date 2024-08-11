'use client';

import { useSearchParams } from 'next/navigation';

import CardItem from '@/components/cardItem/CardItem';
import styles from '@/components/cardList/CardList.module.sass';
import { useAppSelector } from '@/lib/hooks';
import { selectSelectedPeopleArray } from '@/lib/selector';
import { Person, RootState } from '@/models/types';

type CardListProps = {
  people: Person[];
};

const CardList = ({ people }: CardListProps) => {
  const searchParams = useSearchParams() || '';
  const selectedPeopleArray = useAppSelector((state: RootState) =>
    selectSelectedPeopleArray(state),
  );
  return (
    <div className={styles.cards}>
      {people && people.length ? (
        <ul className={styles['cards-list']} data-testid="cards-list">
          {people.map((person: Person) => (
            <CardItem
              key={person.edited}
              person={person}
              selectedPeople={selectedPeopleArray}
              searchParams={searchParams.toString()}
            />
          ))}
        </ul>
      ) : (
        <div className="accent-text center-text">No people found...</div>
      )}
    </div>
  );
};

export default CardList;
