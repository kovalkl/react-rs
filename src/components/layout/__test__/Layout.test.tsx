import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import store from '@/store/index';

describe('Flyout', () => {
  it('should render correctly', () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
