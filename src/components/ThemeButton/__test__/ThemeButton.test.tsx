import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import ThemeButton from '@/components/themeButton/ThemeButton';
import store from '@/store/index';

describe('ThemeButton', () => {
  it('should render correctly', () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeButton />
        </MemoryRouter>
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
