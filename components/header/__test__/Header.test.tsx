import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import Header from '@/components/header/Header';

vi.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    back: () => {},
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
