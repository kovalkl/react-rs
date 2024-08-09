import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import Main from '@/components/main/Main';
import { mockResponse } from '@/tests/mockPeople';

vi.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    back: () => {},
    query: {
      search: '',
    },
  }),
}));

describe('Main', () => {
  it('should render correctly without current person', () => {
    const component = render(
      <StoreProvider>
        <Main people={mockResponse} currentPerson={null} />
      </StoreProvider>,
    );

    expect(component).toMatchSnapshot();
  });
});
