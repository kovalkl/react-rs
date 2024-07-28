import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './../../../store/index';
import { mockPeople } from './../../../tests/mockPeople.ts';
import CardList from './../CardList.tsx';

describe('CardsList', () => {
  it('should render message if there are no people', () => {
    render(<CardList people={[]} selectedPeople={[]} />);

    const message = screen.getByText(/no people/i);

    expect(message).toBeInTheDocument();
  });

  it('should render the specified number of cards', () => {
    render(
      <Provider store={store}>
        <Router>
          <CardList people={mockPeople} selectedPeople={[]} />
        </Router>
      </Provider>,
    );

    const cardList = screen.getByTestId('cards-list');

    expect(cardList).toBeInTheDocument();
    expect(cardList.children.length).toBe(mockPeople.length);
  });
});
