import { Component } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import CardsBlock from './components/cardsBlock/CardsBlock';
import { Person } from './shared/types';
import peopleService from './services/PeopleService';
import { Store } from './store/Store';
import { trimText } from './utils/trimText';

interface AppState {
  people: Person[];
  loading: boolean;
  searchText: string;
  store: Store;
}

class App extends Component<object, AppState> {
  constructor(props: AppState) {
    super(props);
    this.state = {
      people: [],
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
      this.searchPerson();
      return;
    }

    try {
      const response: Person[] = await peopleService.getPeople();
      this.setState({ people: response, loading: false });
    } catch (error) {
      this.setCatch(error);
    }
  }

  async searchPerson() {
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
      const response: Person[] =
        await peopleService.getPersonBySearch(formatText);
      this.setState({ people: response, loading: false });
    } catch (error) {
      this.setCatch(error);
    }
  }

  setCatch(error: unknown) {
    console.error('Error fetching people:', error);
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="app">
        <SearchBar
          value={this.state.searchText}
          changeSearchText={(e) => this.setState({ searchText: e })}
          searchPerson={() => this.searchPerson()}
        />
        <CardsBlock loading={this.state.loading} people={this.state.people} />
      </div>
    );
  }
}

export default App;
