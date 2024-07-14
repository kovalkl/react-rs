import { Person } from '../../shared/types';
import { getPersonId } from '../../utils/getPersonId';
import './cardItem.sass';

interface CardItemProps {
  person: Person;
  setCurrentPerson: (id: string) => void;
}

const PERSON_PARAMS = {
  gender: 'Gender',
  height: 'Height',
  skin_color: 'Skin color',
  eye_color: 'Eye color',
};

const CardItem = ({ person, setCurrentPerson }: CardItemProps) => {
  return (
    <li
      className="person"
      id={getPersonId(person.url)}
      onClick={() => setCurrentPerson(getPersonId(person.url))}
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
    </li>
  );
};

export default CardItem;
