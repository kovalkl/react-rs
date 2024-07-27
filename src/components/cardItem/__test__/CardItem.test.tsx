import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { people } from '../../../tests/mockPeople';
import renderWithRouter from '../../../tests/test-utils';
import CardItem from './../CardItem';

describe('CardItem', () => {
  it('should render the relevant card information', () => {
    const testPerson = people[0];
    renderWithRouter(<CardItem person={testPerson} />);

    expect(screen.getByText(testPerson.name)).toBeInTheDocument();
    expect(screen.getByText(testPerson.birth_year)).toBeInTheDocument();
    expect(screen.getByText(testPerson.gender)).toBeInTheDocument();
    expect(screen.getByText(testPerson.height)).toBeInTheDocument();
    expect(screen.getByText(testPerson.eye_color)).toBeInTheDocument();
    expect(screen.getByText(testPerson.skin_color)).toBeInTheDocument();
  });
});
