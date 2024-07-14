import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as jest from 'jest-mock';

import React from 'react';

import { getPersonId } from '../../src/utils/getPersonId.ts';
import CardItem from './../../src/components/cardsList/CardItem.tsx';
import { people } from './../testData.ts';

describe('CardItem', () => {
  it('should render the relevant card information', () => {
    const testPerson = people[0];
    render(<CardItem person={testPerson} setCurrentPerson={() => {}} />);

    expect(screen.getByText(testPerson.name)).toBeInTheDocument();
    expect(screen.getByText(testPerson.birth_year)).toBeInTheDocument();
    expect(screen.getByText(testPerson.gender)).toBeInTheDocument();
    expect(screen.getByText(testPerson.height)).toBeInTheDocument();
    expect(screen.getByText(testPerson.eye_color)).toBeInTheDocument();
    expect(screen.getByText(testPerson.skin_color)).toBeInTheDocument();
  });

  it('should open a detailed modal on click', async () => {
    const setCurrentPersonMock = jest.fn();
    const testPerson = people[0];
    render(<CardItem person={testPerson} setCurrentPerson={setCurrentPersonMock} />);

    const cardItem = screen.getByTestId('card-item');
    const user = userEvent.setup();

    await user.click(cardItem);

    expect(cardItem).toBeInTheDocument();
    expect(setCurrentPersonMock).toHaveBeenCalledWith(getPersonId(testPerson.url));
  });
});
