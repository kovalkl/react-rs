import { Person } from '../../shared/types';
import CardsList from '../cardsList/CardsList';
import './cardsBlock.sass';

interface CardsBlockProps {
  people: Person[];
  setCurrentPersonId: (id: string) => void;
}

const CardsBlock = ({ people, setCurrentPersonId }: CardsBlockProps) => {
  return (
    <section className="cards">
      <CardsList people={people} setCurrentPerson={(id: string) => setCurrentPersonId(id)} />
    </section>
  );
};

export default CardsBlock;
