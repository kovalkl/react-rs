import { Person } from '../../shared/types';
import CardItem from './CardItem';
import './cardsList.sass';

interface CardsListProps {
  people: Person[];
  setCurrentPerson: (id: string) => void;
}

const CardsList = ({ people, setCurrentPerson }: CardsListProps) => {
  return (
    <>
      {people && people.length ? (
        <ul className="cards-list" data-testid="cards-list">
          {people.map((person: Person) => (
            <CardItem
              key={person.edited}
              person={person}
              setCurrentPerson={(id: string) => setCurrentPerson(id)}
            />
          ))}
        </ul>
      ) : (
        <div className="accent-text">No people found...</div>
      )}
    </>
  );
};

export default CardsList;
