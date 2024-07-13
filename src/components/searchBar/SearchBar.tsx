import { useEffect, useState } from 'react';

import Button from './../UI/button/Button';
import TextInput from './../UI/textInput/TextInput';
import './searchBar.sass';

interface SearchBarProps {
  storeValue: string;
  searchPerson: (inputText: string) => void;
}

const SearchBar = ({ storeValue, searchPerson }: SearchBarProps) => {
  const [inputText, setInputText] = useState(storeValue);

  useEffect(() => {
    setInputText(storeValue);
  }, [storeValue]);

  const handleSearchPerson = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    searchPerson(inputText);
  };

  return (
    <form className="search" onSubmit={handleSearchPerson}>
      <TextInput value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <Button type="button" onClick={handleSearchPerson}>
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
