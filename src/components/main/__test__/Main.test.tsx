import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Main from '@/components/main/Main';
import store from '@/store/index';

describe('Main', () => {
  it('should render correctly', () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
