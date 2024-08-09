import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StoreProvider from '@/components/StoreProvider';
import SearchBar from '@/components/searchBar/SearchBar';

const mockPush = vi.fn();

vi.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('SearchBar', () => {
  it('should render correctly', () => {
    const component = render(
      <StoreProvider>
        <SearchBar />
      </StoreProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should call push function when search button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <StoreProvider>
        <SearchBar />
      </StoreProvider>,
    );

    const button = screen.getByText('Search');
    await user.click(button);
    expect(mockPush).toHaveBeenCalled();
  });
});
