import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Button from '@/components/UI/button/Button';
import store from '@/store/index';

describe('Button', () => {
  it('should render correctly', () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Button variant="error">test</Button>
        </MemoryRouter>
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
