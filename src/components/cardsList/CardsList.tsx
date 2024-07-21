import { Person } from '../../shared/types';
import CardItem from './CardItem';
import './cardsList.sass';

interface CardsListProps {
  people: Person[];
}

const CardsList = ({ people }: CardsListProps) => {
  return (
    <div className="cards">
      {people && people.length ? (
        <ul className="cards-list" data-testid="cards-list">
          {people.map((person: Person) => (
            <CardItem key={person.edited} person={person} />
          ))}
        </ul>
      ) : (
        <div className="accent-text">No people found...</div>
      )}
    </div>
  );
};

export default CardsList;
