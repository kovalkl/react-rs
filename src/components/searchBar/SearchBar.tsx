import { Component } from 'react';
import './searchBar.sass';
import Button from '../UI/button/Button';
import TextInput from '../UI/textInput/TextInput';

interface SearchBarProps {
  value: string;
  changeSearchText: (searchText: string) => void;
  searchDog: () => void;
}

class SearchBar extends Component<SearchBarProps> {
  render() {
    return (
      <form className="search">
        <TextInput
          value={this.props.value}
          onChange={(e) => this.props.changeSearchText(e.target.value)}
        />
        <Button onClick={this.props.searchDog}>Search</Button>
      </form>
    );
  }
}

export default SearchBar;
