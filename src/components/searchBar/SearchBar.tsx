import { Component } from 'react';
import './searchBar.sass';
import Button from './../UI/button/Button';
import TextInput from './../UI/textInput/TextInput';

interface SearchBarProps {
  value: string;
  changeSearchText: (searchText: string) => void;
  searchDog: () => void;
}

class SearchBar extends Component<SearchBarProps> {
  private throwError = () => {
    try {
      throw new Error('Simulated Error');
    } catch (error) {
      console.error(error);
      this.setState(() => {
        throw error;
      });
    }
  };

  private searchDog = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.searchDog();
  };

  render() {
    return (
      <form className="search" onSubmit={(e) => this.searchDog(e)}>
        <TextInput
          value={this.props.value}
          onChange={(e) => this.props.changeSearchText(e.target.value)}
        />
        <Button type="button" onClick={this.props.searchDog}>
          Search
        </Button>
        <Button type="error" onClick={this.throwError}>
          Error
        </Button>
      </form>
    );
  }
}

export default SearchBar;
