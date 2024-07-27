import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { people } from './../../../tests/mockPeople';
import renderWithRouter from './../../../tests/test-utils';
import CardList from './../CardList';

describe('CardList', () => {
  it('should render message if there are no people', () => {
    renderWithRouter(<CardList people={[]} />);

    const message = screen.getByText(/no people/i);

    expect(message).toBeInTheDocument();
  });

  it('should render the specified number of cards', () => {
    renderWithRouter(<CardList people={people} />);

    const cardList = screen.getByTestId('cards-list');

    expect(cardList).toBeInTheDocument();
    expect(cardList.children.length).toBe(people.length);
  });
});
