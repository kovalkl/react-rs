import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import { Person } from '../../models/types';
import { ThemeContext } from '../../store/ThemeContext';
import { togglePerson } from '../../store/selectedPeopleSlice';
import { useAppDispatch } from './../../hooks/useAppDispatch';
import './cardItem.sass';
import { getPersonId } from './getPersonId';

interface CardItemProps {
  person: Person;
  selectedPeople: string[];
}

const PERSON_PARAMS = {
  gender: 'Gender',
  height: 'Height',
  skin_color: 'Skin color',
  eye_color: 'Eye color',
};

const CardItem = ({ person, selectedPeople }: CardItemProps) => {
  const { currentPage, searchText } = useCustomSearchParams();
  const { isDarkTheme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const toggleStore = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    dispatch(togglePerson(person));
  };

  const isChecked = () => selectedPeople.includes(person.url);

  return (
    <Link
      to={`/details/${getPersonId(person.url)}?page=${currentPage}${searchText ? `&search=${searchText}` : ''}`}
      className={`person ${isDarkTheme ? 'dark-theme' : 'light-theme'}${isChecked() ? ' checked' : ''}`}
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
      <label className="check-label person__checkbox" onClick={(e) => e.stopPropagation()}>
        <input type="checkbox" checked={isChecked()} onChange={(e) => toggleStore(e)} />
        Add to Store
      </label>
    </Link>
  );
};

export default CardItem;
