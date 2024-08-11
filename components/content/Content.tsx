import CardsList from '@/components/cardList/CardList';
import styles from '@/components/content/Content.module.sass';
import Details from '@/components/details/Details';
import { Person } from '@/models/types';

type ContentProps = {
  people: Person[];
  currentPerson: Person | null;
};

const Content = ({ people, currentPerson }: ContentProps) => {
  return (
    <section className={styles.content}>
      <div className={styles.content__wrapper}>
        <CardsList people={people} />
        {currentPerson && <Details currentPerson={currentPerson} />}
      </div>
    </section>
  );
};

export default Content;
