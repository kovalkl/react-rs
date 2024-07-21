import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import useSearchQuery from '../../hooks/useSearchQuery';
import Button from './../UI/button/Button';
import TextInput from './../UI/textInput/TextInput';
import './searchBar.sass';

const SearchBar = () => {
  const setSearchParams = useSearchParams()[1];
  const [searchText, setSearchText] = useSearchQuery();
  const [inputText, setInputText] = useState(searchText);

  useEffect(() => {
    setInputText(searchText);
    setSearchQueryToParams(searchText);
  }, [searchText]);

  const handleSearchPerson = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimText = inputText.trim();
    setSearchText(trimText);
    setSearchQueryToParams(trimText);
  };

  const setSearchQueryToParams = (searchText: string) => {
    if (!searchText) {
      setSearchParams({ page: '1' });
    } else {
      setSearchParams({ page: '1', search: searchText });
    }
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSearchPerson}>
        <TextInput value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <Button type="button" onClick={handleSearchPerson}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
