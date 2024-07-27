import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import { Person } from '../../models/types';
import { ThemeContext } from '../../store/ThemeContext';
import { togglePerson } from '../../store/peopleSlice';
import { useAppDispatch } from './../../hooks/useAppDispatch';
import './cardItem.sass';
import { getPersonId } from './getPersonId';

interface CardItemProps {
  person: Person;
}

const PERSON_PARAMS = {
  gender: 'Gender',
  height: 'Height',
  skin_color: 'Skin color',
  eye_color: 'Eye color',
};

const CardItem = ({ person }: CardItemProps) => {
  const { currentPage, searchText } = useCustomSearchParams();
  const { isDarkTheme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const addToStore = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation();
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    dispatch(togglePerson(person));
  };

  return (
    <Link
      to={`/details/${getPersonId(person.url)}?page=${currentPage}${searchText ? `&search=${searchText}` : ''}`}
      className={`person ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
      id={getPersonId(person.url)}
      data-testid="card-item"
    >
      <div>
        <p className="person__name">{person.name}</p>
        <p>{person.birth_year}</p>
      </div>
      <div>
        <ul>
          {Object.entries(PERSON_PARAMS).map(([key, value]) => (
            <li key={key}>
              <span className="person__description-title">{value}:</span>{' '}
              {person[key as keyof Person]}
            </li>
          ))}
        </ul>
      </div>
      <label className="check-label" onClick={(e) => addToStore(e)}>
        <input type="checkbox" />
        Add to Store
      </label>
    </Link>
  );
};

export default CardItem;
