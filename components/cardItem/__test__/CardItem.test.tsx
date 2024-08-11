import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import StoreProvider from '@/components/StoreProvider';
import CardItem from '@/components/cardItem/CardItem';
import { togglePerson } from '@/lib/selectedPeopleSlice';
import { mockPerson } from '@/tests/mockPeople';

const mockDispatch = vi.fn();

vi.mock('@/lib/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

const mockPush = vi.fn();

vi.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    push: mockPush,
  }),
}));

describe('CardItem', () => {
  it('should render the relevant card information', () => {
    render(
      <StoreProvider>
        <CardItem person={mockPerson} selectedPeople={[]} searchParams="" />
      </StoreProvider>,
    );

    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.birth_year)).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('Height:')).toBeInTheDocument();
    expect(screen.getByText('Skin color:')).toBeInTheDocument();
    expect(screen.getByText('Eye color:')).toBeInTheDocument();
  });

  it('should call togglePerson when the checkbox is clicked', async () => {
    const user = userEvent.setup();
    render(
      <StoreProvider>
        <CardItem person={mockPerson} selectedPeople={[]} searchParams="" />
      </StoreProvider>,
    );

    const checkbox = screen.getByLabelText('Add to Store');
    await user.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith(togglePerson(mockPerson));
  });
});
