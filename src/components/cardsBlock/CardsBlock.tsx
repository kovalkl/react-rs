import { Component } from 'react';

import { Person } from '../../shared/types';

import CardsList from '../cardsList/CardsList';

import './cardsBlock.sass';

interface PeopleBlockState {
  people: Person[];
  loading: boolean;
}

class CardsBlock extends Component<PeopleBlockState> {
  constructor(props: PeopleBlockState) {
    super(props);
  }

  render() {
    return (
      <div className="cards">
        {this.props.loading ? (
          <div className="accent-text">Loading...</div>
        ) : (
          <CardsList people={this.props.people} />
        )}
      </div>
    );
  }
}

export default CardsBlock;
