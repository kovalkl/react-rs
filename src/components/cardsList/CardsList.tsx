import { Component } from 'react';
import CardItem from './CardItem';

import { Person } from '../../shared/types';

import './cardsList.sass';

interface PeopleListProps {
  people: Person[];
}

class CardsList extends Component<PeopleListProps> {
  constructor(props: PeopleListProps) {
    super(props);
  }

  render() {
    return (
      <div className="cards-list">
        {this.props.people && this.props.people.length ? (
          this.props.people.map((person: Person) => (
            <CardItem key={person.edited} person={person} />
          ))
        ) : (
          <div className="accent-text">No people found...</div>
        )}
      </div>
    );
  }
}

export default CardsList;
