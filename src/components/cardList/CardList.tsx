import { Person } from './../../models/types';
import CardItem from './../cardItem/CardItem';
import './cardList.sass';

interface CardListProps {
  people: Person[];
  selectedPeople: string[];
}

const CardList: React.FC<CardListProps> = ({ people, selectedPeople }: CardListProps) => {
  return (
    <div className="cards">
      {people.length ? (
        <ul className="cards-list" data-testid="cards-list">
          {people.map((person: Person) => (
            <CardItem key={person.edited} person={person} selectedPeople={selectedPeople} />
          ))}
        </ul>
      ) : (
        <div className="accent-text">No people found...</div>
      )}
    </div>
  );
};

export default CardList;
