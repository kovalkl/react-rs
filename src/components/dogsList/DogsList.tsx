import { Component } from 'react';
import DogsItem from './DogsItem';

import { Dog } from './../../shared/types';

import './dogsList.sass';

interface DogsListProps {
  dogs: Dog[];
}

class DogsList extends Component<DogsListProps> {
  constructor(props: DogsListProps) {
    super(props);
  }
  render() {
    return (
      <div className="dogs-list">
        {this.props.dogs && this.props.dogs.length ? (
          this.props.dogs.map((dog: Dog) => <DogsItem key={dog.id} dog={dog} />)
        ) : (
          <div>No dogs found</div>
        )}
      </div>
    );
  }
}

export default DogsList;
