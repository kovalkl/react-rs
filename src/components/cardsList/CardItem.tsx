import { Link, useSearchParams } from 'react-router-dom';

import { Person } from '../../shared/types';
import { getPersonId } from '../../utils/getPersonId';
import { getSearchParams } from '../../utils/getSearchParams';
import './cardItem.sass';

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
  const [searchParams] = useSearchParams();
  const { currentPage, searchText } = getSearchParams(searchParams);
  return (
    <Link
      to={`/details/${getPersonId(person.url)}?page=${currentPage}${searchText ? `&search=${searchText}` : ''}`}
      className="person"
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
    </Link>
  );
};

export default CardItem;
