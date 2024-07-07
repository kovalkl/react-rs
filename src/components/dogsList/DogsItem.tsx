import { Component } from 'react';

import { Dog } from '../../shared/types';

import './dogsItem.sass';

interface DogsItemProps {
  dog: Dog;
}

class DogsItem extends Component<DogsItemProps> {
  constructor(props: DogsItemProps) {
    super(props);
  }

  render() {
    return (
      <div className="dog">
        <p className="dog__name">{this.props.dog.name}</p>
        <p className="dog__description">{this.props.dog.temperament}</p>
      </div>
    );
  }
}

export default DogsItem;
