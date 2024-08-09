import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import Content from '@/components/content/Content';
import { mockPeople, mockPerson } from '@/tests/mockPeople';

vi.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
  }),
}));

describe('Content', () => {
  it('should render correctly with no current person', () => {
    const component = render(
      <StoreProvider>
        <Content people={mockPeople} currentPerson={null} />
      </StoreProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with current person', () => {
    const component = render(
      <StoreProvider>
        <Content people={mockPeople} currentPerson={mockPerson} />
      </StoreProvider>,
    );

    expect(component).toMatchSnapshot();
  });
});
