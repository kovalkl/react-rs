import { Component } from 'react';

import dogsService from '../../services/DogsService';

import { Dog } from './../../shared/types';

import DogsList from '../dogsList/DogsList';

import './dogsBlock.sass';

interface DogsBlockState {
  dogs: Dog[];
  loading: boolean;
}

class DogsBlock extends Component<object, DogsBlockState> {
  constructor(props: DogsBlockState) {
    super(props);
    this.state = {
      dogs: [],
      loading: true,
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
      <div className="dogs">
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <DogsList dogs={this.state.dogs} />
        )}
      </div>
    );
  }
}

export default DogsBlock;
