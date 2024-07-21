import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import React from 'react';

import CardsList from './../../src/components/cardsList/CardsList';
import { people } from './../mockPeople';
import renderWithRouter from './../test-utils';

describe('CardsList', () => {
  it('should render message if there are no people', () => {
    renderWithRouter(<CardsList people={[]} />);

    const message = screen.getByText(/no people/i);

    expect(message).toBeInTheDocument();
  });

  it('should render the specified number of cards', () => {
    renderWithRouter(<CardsList people={people} />);

    const cardsList = screen.getByTestId('cards-list');

    expect(cardsList).toBeInTheDocument();
    expect(cardsList.children.length).toBe(people.length);
  });
});
