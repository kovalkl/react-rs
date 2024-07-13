import { Person } from '../../shared/types';
import CardsList from '../cardsList/CardsList';
import './cardsBlock.sass';

interface CardsBlockProps {
  people: Person[];
}

const CardsBlock = ({ people }: CardsBlockProps) => {
  return (
    <div className="cards">
      <CardsList people={people} />
    </div>
  );
};

export default CardsBlock;
