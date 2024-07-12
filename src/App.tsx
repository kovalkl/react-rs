import { useEffect, useState } from 'react';

import CardsBlock from './components/cardsBlock/CardsBlock';
import SearchBar from './components/searchBar/SearchBar';
import useFetching from './hooks/useFetching';
import useSearchQuery from './hooks/useSearchQuery';
import peopleService from './services/PeopleService';
import { Person } from './shared/types';
import { trimText } from './utils/trimText';

const App = () => {
  const [searchText, setSearchText] = useSearchQuery();
  const [people, setPeople] = useState<Person[]>([]);
  const [triggerSearch, setTriggerSearch] = useState(false);

  const [fetchPeople, isLoadingPeople] = useFetching(async () => {
    const people = await peopleService.getPeople();
    setPeople(people);
  });

  const [fetchPersonBySearch, isLoadingPersonBySearch] = useFetching(async () => {
    const people = await peopleService.getPersonBySearch(searchText);
    setPeople(people);
  });

  useEffect(() => {
    if (searchText) {
      fetchPersonBySearch();
    } else {
      fetchPeople();
    }
    setTriggerSearch(false);
  }, [triggerSearch]);

  const searchPerson = () => {
    const formatText = trimText(searchText);
    setSearchText(formatText);

    formatText === '' ? fetchPeople() : fetchPersonBySearch();
    setTriggerSearch(true);
  };

  return (
    <div className="app">
      <SearchBar
        value={searchText}
        changeSearchText={(e) => setSearchText(e)}
        searchPerson={() => searchPerson()}
      />
      <CardsBlock isLoading={isLoadingPeople || isLoadingPersonBySearch} people={people} />
    </div>
  );
};

export default App;
