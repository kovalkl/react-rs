import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import useFetching from '../../hooks/useFetching';
import useSearchQuery from '../../hooks/useSearchQuery';
import peopleService from '../../services/PeopleService';
import { Person } from '../../shared/types';
import { getSearchParams } from '../../utils/getSearchParams';
import CardsList from '../cardsList/CardsList';
import './content.sass';

const Content = () => {
  const [searchParams] = useSearchParams();
  const params = getSearchParams(searchParams);
  const { currentPage } = params;
  let { searchText } = params;

  const [searchStoreText] = useSearchQuery();

  if (!searchText) {
    searchText = searchStoreText;
  }

  const [people, setPeople] = useState<Person[]>([]);

  const [fetchPeople, isLoadingPeople] = useFetching(async () => {
    const { results } = await peopleService.getPeople(currentPage, searchText);
    setPeople(results);
  });

  useEffect(() => {
    fetchPeople();
  }, [currentPage, searchText]);

  return (
    <section className="content">
      {isLoadingPeople ? (
        'Loading...'
      ) : (
        <div className="content__wrapper">
          <CardsList people={people} />
          <Outlet />
        </div>
      )}
    </section>
  );
};

export default Content;
