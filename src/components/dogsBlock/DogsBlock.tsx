import { Component } from 'react';

import { Dog } from './../../shared/types';

import DogsList from '../dogsList/DogsList';

import './dogsBlock.sass';

interface DogsBlockState {
  dogs: Dog[];
  loading: boolean;
}

class DogsBlock extends Component<DogsBlockState> {
  constructor(props: DogsBlockState) {
    super(props);
  }

  render() {
    return (
      <div className="dogs">
        {this.props.loading ? (
          <div>Loading...</div>
        ) : (
          <DogsList dogs={this.props.dogs} />
        )}
      </div>
    );
  }
}

export default DogsBlock;
