import { useState } from 'react';

import { useCustomSearchParams } from './../../hooks/useCustomSearchParams';
import Button from './../UI/button/Button';
import TextInput from './../UI/textInput/TextInput';
import './searchBar.sass';

const SearchBar = () => {
  const { searchText, setSearchText } = useCustomSearchParams();
  const [inputText, setInputText] = useState(searchText);

  const handleSearchPerson = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSearchText(inputText);
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
