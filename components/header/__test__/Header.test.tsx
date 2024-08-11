import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import Header from '@/components/header/Header';

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
      return key in params ? params[key] : '';
    },
  }),
}));

describe('Header', () => {
  it('should render correctly', () => {
    const component = render(
      <StoreProvider>
        <Header />
      </StoreProvider>,
    );

    expect(component).toMatchSnapshot();
  });
});
