import { Component } from 'react';

import { Person } from '../../shared/types';

import './cardItem.sass';

interface PeopleItemProps {
  person: Person;
}

const PERSON_PARAMS = {
  gender: 'Gender',
  height: 'Height',
  skin_color: 'Skin color',
  eye_color: 'Eye color',
};

class CardItem extends Component<PeopleItemProps> {
  constructor(props: PeopleItemProps) {
    super(props);
  }

  render() {
    return (
      <div className="person">
        <div>
          <p className="person__name">{this.props.person.name}</p>
          <p>{this.props.person.birth_year}</p>
        </div>
        <div>
          <ul>
            {Object.entries(PERSON_PARAMS).map(([key, value]) => (
              <li key={key}>
                <span className="person__description-title">{value}:</span>{' '}
                {this.props.person[key as keyof Person]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CardItem;
