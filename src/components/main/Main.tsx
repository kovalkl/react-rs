import Content from '@/components/content/Content';
import '@/components/main/main.sass';
import Pagination from '@/components/pagination/Pagination';
import { useAppSelector } from '@/hooks/useAppSelector';

const Main = () => {
  const selectedPeopleArray = useAppSelector((state) => Object.keys(state.selectedPeople.list));

  return (
    <main className="main">
      <div className="main__wrapper container">
        <Pagination />
        <Content selectedPeople={selectedPeopleArray} />
      </div>
    </main>
  );
};

export default Main;
