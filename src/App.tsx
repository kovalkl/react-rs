import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Main from './components/main/Main';
import SearchBar from './components/searchBar/SearchBar';
import useFetching from './hooks/useFetching';
import useSearchQuery from './hooks/useSearchQuery';
import peopleService from './services/PeopleService';
import { IResponsePeople, Person } from './shared/types';
import { trimText } from './utils/trimText';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useSearchQuery();
  const [people, setPeople] = useState<Person[]>([]);
  const [page, setPage] = useState({
    count: 0,
    next: null as string | null,
    previous: null as string | null,
  });
  const currentPage = Number(searchParams.get('page')) || 1;

  const [fetchPeople, isLoadingPeople] = useFetching(async () => {
    const { results, count, next, previous }: IResponsePeople =
      await peopleService.getPeople(currentPage);
    setPageInfo({
      results,
      count,
      next,
      previous,
    });
  });

  const [fetchPersonBySearch, isLoadingPersonBySearch] = useFetching(async () => {
    const { results, count, next, previous }: IResponsePeople =
      await peopleService.getPersonBySearch(searchText, currentPage);
    setPageInfo({
      results,
      count,
      next,
      previous,
    });
  });

  const setPageInfo = ({ results, count, next, previous }: IResponsePeople) => {
    setPeople(results);
    setPage({
      count,
      next,
      previous,
    });
  };

  useEffect(() => {
    if (searchText !== '') {
      fetchPersonBySearch();
    } else {
      fetchPeople();
    }
  }, [currentPage, searchText]);

  const searchPerson = (inputText: string) => {
    setSearchText(trimText(inputText));
    setSearchParams({ page: '1' });
  };

  return (
    <div className="app">
      <SearchBar
        storeValue={searchText}
        searchPerson={(inputText: string) => searchPerson(inputText)}
      />
      {isLoadingPeople || isLoadingPersonBySearch ? (
        <div className="accent-text center-text">Loading...</div>
      ) : (
        <Main
          people={people}
          page={page}
          currentPage={currentPage}
          changePage={(page) => setSearchParams({ page: page.toString() })}
        />
      )}
    </div>
  );
};

export default App;
