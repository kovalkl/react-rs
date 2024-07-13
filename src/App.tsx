import { useEffect, useState } from 'react';

import CardsBlock from './components/cardsBlock/CardsBlock';
import Pagination from './components/pagination/Pagination';
import SearchBar from './components/searchBar/SearchBar';
import useFetching from './hooks/useFetching';
import useSearchQuery from './hooks/useSearchQuery';
import peopleService from './services/PeopleService';
import { IResponsePeople, Person } from './shared/types';
import { trimText } from './utils/trimText';

const App = () => {
  const [searchText, setSearchText] = useSearchQuery();
  const [people, setPeople] = useState<Person[]>([]);
  const [page, setPage] = useState({
    count: 0,
    next: null as string | null,
    previous: null as string | null,
  });
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1);
    setSearchText(trimText(inputText));
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
        <>
          <CardsBlock people={people} />
          <Pagination page={page} currentPage={currentPage} changePage={setCurrentPage} />
        </>
      )}
    </div>
  );
};

export default App;
