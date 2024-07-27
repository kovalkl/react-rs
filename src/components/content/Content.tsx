import { Outlet } from 'react-router-dom';

import CardsList from '../cardList/CardList';
import { useCustomSearchParams } from './../../hooks/useCustomSearchParams';
import { useGetPeopleQuery } from './../../redux/peopleApi';
import './content.sass';

const Content = () => {
  const { currentPage, searchText } = useCustomSearchParams();

  const { data, isFetching } = useGetPeopleQuery({
    page: currentPage,
    searchText,
  });

  return (
    <section className="content">
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <div className="content__wrapper">
          <CardsList people={data ? data.results : []} />
          <Outlet />
        </div>
      )}
    </section>
  );
};

export default Content;
