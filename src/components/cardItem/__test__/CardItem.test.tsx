import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import CardItem from '@/components/cardItem/CardItem';
import store from '@/store/index';
import { mockPerson } from '@/tests/mockPeople';

describe('CardItem', () => {
  it('should render the relevant card information', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardItem person={mockPerson} selectedPeople={[]} />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.birth_year)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.gender)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.height)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.eye_color)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.skin_color)).toBeInTheDocument();
  });

  it('should navigate to the details page on click', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<CardItem person={mockPerson} selectedPeople={[]} />} />
            <Route path="/details/:id" element={<div>Details Page</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const cardItem = screen.getByTestId('card-item');
    await user.click(cardItem);

    expect(screen.getByText('Details Page')).toBeInTheDocument();
  });
});
