'use client';

import Link from 'next/link';

import styles from '@/components/cardItem/CardItem.module.sass';
import { getPersonId } from '@/components/cardItem/getPersonId';
import { useAppDispatch } from '@/lib/hooks';
import { togglePerson } from '@/lib/selectedPeopleSlice';
import { Person } from '@/models/types';

interface CardItemProps {
  person: Person;
  selectedPeople: string[];
  searchParams: string;
}

const PERSON_PARAMS = {
  gender: 'Gender',
  height: 'Height',
  skin_color: 'Skin color',
  eye_color: 'Eye color',
};

const CardItem = ({ person, selectedPeople, searchParams }: CardItemProps) => {
  const id = getPersonId(person.url);

  const isChecked = selectedPeople.includes(person.url);
  const dispatch = useAppDispatch();

  const toggleStore = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    dispatch(togglePerson(person));
  };

  return (
    <Link
      href={`/?${searchParams}&details=${id}`}
      className={`${styles.person} ${isChecked ? styles['person__checked'] : ''}`}
      id={id}
      data-testid="card-item"
    >
      <div>
        <p className={styles.person__name}>{person.name}</p>
        <p>{person.birth_year}</p>
      </div>
      <div>
        <ul>
          {Object.entries(PERSON_PARAMS).map(([key, value]) => (
            <li key={key}>
              <span className={styles.person__description}>{value}:</span>{' '}
              {person[key as keyof Person]}
            </li>
          ))}
        </ul>
      </div>
      <label
        className={`check-label ${styles.person__checkbox}`}
        onClick={(e) => e.stopPropagation()}
        htmlFor={`checkbox-${id}`}
      >
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          checked={isChecked}
          onChange={(e) => toggleStore(e)}
        />
        Add to Store
      </label>
    </Link>
  );
};

export default CardItem;
