import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import React from 'react';

import CardsList from './../../src/components/cardsList/CardsList.tsx';
import { people } from './../testData.ts';

describe('CardsList', () => {
  it('should render message if there are no people', () => {
    render(<CardsList people={[]} setCurrentPerson={() => {}} />);

    const message = screen.getByText(/no people/i);

    expect(message).toBeInTheDocument();
  });

  it('should render the specified number of cards', () => {
    render(<CardsList people={people} setCurrentPerson={() => {}} />);

    const cardsList = screen.getByTestId('cards-list');

    expect(cardsList).toBeInTheDocument();
    expect(cardsList.children.length).toBe(people.length);
  });
});
