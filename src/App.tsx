import { Component } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import DogsBlock from './components/dogsBlock/DogsBlock';
import { Dog } from './shared/types';
import dogsService from './services/DogsService';

interface AppState {
  dogs: Dog[];
  loading: boolean;
  searchText: string;
}

class App extends Component<object, AppState> {
  constructor(props: AppState) {
    super(props);
    this.state = {
      dogs: [],
      loading: true,
      searchText: '',
    };
  }

  async componentDidMount() {
    try {
      const response: Dog[] = await dogsService.getDogs();
      this.setState({ dogs: response, loading: false });
    } catch (error) {
      console.error('Error fetching dogs:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <DogsBlock loading={this.state.loading} dogs={this.state.dogs} />
      </div>
    );
  }
}

export default App;
