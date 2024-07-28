import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import CardsList from '../cardList/CardList';
import { useAppDispatch } from './../../hooks/useAppDispatch';
import { useCustomSearchParams } from './../../hooks/useCustomSearchParams';
import { useGetPeopleQuery } from './../../redux/peopleApi';
import { addCards } from './../../store/pageCardsSlice';
import './content.sass';

const Content = ({ selectedPeople }: { selectedPeople: string[] }) => {
  const { currentPage, searchText } = useCustomSearchParams();
  const dispatch = useAppDispatch();

  const { data, isFetching } = useGetPeopleQuery({
    page: currentPage,
    searchText,
  });

  useEffect(() => {
    if (data) {
      dispatch(addCards(data.results));
    }
  }, [data, dispatch]);

  return (
    <section className="content">
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <div className="content__wrapper">
          <CardsList people={data ? data.results : []} selectedPeople={selectedPeople} />
          <Outlet />
        </div>
      )}
    </section>
  );
};

export default Content;
