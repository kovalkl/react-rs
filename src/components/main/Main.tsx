import { useAppSelector } from './../../hooks/useAppSelector';
import Content from './../content/Content';
import Pagination from './../pagination/Pagination';
import './main.sass';

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
