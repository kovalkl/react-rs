import { Person } from '../../shared/types';
import CardsList from '../cardsList/CardsList';
import './cardsBlock.sass';

interface CardsBlockProps {
  people: Person[];
  isLoading: boolean;
}

const CardsBlock = ({ people, isLoading }: CardsBlockProps) => {
  return (
    <div className="cards">
      {isLoading ? <div className="accent-text">Loading...</div> : <CardsList people={people} />}
    </div>
  );
};

export default CardsBlock;
