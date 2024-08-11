import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import CardList from '@/components/cardList/CardList';
import { mockPeople } from '@/tests/mockPeople';

vi.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
  }),
}));

describe('CardsList', () => {
  it('should render message if there are no people', () => {
    render(
      <StoreProvider>
        <CardList people={[]} />
      </StoreProvider>,
    );

    const message = screen.getByText(/no people/i);

    expect(message).toBeInTheDocument();
  });

  it('should render the specified number of cards', () => {
    render(
      <StoreProvider>
        <CardList people={mockPeople} />
      </StoreProvider>,
    );

    const cardList = screen.getByTestId('cards-list');

    expect(cardList).toBeInTheDocument();
    expect(cardList.children.length).toBe(mockPeople.length);
  });
});
