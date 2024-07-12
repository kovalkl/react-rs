import Button from './../UI/button/Button';
import TextInput from './../UI/textInput/TextInput';
import './searchBar.sass';

interface SearchBarProps {
  value: string;
  changeSearchText: (searchText: string) => void;
  searchPerson: () => void;
}

const SearchBar = ({ value, changeSearchText, searchPerson }: SearchBarProps) => {
  const handleSearchPerson = (e: React.FormEvent) => {
    e.preventDefault();
    searchPerson();
  };

  return (
    <form className="search" onSubmit={(e) => handleSearchPerson(e)}>
      <TextInput value={value} onChange={(e) => changeSearchText(e.target.value)} />
      <Button type="button" onClick={searchPerson}>
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
