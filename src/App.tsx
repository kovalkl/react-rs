import { Component } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import DogsBlock from './components/dogsBlock/DogsBlock';
import { Dog } from './shared/types';
import dogsService from './services/DogsService';
import { Store } from './store/Store';
import { trimText } from './utils/trimText';

interface AppState {
  dogs: Dog[];
  loading: boolean;
  searchText: string;
  store: Store;
}

class App extends Component<object, AppState> {
  constructor(props: AppState) {
    super(props);
    this.state = {
      dogs: [],
      loading: true,
      searchText: '',
      store: new Store(),
    };
  }

  async setSearchText() {
    if (this.state.store.hasSearchHistory()) {
      this.setState({ searchText: this.state.store.getSearchHistory() });
    }
  }

  async componentDidMount() {
    await this.setSearchText();

    if (this.state.searchText !== '') {
      this.searchDogs();
      return;
    }

    try {
      const response: Dog[] = await dogsService.getDogs();
      this.setState({ dogs: response, loading: false });
    } catch (error) {
      this.setCatch(error);
    }
  }

  async searchDogs() {
    this.setState({ loading: true });

    const formatText = trimText(this.state.searchText);
    this.setState({ searchText: formatText });

    if (formatText === '') {
      this.state.store.removeSearchHistory();
      this.setState({ searchText: '' });
      this.componentDidMount();
      return;
    } else {
      this.state.store.setSearchHistory(formatText);
    }

    try {
      const response: Dog[] = await dogsService.getDogsByName(formatText);
      this.setState({ dogs: response, loading: false });
    } catch (error) {
      this.setCatch(error);
    }
  }

  setCatch(error: unknown) {
    console.error('Error fetching dogs:', error);
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="app">
        <SearchBar
          value={this.state.searchText}
          changeSearchText={(e) => this.setState({ searchText: e })}
          searchDog={() => this.searchDogs()}
        />
        <DogsBlock loading={this.state.loading} dogs={this.state.dogs} />
      </div>
    );
  }
}

export default App;
