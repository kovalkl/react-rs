import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StoreProvider from '@/components/StoreProvider';
import Flyout from '@/components/flyout/Flyout';
import { clearState } from '@/lib/selectedPeopleSlice';

const mockDispatch = vi.fn();
const mockSelector = vi.fn();

vi.mock('@/lib/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => mockSelector,
}));

describe('Flyout', () => {
  it('should render correctly', () => {
    const component = render(
      <StoreProvider>
        <Flyout />
      </StoreProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should call clearState when the button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <StoreProvider>
        <Flyout />
      </StoreProvider>,
    );

    const button = screen.getByText('Unselect all');
    await user.click(button);
    expect(mockDispatch).toHaveBeenCalledWith(clearState());
  });
});
