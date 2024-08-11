import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import Main from '@/components/main/Main';
import { mockResponse } from '@/tests/mockPeople';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    asPath: '/',
    back: vi.fn(),
    query: {
      search: 'l',
      page: '2',
    },
  }),
  useSearchParams: () => ({
    get: (key: string) => {
      const params: { [key: string]: string } = {
        search: 'l',
        page: '2',
      };
      return params[key];
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
