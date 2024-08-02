import { useState } from 'react';

import Button from '@/components/UI/button/Button';
import TextInput from '@/components/UI/textInput/TextInput';
import '@/components/searchBar/searchBar.sass';
import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

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
        <Button onClick={handleSearchPerson}>Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
