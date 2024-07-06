import { Component } from 'react';
import './searchBar.sass';
import Button from '../UI/button/Button';
import TextInput from '../UI/textInput/TextInput';

class SearchBar extends Component {
  state = {
    searchText: '',
  };

  handleClick() {
    console.log(`search: ${this.state.searchText}`);
  }

  render() {
    return (
      <form className="search">
        <TextInput
          value={this.state.searchText}
          onChange={(e) => this.setState({ searchText: e.target.value })}
        />
        <Button onClick={() => this.handleClick()}>Search</Button>
      </form>
    );
  }
}

export default SearchBar;
