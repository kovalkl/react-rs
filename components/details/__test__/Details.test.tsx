import { render } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import ThemeProvider from '@/components/ThemeProvider';
import Details from '@/components/details/Details';
import { mockPerson } from '@/tests/mockPeople';

vi.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    back: () => {},
  }),
}));

describe('Details', () => {
  it('should render details data correctly', () => {
    render(
      <StoreProvider>
        <ThemeProvider>
          <Details currentPerson={mockPerson} />
        </ThemeProvider>
      </StoreProvider>,
    );
  });
});
