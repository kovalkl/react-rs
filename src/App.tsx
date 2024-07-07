import { Component } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import DogsBlock from './components/dogsBlock/DogsBlock';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBar />
        <DogsBlock />
      </div>
    );
  }
}

export default App;
